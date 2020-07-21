const express = require('express');
const routes = express.Router();

const AnnotationController = require('./controllers/AnnotationController');
const PriorityController = require('./controllers/PriorityController');
const ContentController = require('./controllers/ContentController');

// GET, POST, PUT, DELETE
//
// req.query = Acessar query params (para filtros)
// req.params = Acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação, edição)

// Rota Annotations
routes.get('/annotations', AnnotationController.read);
routes.post('/annotations', AnnotationController.create);
routes.delete('/annotations/:id', AnnotationController.delete);

// Rota Priorities
routes.get('/priorities', PriorityController.read);
routes.post('/priorities/:id', PriorityController.update);

// Rota Content
routes.post('/contents/:id', ContentController.update);

module.exports = routes;
