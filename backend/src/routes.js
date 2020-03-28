const express = require('express');
const {celebrate, Segments, Joi} = require ('celebrate');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');

routes.post('/sessions', SessionController.create);

routes.post('/ongs', celebrate({
    [Segments.BODY]:Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(9).max(13),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

routes.get('/ongs', OngController.index);

routes.get('/profile', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required(),
    }).unknown()
}), ProfileController.index);

routes.post('/incidents', IncidentsController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]:Joi.object().keys({
        page: Joi.number(),
    })
}), IncidentsController.index);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]:Joi.object().keys({
        id: Joi.number().required(),
    })
}), IncidentsController.delete);



//SEM VALIDAÇÃO:
// routes.post('/sessions', SessionController.create);

// routes.post('/ongs', OngController.create);
// routes.get('/ongs', OngController.index);

// routes.get('/profile', ProfileController.index);

// routes.post('/incidents', IncidentsController.create);
// routes.get('/incidents', IncidentsController.index);
// routes.delete('/incidents/:id', IncidentsController.delete);

module.exports = routes;