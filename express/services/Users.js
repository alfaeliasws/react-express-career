const db = require("./db");
const helper = require("../helper");

function variableInitiator () {
    let success = 0;
    let message = "Data not found";
    let status = 204;
    let users = [];
    
    return {success, message, status, users}
}
async function getAll() {

  let {success, message, status, users}  = variableInitiator()

  const queryUsers = await db.query(`
   SELECT 
      u.id,
      u.username,
      u.full_name,
      e.level AS last_education,
      u.email,
      u.role,
      u.applied_position,
      u.register_number,
      u.place_of_birth,
      u.date_of_birth,
      u.sex,
      u.religion,
      u.blood_type,
      u.status,
      u.register_address,
      u.current_address,
      u.phone_number,
      u.emergency_name,
      u.skill,
      u.availibilty_all_office,
      u.expected_salary,
      u.created_at,
      u.updated_at,
      u.deleted_at
    FROM 
      users u LEFT JOIN
	educations e ON e.user_id = u.id 
	WHERE u.deleted_at IS NULL and e.deleted_at IS NULL and e.id = (SELECT MAX(e2.id) FROM educations e2 WHERE e2.deleted_at IS NULL AND e2.user_id = u.id AND e2.level != "Certificate");
    ;
    `)
  users = helper.emptyOrRows(queryUsers);

  
  if ((users?.length ?? 0) > 0) {
    success = 1;
    status = 200;
    message = "Data found";
    users = users;
  }

  return {
    success,
    status,
    message,
    users
  };
}

async function getById(id) {
    let {success, message, status, users}  = variableInitiator()
    const result = await db.query(`
      SELECT 
      u.id,
      u.username,
      u.full_name,
      u.email,
      u.role,
      u.applied_position,
      u.register_number,
      u.place_of_birth,
      u.date_of_birth,
      u.sex,
      u.religion,
      u.blood_type,
      u.status,
      u.skill,
      u.register_address,
      u.current_address,
      u.phone_number,
      u.emergency_name,
      u.availibilty_all_office,
      u.expected_salary,
      u.created_at,
      u.updated_at,
      u.deleted_at
    FROM 
      users u
    WHERE u.deleted_at IS NULL
        AND u.id = ?
    ;
    `, [id])

    const resultCareers = await db.query(`
      SELECT * FROM career_history ch WHERE ch.deleted_at IS NULL AND ch.user_id = ?
    ;
    `, [id])

    const resultEducation = await db.query(`
      SELECT * FROM educations e WHERE e.deleted_at IS NULL AND e.user_id = ?
    ;
    `, [id])

    const resultCourses = await db.query(`
      SELECT * FROM courses co WHERE co.deleted_at IS NULL AND co.user_id = ?
    ;
    `, [id])

    users = helper.emptyOrRows(result);
    const educations = helper.emptyOrRows(resultEducation)
    const careers = helper.emptyOrRows(resultCareers)
    const courses = helper.emptyOrRows(resultCourses)

    const data = {
      users, educations, courses, careers
    }

    if (result) {
      success = 1;
      status = 200;
      message = "Data found";
    }

    return {
        success,
        status,
        message,
        data,
    };

}

async function update(id, body) {

  // console.log({id})
  // console.log({userUpdate: body.users})
  console.log({userUpdateEducation: body.educations})
  // console.log({userUpdateCourses: body.courses})
  // console.log({userUpdateCareers: body.careers})
  const userArray = body.users[0]
  const educationsArray = body.educations
  const coursesArray = body.courses
  const careersArray = body.careers

  let {success, message, status, users}  = variableInitiator()
  const result = await db.query(`
    UPDATE users SET  
      username = ?,
      full_name = ?,
      email = ?,
      role = ?,
      applied_position = ?,
      register_number = ?,
      place_of_birth = ?,
      date_of_birth = ?,
      sex = ?,
      religion = ?,
      blood_type = ?,
      status = ?,
      register_address = ?,
      current_address = ?,
      phone_number = ?,
      emergency_name = ?,
      skill = ?,
      availibilty_all_office = ?,
      expected_salary = ?,
      updated_at = NOW()
    WHERE deleted_at IS NULL
        AND id = ?
    `, [
      userArray.username,
      userArray.full_name,
      userArray.email,
      userArray.role,
      userArray.applied_position,
      userArray.register_number,
      userArray.place_of_birth,
      userArray.date_of_birth,
      userArray.sex,
      userArray.religion,
      userArray.blood_type,
      userArray.status,
      userArray.register_address,
      userArray.current_address,
      userArray.phone_number,
      userArray.emergency_name,
      userArray.skill,
      userArray.availibilty_all_office,
      userArray.expected_salary,      
      id])

  users = helper.emptyOrRows(result);

  await db.query(`UPDATE career_history set deleted_at = NOW() WHERE user_id = ? AND deleted_at IS NULL`, [id]);
  await db.query(`UPDATE courses set deleted_at = NOW() WHERE user_id = ? AND deleted_at IS NULL`, [id]);
  await db.query(`UPDATE educations set deleted_at = NOW() WHERE user_id = ? AND deleted_at IS NULL`, [id]);

  for (let index = 0; index < educationsArray.length; index++) {
    const result = await db.query(`
      INSERT INTO educations SET  
        level = ?,
        institution = ?,
        major = ?,
        graduation_year = ?,
        gpa = ?,
        user_id = ?,
        created_at = NOW()
      `, [
        educationsArray[index].level ?? "NULL",
        educationsArray[index].institution ?? "NULL",
        educationsArray[index].major ?? "NULL",
        educationsArray[index].graduation_year ?? "NULL",
        educationsArray[index].gpa ?? "NULL",
        id]
    )
  }

  for (let index = 0; index < coursesArray.length; index++) {
    const result = await db.query(`
      INSERT INTO courses SET  
        title = ?,
        certification = ?,
        year = ?,
        user_id = ?,
        created_at = NOW()
      `, [
        coursesArray[index].title ?? "NULL",
        coursesArray[index].certification ?? "NULL",
        coursesArray[index].year ?? "NULL",
        id])
  }


  for (let index = 0; index < careersArray.length; index++) {
    const result = await db.query(`
      INSERT INTO career_history SET  
        company = ?,
        position = ?,
        last_salary = ?,
        year = ?,
        user_id = ?,
        created_at = NOW()
      `, [
        careersArray[index].company ?? "NULL",
        careersArray[index].position ?? "NULL",
        careersArray[index].last_salary ?? "NULL",
        careersArray[index].year ?? "NULL",
        id])
  }

  

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    users = result;
  }

  return {
      success,
      status,
      message,
      users,
  };

}

async function remove(id) {
  let {success, message, status, users}  = variableInitiator()
  
  const result = await db.query(`UPDATE users set deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL`, [id]);
  await db.query(`UPDATE courses set deleted_at = NOW() WHERE user_id = ? AND deleted_at IS NULL`, [id]);
  await db.query(`UPDATE career_history set deleted_at = NOW() WHERE user_id = ? AND deleted_at IS NULL`, [id]);
  await db.query(`UPDATE educations set deleted_at = NOW() WHERE user_id = ? AND deleted_at IS NULL`, [id]);

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
  getAll,
  getById,
  update,
  remove
};
