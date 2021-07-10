const Express = require("express")
const router = Express.Router()
const { ProductModel } = require("../models");
const Product = require("../models/product");
const validateJWT = require("../middleware/validate-jwt");

router.get('/', (req, res) => {
    res.send("This is the RAD RECORDS product endpoint")
})

router.post('/', validateJWT, async (req, res) => {
    const { title, description, price, condition } = req.body.product;
    const { id } = req.user;
    const productEntry = {
        title,
        description,
        price,
        condition,
        owner_id: id
    }
    try {
        const newProduct = await ProductModel.create(productEntry);
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router