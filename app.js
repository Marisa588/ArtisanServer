require("dotenv").config();

const Express = require("express")
const app = Express()

const dbConnection = require("./db");

const controllers = require('./controllers');
const upload = require("./middleware/multer");

app.use(Express.json());

app.use("/products", controllers.productController)

app.use("/user", controllers.userController)

app.post("/albumcover", upload.single("image"), (req, res) => {
    console.log(req.file)
    coverName = res.req.file.filename
    res.send(coverName)
})
dbConnection.authenticate()
.then(() => dbConnection.sync())
.then(() => {
    app.listen(3001, () => {
        console.log(`[Server]: App is listening on 3001.`);
    });
})
.catch((err) => {
    console.log(`[Server]: Server crashed. Error = ${err}`);
})
