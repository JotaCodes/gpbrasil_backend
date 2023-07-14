
const datb = require('../database/db');


export default class DifferentialsModule {
  constructor() {
  }

  async registerDifferentials( name: string) {
    const response = await datb.connection.query(
      'INSERT INTO differentials (name) VALUES ($1) RETURNING *',
      [name],
    );
    return response.rows[0];
  }

  async editDifferentials(name: string, id: number) {
    const response = await datb.connection.query(
      'UPDATE differentials SET name = $1 WHERE id = $2 RETURNING *',
      [name, id],
    );
    return response.rows[0];
  }

  async listDifferentials(searchText?: string) {
    if (searchText == undefined) {
      const response = await datb.connection.query(
        `SELECT * from differentials`,
        [],
      );
      return response.rows;
    } else {
      const response = await datb.connection.query(
        `SELECT * from differentials WHERE name LIKE '%${searchText}%'`,
      );
      return response.rows;
    }
  }

  async detailDifferentials(id: number) {
    const response = await datb.connection.query(
      'SELECT * from differentials WHERE id = $1',
      [id],
    );
    return response.rows[0];
  }

  async deleteDifferentials(id: number) {
    const response = await datb.connection.query(
      'DELETE from differentials WHERE id = $1',
      [id],
    );
    return { error: false };
  }

}