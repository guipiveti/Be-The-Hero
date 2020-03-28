const db_connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        const incidents = await db_connection('incidents').where('ong_id', ong_id).select('*');
        return response.json(incidents);
    }

    //     if(ong_id!=incident.ong_id){
    //         return response.status(401).json({error:'Não autorizado'});
    //     }
    //     await db_connection('incidents').where('id', id).delete();
    //     return response.status(204).send();
    // }
}