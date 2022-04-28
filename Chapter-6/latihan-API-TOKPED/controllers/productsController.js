const productsService = require("../services/productsService");

const create = async (req, res) => {
    const {
        name,
        price,
        stock
    } = req.body;

    const shop_id = req.shop.id

    const {
        status,
        code_status,
        message,
        data
    } = await productsService.create({
        shop_id,
        name,
        price,
        stock,
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

const updated = async (req, res) => {
    const {id } = req.params;

    const {
        name,
        price,
        stock
    } = req.body;

    const shop_id = req.shop.id

    const {
        status,
        code_status,
        message,
        data
    } = await productsService.updated({
        id,
        shop_id,
        name,
        price,
        stock,
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

const deleted = async (req, res) => {
    const {id } = req.params;

    const shop_id = req.shop.id

    const {
        status,
        code_status,
        message,
        data
    } = await productsService.deleted({
        id,
        shop_id,
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};
module.exports = {
    create,
    updated,
    deleted
}