const { DataTypes } = require("sequelize")
const db = require("../db")

const Product = db.define("product", {
    artist: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    album: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    condition: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    owner_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
})

module.exports = Product