const {
  shops,
  products
} = require("../models");

class productsRepository {
  static async create({
      shop_id,
      name,
      price,
      stock
  }) {
      const created_products = products.create({
          shop_id,
          name,
          price,
          stock
      })

      return created_products;
  }

  static async getById({
      id
  }) {
      const getProducts = products.findOne({
          where: {
              id
          }
      });

      return getProducts;
  }

  static async updated({
      id,
      name,
      price,
      stock
  }) {
      const updatedProducts = await products.update({
          name,
          price,
          stock
      }, {
          where: {
              id
          }
      });

      return updatedProducts;
  }

  static async deleted({
      id
  }) {
      const deletedProducts = await products.destroy({
          where: {
              id
          }
      });

      return deletedProducts;
  }
}


module.exports = productsRepository;