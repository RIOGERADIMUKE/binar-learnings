const shopsService = require("../services/shopsService");

const getProducts = async ( req, res, next) => {
    const { id } = req.params;

    const {
        status,
        code_status,
        message,
        data
    } = await shopsService.getProducts({
        id,
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

const updateShops = async (req, res) => {
    const {id } = req.params;

    const {
        email,
        name,
        phone_number,
        password,
    } = req.body;

    const {
        status,
        code_status,
        message,
        data
    } = await shopsService.updateShops({
        id,
        email,
        name,
        phone_number,
        password,
    });

    res.status(code_status).send({
        status: status,
        message: message,
        data: data,
    });
};

module.exports = { getProducts, updateShops }