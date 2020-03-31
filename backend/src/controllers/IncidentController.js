//const crypto = require('crypto');
const Watson = require('../../src/services/ibmWatson');
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
        //console.log(count);
        const incidents = await db_connection('incidents').join('ongs', 'ongs.id', '=', 'incidents.ong_id').limit(5).offset(5 * (page - 1))
            .select([
                'incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']
            );


        //if(request.headers.language){
        if (request.headers.language==='en') {
            const descriptions = [];
            incidents.forEach((incident) => { descriptions.push(incident.description) });
            //console.log(descriptions);
            
            const translated_descriptions = await Watson.translate(descriptions, "en");
            //console.log(translated_descriptions[0].translation);

            const titles = [];
            incidents.forEach((incident) => { titles.push(incident.title) });
            //console.log(titles);

            const translated_titles = await Watson.translate(titles, "en");
            //console.log(translated_titles);
            
            incidents.forEach((incident,i)=>{
                incidents[i].title=translated_titles[i].translation;
                incidents[i].description=translated_descriptions[i].translation;
            })
        }// else {
        //     console.log("Manter em português");
        // }
        console.log(incidents);


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