const {
    shops,
    products
} = require("../models");

class shopsRepository {
    static async getByEmail({
        email
    }) {
        const getShopsByEmail = await shops.findOne({
            where: {
                email
            }
        })
        return getShopsByEmail;
    }

    static async getById({
        id
    }) {
        const getShopsById = await shops.findOne({
            where: {
                id
            }
        })
        return getShopsById;
    }

    static async register({
        email,
        name,
        phone_number,
        password: hashingPassword,
    }) {
        const registered_shops = shops.create({
            email,
            name,
            phone_number,
            password: hashingPassword,
        })

        return registered_shops;
    }

    static async getProducts({
        id
    }) {
        const getProducts = await products.findAll({
            where: {
                shop_id: id
            }
        });

        return getProducts;
    }

    static async updateShops({
        id,
        email,
        name,
        phone_number,
        password,
    }) {
        const updateShops = await shops.update({
            email,
            name,
            phone_number,
            password,
        }, {
            where: {
                id
            }
        });

        return updateShops;
    }
}


module.exports = shopsRepository;