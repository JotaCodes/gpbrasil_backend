
const datb = require('../database/db');


export default class CategoryModule {
  constructor() {
  }

  async registerCategory( name: string) {
    const response = await datb.connection.query(
      'INSERT INTO category (name) VALUES ($1) RETURNING *',
      [name],
    );
    return response.rows[0];
  }

  async editCategory(name: string, id: number) {
    const response = await datb.connection.query(
      'UPDATE category SET name = $1 WHERE id = $2 RETURNING *',
      [name, id],
    );
    return response.rows[0];
  }

  async listCategory(searchText?: string) {
    if (searchText == undefined) {
      const response = await datb.connection.query(
        `SELECT * from category`,
        [],
      );
      return response.rows;
    } else {
      const response = await datb.connection.query(
        `SELECT * from category WHERE name LIKE '%${searchText}%'`,
      );
      return response.rows;
    }
  }

  async detailCategory(id: number) {
    const response = await datb.connection.query(
      'SELECT * from category WHERE id = $1',
      [id],
    );
    return response.rows[0];
  }

  async deleteCategory(id: number) {
    const response = await datb.connection.query(
      'DELETE from category WHERE id = $1',
      [id],
    );
    return { error: false };
  }

}