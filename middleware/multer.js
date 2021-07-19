require("dotenv").config();

const aws = require('aws-sdk')
const multer = require("multer")
const multerS3 = require('multer-s3')

const s3 = new aws.S3({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
    bucket: process.env.BUCKET_NAME
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: process.env.BUCKET_NAME,
        acl: 'public-read',
        metadata: function (req, file, cb) {
            console.log(req.body)
            cb(null, {fieldName: file.fieldname})
        },
        key: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname)
        }
    })
})
// For local files
// const upload = multer({ storage:fileStorageEngine })
// module.exports = fileStorageEngine

module.exports = upload