const db_connection = require('../database/connection');
const generateUniqueID = require ('../utils/generateUniqueID');

module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = generateUniqueID();

        await db_connection('ongs').insert(
            {
                id, name, email, whatsapp, city, uf
            }
        )

        return response.json({
            id
        }

        );
    },

    async index(request, response) {
        const ongs = await db_connection('ongs').select('*');
        return response.json(ongs);
    }
}