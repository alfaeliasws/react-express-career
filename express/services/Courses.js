const db = require("./db");
const helper = require("../helper");

function variableInitiator () {
    let success = 0;
    let message = "Data not found";
    let status = 204;
    let courses = [];
    
    return {success, message, status, courses}
}

async function update(id, body) {

  let {success, message, status, courses}  = variableInitiator()
  const result = await db.query(`
    UPDATE courses SET  
      title = ?,
      certification = ?,
      year = ?,
      updated_at = NOW(),
    WHERE deleted_at IS NULL
        AND id = ?
    `, [
      body.title,
      body.certification,
      body.year,
      id])

  courses = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    courses = result;
  }

}

async function create(body) {

  let {success, message, status, courses}  = variableInitiator()
  const result = await db.query(`
    INSERT INTO courses SET  
      title = ?,
      certification = ?,
      year = ?,
      user_id = ?,
      created_at = NOW(),
    `, [
      body.title,
      body.certification,
      body.year,
      body.user_id])

  courses = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    courses = result;
  }

  return {
      success,
      status,
      message,
      courses,
  };

}

async function remove(id) {
  let {success, message, status, users}  = variableInitiator()

  await db.query(`UPDATE courses set deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL`, [id]);

  users = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Remove Success";
    users = result;
  }

  return {
      success,
      status,
      message,
      users,
  };
}

module.exports = {
  // getAll,
  // getById,
  create,
  update,
  remove
};
