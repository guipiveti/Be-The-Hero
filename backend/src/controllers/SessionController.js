const db_conection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const {id} = request.body;
        const ong = await db_conection('ongs').where('id', id).select('name').first();
        if(!ong){
            return response.status(400).json({error: 'ONG not found'});
        }
        return response.json(ong);
    }
}