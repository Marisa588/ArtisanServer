const Express = require("express")
const router = Express.Router()

router.get('/product', (req, res) => {
    res.send("This is the RAD RECORDS product endpoint")
})

module.exports = router