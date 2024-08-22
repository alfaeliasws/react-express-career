const db = require("./db");
const helper = require("../helper");

function variableInitiator () {
    let success = 0;
    let message = "Data not found";
    let status = 204;
    let careers = [];
    
    return {success, message, status, careers}
}
// async function getAll() {

//   let {success, message, status, users}  = variableInitiator()

//   const queryUsers = await db.query(`
//     SELECT 
//       u.id,
//       u.username,
//       u.full_name,
//       u.email,
//       u.role,
//       u.register_number,
//       u.place_of_birth,
//       u.date_of_birth,
//       u.sex,
//       u.religion,
//       u.blood_type,
//       u.status,
//       u.register_address,
//       u.current_address,
//       u.phone_number,
//       u.emergency_name,
//       u.skill,
//       u.availibilty_all_office,
//       u.expected_salary,
//       u.created_at,
//       u.updated_at,
//       u.deleted_at
//     FROM 
//       users u
//     WHERE u.deleted_at IS NULL
//     ;
//     `)
//   users = helper.emptyOrRows(queryUsers);

  
//   if ((result?.length ?? 0) > 0) {
//     success = 1;
//     status = 200;
//     message = "Data found";
//     users = users;
//   }

//   return {
//     success,
//     status,
//     message,
//     users
//   };
// }

// async function getById(id) {
//     let {success, message, status, users}  = variableInitiator()
//     const result = await db.query(`
//       SELECT 
//       u.id,
//       u.username,
//       u.full_name,
//       u.email,
//       u.role,
//       u.register_number,
//       u.place_of_birth,
//       u.date_of_birth,
//       u.sex,
//       u.religion,
//       u.blood_type,
//       u.status,
//       u.register_address,
//       u.current_address,
//       u.phone_number,
//       u.emergency_name,
//       u.skill,
//       u.availibilty_all_office,
//       u.expected_salary,
//       u.created_at,
//       u.updated_at,
//       u.deleted_at
//     FROM 
//       users u
//     WHERE u.deleted_at IS NULL
//         AND u.id = ?
//     ;
//     `, [id])

//     const resultCareers = await db.query(`
//       SELECT * FROM career_history ch WHERE ch.deleted_at IS NULL AND ch.user_id = ?
//     ;
//     `, [id])

//     const resultEducation = await db.query(`
//       SELECT * FROM educations e WHERE e.deleted_at IS NULL AND e.user_id = ?
//     ;
//     `, [id])

//     const resultCourses = await db.query(`
//       SELECT * FROM courses co WHERE co.deleted_at IS NULL AND co.user_id = ?
//     ;
//     `, [id])

//     users = helper.emptyOrRows(result);
//     const educations = helper.emptyOrRows(resultEducation)
//     const careers = helper.emptyOrRows(resultCareers)
//     const courses = helper.emptyOrRows(resultCourses)

//     const data = {
//       users, educations, courses, careers
//     }

//     if (result) {
//       success = 1;
//       status = 200;
//       message = "Data found";
//     }

//     return {
//         success,
//         status,
//         message,
//         data,
//     };

// }

async function update(id, body) {

  let {success, message, status, careers}  = variableInitiator()
  const result = await db.query(`
    UPDATE career_history SET  
      company = ?,
      position = ?,
      last_salary = ?,
      year = ?,
      updated_at = NOW(),
    WHERE deleted_at IS NULL
        AND id = ?
    `, [
      body.company,
      body.position,
      body.last_salary,
      body.year,
      id])

  careers = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    careers = result;
  }

}

async function create(body) {

  let {success, message, status, careers}  = variableInitiator()
  const result = await db.query(`
    INSERT INTO career_history SET  
      company = ?,
      position = ?,
      last_salary = ?,
      year = ?,
      user_id = ?,
      created_at = NOW(),
    `, [
      body.company,
      body.position,
      body.last_salary,
      body.year,
      body.user_id])

  careers = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    careers = result;
  }

  return {
      success,
      status,
      message,
      careers,
  };

}

async function remove(id) {
  let {success, message, status, users}  = variableInitiator()

  await db.query(`UPDATE career_history set deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL`, [id]);

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
