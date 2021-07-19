require("dotenv").config();

const aws = require('aws-sdk')
const multer = require("multer")
const multerS3 = require('multer-s3')

// aws.config.update({
//     secretAccessKey: 'ruUZgwmiBDK0CDCjfyQkrB8ABtH55MSWiYlMM0od',
//     accessKeyId: 'AKIAUN5P3JMEW5JLBRUL',
//     region: 'us-west-2'
// })

// const s3 = new aws.S3({
//     secretAccessKey: 'ruUZgwmiBDK0CDCjfyQkrB8ABtH55MSWiYlMM0od',
//     accessKeyId: 'AKIAUN5P3JMEW5JLBRUL',
//     bucket: 'eleven-wizards'
// })

// const s3 = new aws.S3({
//     accessKeyId: 'AKIA23IMNJ77B2KKEK6L',
//     secretAccessKey: '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',
//     bucket: 'mrbearnewbucket'
// });

const s3 = new aws.S3({
    accessKeyId: 'AKIAUN5P3JMEW5JLBRUL',
    secretAccessKey: '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',
    bucket: 'eleven-wizards'
});

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'eleven-wizards',
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

// const upload = multer({ storage:fileStorageEngine })


// module.exports = fileStorageEngine
module.exports = upload