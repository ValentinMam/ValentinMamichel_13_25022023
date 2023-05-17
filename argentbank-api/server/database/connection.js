

const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'
// const databaseUrl = "mongodb+srv://valentinmam:Kaujn0Vz9g3Vs4Ri@argentbank.hv4txfd.mongodb.net/?retryWrites=true&w=majority"
module.exports = async () => {
  try {
    console.log("000000000000000000:"+databaseUrl)
    await mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
