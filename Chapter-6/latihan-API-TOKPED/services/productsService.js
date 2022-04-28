const productsRepository = require("../repositories/productsRepository");

class productsService {
    static async create({
        shop_id,
        name,
        price,
        stock
    }) {
        if (!price) {
            return {
                status: false,
                code_status: 400,
                message: "harga produk wajib diisi",
                data: {
                    registered_shops: null,
                }
            }
        };

        if (!name) {
            return {
                status: false,
                code_status: 400,
                message: "nama produk wajib diisi",
                data: {
                    registered_shops: null,
                },
            };
        }

        if (!stock) {
            return {
                status: false,
                code_status: 400,
                message: "stock produk wajib diisi",
                data: {
                    registered_shops: null,
                },
            };
        }

        const createdProducts = await productsRepository.create({
            shop_id,
            name,
            price,
            stock
        });

        return {
            status: true,
            code_status: 201,
            message: "produk berhasil dibuat",
            data: {
                createdProducts: createdProducts,
            },
        };
    }

    static async updated({
        id,
        shop_id,
        name,
        price,
        stock
    }) {
        const getProducts = await productsRepository.getById({
            id
        })

        if (getProducts.shop_id == shop_id) {
            const updatedProducts = await productsRepository.updated({
                id,
                name,
                price,
                stock
            })

            return {
                status: true,
                code_status: 200,
                message: "produk berhasil diupdate",
                data: {
                    updatedProducts: updatedProducts,
                },
            };
        }else {
            return {
                status: false,
                code_status: 401,
                message: "resource tidak ada",
                data: {
                    updatedProducts: null,
                },
            };
        }
    }

    static async deleted({shop_id, id}){
        const getProducts = await productsRepository.getById({id});

        if( getProducts.shop_id == shop_id){
            const deletedProducts = await productsRepository.deleted({id});

            return {
                status: true,
                code_status: 200,
                message: "produk berhasil dihapus",
                data: {
                    deletedProducts: deletedProducts,
                },
            }
        }else {
            return {
                status: false,
                code_status: 401,
                message: "resource tidak ada",
                data: {
                    updatedProducts: null,
                },
            };
        } 
    }
}

module.exports = productsService;