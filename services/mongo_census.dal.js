const dal = require("./mdb");

async function getAllCensus() {
  try {
    await dal.connect();
    const cursor = dal.db("sprint").collection("census").find();
    const results = await cursor.toArray();
    return results;
  } catch (error) {
    console.log(error);
  }
}
async function getCensusByEmail(email) {
  try {
    await dal.connect();
    const result = dal
      .db("sprint")
      .collection("census")
      .findOne({ email: email });
    return result;
  } catch (error) {
    console.log(error);
  }
}
async function getCensusById(id) {
  try {
    await dal.connect();
    const result = dal.db("sprint").collection("census").findOne({ _id: id });
    return result;
  } catch (error) {
    console.log(error);
  }
}

async function getCensusByFamilyName(family_name) {
  try {
    await dal.connect();
    const cursor = dal
      .db("sprint")
      .collection("census")
      .find({ family_name: family_name });
    const results = await cursor.toArray();
    return results;
  } catch (error) {
    console.log(error);
  }
}

// async function addCensus(name, email, password, uuidv4) {
//   let newLogin = JSON.parse(
//     `{ "census_year": "` +
//     census_year +
//       `", "household_id": "` +
//       household_id +
//       `", "family_name": "` +
//       password +
//       `", "uuid": "` +
//       uuidv4 +
//       `" }`
//   );
//   try {
//     await dal.connect();
//     const result = await dal
//       .db("sprint")
//       .collection("census")
//       .insertOne(newCensus);
//     return result.insertedId;
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = {
  getAllCensus,
  getCensusByEmail,
  getCensusById,
  getCensusByFamilyName,
};
