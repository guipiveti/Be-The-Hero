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

    //     if(ong_id!=incident.ong_id){
    //         return response.status(401).json({error:'Não autorizado'});
    //     }
    //     await db_conection('incidents').where('id', id).delete();
    //     return response.status(204).send();
    // }
}