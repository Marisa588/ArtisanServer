const Express = require("express")
const app = Express()

const controllers = require('./controllers')

// app.use('/test', (req, res) => {
//     res.send("This is the RAD RECORDS SERVER! It's RAD!")
// })

app.use("/products", controllers.productController)

app.listen(3001, () => {
    console.log(`[Server]: App is listening on 3001.`)
})
