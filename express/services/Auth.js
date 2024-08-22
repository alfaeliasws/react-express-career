const db = require("./db");
const helper = require("../helper");
const config = require("../config");
const token = require("./Tokens");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

function variablesInitiator () {
    let success = 0;
    let status = 204;
    let user = [];
    let message = "Data not found";
    let resToken = "";
    let userDetail = {};

    return {success, status, user, message, resToken, userDetail}
}

async function login(body) {

    let {success, status, user, message, resToken, userDetail} = variablesInitiator()

    const result = await db.query(
        `SELECT username, role, id FROM users WHERE username = ? AND password = MD5(?)`
    , [ body.username , body.password ]);
    message = "Account not found";
    user = helper.emptyOrRows(result);

    if (result.length > 0) {
        userDetail = {}
        success = 1;
        status = 200;
        message = "Data found";
        userDetail = {
            id: result[0].id,
            username: result[0].username,
            role: result[0].role
        };

        try {
            resToken = token.generateAccessToken({ userDetail });
        } catch (err) {
            console.error(`Error generate token `, err.message);
        }
    }

    return {
        success,
        status,
        message,
        userDetail,
        token: resToken,
    };
}

async function register(req) {

    let {success, status, user, message, resToken, userDetail} = variablesInitiator()
    message = "Email or Username has been used"

    const validateExistence = await db.query(
        `SELECT username FROM users WHERE username= ?` , [req.username]    );
    
    message = "Account not found";
    user = helper.emptyOrRows(validateExistence);

    if (user.length <= 0) {
        const insertUser = await db.query(
            `INSERT INTO users SET username= ?, password=MD5(?), role='candidate'` , [req.username, req.password]
        )

        const data = helper.emptyOrRows(insertUser);

        const users = await db.query(`SELECT id, username, role FROM users WHERE id = ? ` , [data.insertId]    );

        if(insertUser){
            userDetail = {}
            success = 1;
            status = 200;
            message = "Data found";
            userDetail = {
                id: users[0].id,
                username: users[0].username,
                role: users[0].role
            };
        } else {
            message = "Register Failed"
        }

        try {
            resToken = token.generateAccessToken({ userDetail });
        } catch (err) {
            console.error(`Error generate token `, err.message);
        }
    } else {
        message = "Username taken"
    }

    return {
        success,
        status,
        message,
        userDetail,
        token: resToken,
    };
}

module.exports = {
  login,
  register
};
