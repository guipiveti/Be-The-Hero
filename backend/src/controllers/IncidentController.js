//const crypto = require('crypto');
const db_connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await db_connection('incidents').insert(
            {
                title, description, value, ong_id
            }
        )
        return response.json({ id });
    },

    async index(request, response) {
        const { page = 1 } = request.query;
        const [count] = await db_connection('incidents').count();
        console.log(count);
        const incidents = await db_connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset(5 * (page - 1))
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']
            );
        response.header('X-Total-Count', count["count(*)"]);
        return response.json(incidents);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await db_connection('incidents').where('id', id).select('ong_id').first();

        if (ong_id != incident.ong_id) {
            return response.status(401).json({ error: 'Não autorizado' });
        }
        await db_connection('incidents').where('id', id).delete();
        return response.status(204).send();
    }
}