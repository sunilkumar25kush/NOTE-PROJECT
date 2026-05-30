const app = require("./src/app")
const connectdb = require("./src/db/bd")

require("dotenv").config()

const PORT = process.env.PORT || 3000

connectdb()

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})