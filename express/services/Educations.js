const db = require("./db");
const helper = require("../helper");

function variableInitiator () {
    let success = 0;
    let message = "Data not found";
    let status = 204;
    let educations = [];
    
    return {success, message, status, educations}
}

async function update(id, body) {

  let {success, message, status, educations}  = variableInitiator()
  const result = await db.query(`
    UPDATE educations SET  
      level = ?,
      institution = ?,
      major = ?,
      graduation_year = ?,
      gpa = ?,
      updated_at = NOW(),
    WHERE deleted_at IS NULL
        AND id = ?
    `, [
      body.level,
      body.institution,
      body.major,
      body.graduation_year,
      body.gpa,
      id])

  educations = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    educations = result;
  }

}

async function create(body) {

  let {success, message, status, educations}  = variableInitiator()
  const result = await db.query(`
    INSERT INTO educations SET  
      level = ?,
      institution = ?,
      major = ?,
      graduation_year = ?,
      gpa = ?,
      user_id = ?,
      created_at = NOW(),
    `, [
      body.level,
      body.institution,
      body.major,
      body.graduation_year,
      body.gpa,
      body.user_id])

  educations = helper.emptyOrRows(result);

  if (result) {
    success = 1;
    status = 200;
    message = "Update Success";
    educations = result;
  }

  return {
      success,
      status,
      message,
      educations,
  };

}

async function remove(id) {
  let {success, message, status, users}  = variableInitiator()

  await db.query(`UPDATE educations set deleted_at = NOW() WHERE id = ? AND deleted_at IS NULL`, [id]);

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
