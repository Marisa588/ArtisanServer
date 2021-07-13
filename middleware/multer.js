const multer = require("multer")

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./testimages")
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage:fileStorageEngine })


module.exports = fileStorageEngine
module.exports = upload