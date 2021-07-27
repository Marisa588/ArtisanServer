require("dotenv").config();

const Express = require("express")
const app = Express()

const dbConnection = require("./db");

const controllers = require('./controllers');
const upload = require("./middleware/multer");

app.use(Express.json());

app.use(require('./middleware/headers'));

app.use("/products", controllers.productController)

app.use("/user", controllers.userController)

app.post("/albumcover", upload.single("image"), (req, res) => {
    console.log(req.file)
    coverName = res.req.file.filename
    res.send(coverName)
})


const multer = require("multer");
const cors = require("cors");

app.use(cors());

var upload2 = multer({ dest: "../public/uploads/" });


app.post("/upload", upload.single("file"), async (req, res) => {
    try {    
      if (req.file) {
        res.send({
          status: true,
          message: "File Uploaded!",
        });
      } else {
        res.status(400).send({
          status: false,
          data: "File Not Found :(",
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });



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
