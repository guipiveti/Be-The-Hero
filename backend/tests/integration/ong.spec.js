const request = require ('supertest');
const app =  require('../../src/app');
const db_connection = require('../../src/database/connection');

describe('ONG', ()=>{
    beforeEach(async()=>{
        await db_connection.migrate.rollback();
        await db_connection.migrate.latest();
    });

    afterEach(async()=>{
        await db_connection.destroy();
    })
    
    
    it('Should be able to create a new',async ()=>{
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "mail@mail.com",
                whatsapp: "9999999999",
                city: "Floripa",
                uf: "SC"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);


    });
})