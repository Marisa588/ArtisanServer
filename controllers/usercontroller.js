const Express = require("express")
const router = Express.Router()

router.get('/user', (req, res) => {
    res.send("This is the user controller")
})

router.get('/user1', (req, res) => {
    res.send("This is the user controller user1")
})

module.exports = router