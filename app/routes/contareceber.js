var controller = require('../controllers/contasreceberControllers.js');

app.get('/', controller.inicio);
app.get('/contasreceberInicio', controller.contasreceberInicio);
app.get('/contasreceberListar', controller.contasreceberListar);

app.get('/contareceber/views/novo', controller.contasreceberNovo);
app.post('/contareceber/salvar', controller.contasreceberSalvar);

app.get('/contareceber/views/:codigo', controller.contareceberBuscar);
app.get('/contareceber/excluir/:codigo', controller.contareceberExcluir);



