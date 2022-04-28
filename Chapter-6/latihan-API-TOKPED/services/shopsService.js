const shopsRepository = require("../repositories/shopsRepository");
const bycrypt = require("bcrypt");
const SALT_ROUND = 10;

class shopsService {
    static async getProducts({
        id
    }) {
        const getProducts = await shopsRepository.getProducts({
            id
        });

        return {
            status: true,
            code_status: 200,
            message: "produk berhasil diambil",
            data: {
                products: getProducts,
            },
        };
    }

    static async updateShops({
        shop_id,
        id,
        email,
        name,
        phone_number,
        password,
    }) {
        if (!email) {
            return {
                status: false,
                code_status: 400,
                message: "email wajib diisi",
                data: {
                    update_shops: null,
                }
            }
        };

        if (!name) {
            return {
                status: false,
                code_status: 400,
                message: "name wajib diisi",
                data: {
                    update_shops: null,
                },
            };
        }

        if (!phone_number) {
            return {
                status: false,
                code_status: 400,
                message: "nomor hp wajib diisi",
                data: {
                    update_shops: null,
                },
            };
        }

        if (!password) {
            return {
                status: false,
                code_status: 400,
                message: "password wajib diisi",
                data: {
                    update_shops: null,
                },
            };
        } else if (password.length < 5) {
            return {
                status: false,
                code_status: 400,
                message: "password minimal 5 karakter",
                data: {
                    update_shops: null,
                },
            };
        }

        if(shop_id !== id){
            return {
                status: false,
                code_status: 401,
                message: "anda tidak boleh edit data orang lain.",
                data: {
                    update_shops: null,
                },
            };
        }

        const hashingPassword = await bycrypt.hash(password, SALT_ROUND);
        const updateShops = await shopsRepository.updateShops({
            id,
            email,
            name,
            phone_number,
            password: hashingPassword,
        })

        return {
            status: true,
            code_status: 200,
            message: "data berhasil diupdate",
            data: {
                update_shops: updateShops,
            },
        };
    }
}

module.exports = shopsService;