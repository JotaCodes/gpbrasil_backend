const dab = require('../database/db');

export default class AccountModule {
    constructor() {
    }

    async registerAccount(name: string, verify: boolean, price: string, differentials: number, type: number, image: string, local: string, category: number,) {
        const response = await dab.connection.query(
            'INSERT INTO account (name, verify, price, differentials, type, image, local, category) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [name, verify, price, differentials, type, image, local, category],
        );
        return response.rows[0];
    }

    async editAccount(name: string, verify: boolean, price: string, type: number, image: string, local: string, category: number, id: string) {
        const response = await dab.connection.query(
            'UPDATE account SET (name, verify, price, type, image, local, category) = ($1, $2, $3, $4, $5, $6, $7) WHERE id = $8 RETURNING *',
            [name, verify, price,  type, image, local, category, id],
        );
        return response.rows[0];
    }

    async deleteAccount(id: string) {
        const response = await dab.connection.query(
            'DELETE from account WHERE id = $1',
            [id],
        );
        return { error: false };
    }

    async detailAccount(id: string) {
        const response = await dab.connection.query(
            'SELECT * from account WHERE id = $1',
            [id],
        );
        return response.rows[0];
    }

    async listAccount() {
        const response = await dab.connection.query(
            `SELECT * from account `,
            [],
        );
        return response.rows;
    }

    async differentialsAccount(id: string, differential_id: number) {
        const response = await dab.connection.query(
            'SELECT differentials from account WHERE id = $1 ',
            [id],
        );
        const data = response.rows[0].differentials;
        if (data == null) {
            const response = await dab.connection.query(
                'UPDATE account SET differentials = $1 WHERE id = $2 RETURNING * ',
                [[differential_id], id],
            );
            return response.rows[0];
        }
        else {
            const propertyNames = Object.values(data);
            let list: any = propertyNames;
            list.push(differential_id);
            const response = await dab.connection.query(
                'UPDATE account SET differentials = $1 WHERE id = $2 RETURNING * ',
                [list, id],
            );
            return response.rows[0];
        }
    }

    async removeDifferentialsAccount(id: string, differential_id: number) {
        const responsefav = await dab.connection.query(
            'SELECT differentials from account WHERE id = $1 ',
            [id],
        );
        const data = responsefav.rows[0].differentials;
        const index = data.indexOf(differential_id);

        if (index == 0) {
            data.splice(index, index + 1);
        } else {
            data.splice(index, index);
        }
        const response = await dab.connection.query(
            'UPDATE account SET differentials = $1 WHERE id = $2 RETURNING * ',
            [data, id],
        );
        return response.rows[0];
    }

};
