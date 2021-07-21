const Express = require("express")
const router = Express.Router()
const { ProductModel } = require("../models");
const Product = require("../models/product");
const validateJWT = require("../middleware/validate-jwt");


// show all products 
router.get('/', async (req, res) => {
    try {
        const products = await ProductModel.findAll()
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({error: err});
    }
})

// post a product 
router.post('/', validateJWT, async (req, res) => {
    const { artist, album, description, price, condition, imageUrl } = req.body.product;
    const { id } = req.user;
    const productEntry = {
        artist,
        album,
        description,
        price,
        condition,
        imageUrl,
        owner_id: id
    }
    try {
        const newProduct = await ProductModel.create(productEntry);
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// edit a product 
router.post("/:id", validateJWT, async (req, res) => {
    const { artist, album, description, price, condition, imageUrl } = req.body.product;
    const productId = req.params.id;
    const { id } = req.user;

    const query = {
        where: {
            owner_id: id,
            id: productId
        }
    };

    const updatedProduct = {
        artist: artist,
        album: album,
        description: description,
        price: price,
        condition: condition,
        imageUrl: imageUrl
    };
    try {
        const update = await ProductModel.update(updatedProduct, query);
        res.status(200).json(update);
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

// delete a product
router.delete("/:id", validateJWT, async (req, res) => {
    const productId = req.params.id;
    const { id } = req.user;
    try {
        const query = {
            where: {
                owner_id: id,
                id: productId
            }
        }
        await ProductModel.destroy(query);
        res.status(200).json({ message: "Product removed." })
    } catch (err) {
        res.status(500).json({ error: err });
    }
});

module.exports = router