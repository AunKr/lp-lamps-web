module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        category: {
            type: DataTypes.STRING
        },
        subcategory: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT
        },
        imageName: {
            type: DataTypes.STRING
        },
        driveId: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        }
    
    })
    return Product
}