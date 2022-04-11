const dal = require("./mongodb_db");

async function getLogins() {
  try {
    await dal.connect();
    const cursor = dal.db("census1").collection("Logins").find();
    const results = await cursor.toArray();
    return results;
  } catch (error) {
    console.log(error);
  }
}
async function getLoginByEmail(email) {
  try {
    await dal.connect();
    const result = dal
      .db("census1")
      .collection("logins")
      .findOne({ email: email });
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function getLoginById(id) {
  try {
    await dal.connect();
    const result = dal.db("census1").collection("logins").findOne({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }

  let SQL = `SELECT * FROM public."census1" WHERE household_id = $1`;
  try {
    let results = await dal.query(SQL, [id]);
    return results.rows[0];
  } catch (error) {
    console.log(error);
  }
}

async function addLogin(name, email, password, uuidv4) {
  let newLogin = JSON.parse(
    `{ "name": "` +
      name +
      `", "email": "` +
      email +
      `", "password": "` +
      password +
      `", "uuid": "` +
      uuidv4 +
      `" }`
  );
  try {
    await dal.connect();
    const result = await dal
      .db("census1")
      .collection("logins")
      .insertOne(newLogin);
    return result.insertedId;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getLogins,
  addLogin,
  getLoginByEmail,
  getLoginById,
};
