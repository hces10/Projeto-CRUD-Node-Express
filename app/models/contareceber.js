var client = require('../../config/dbconnection.js');

module.exports = {
    listarContasReceber,
    listarUmContaReceber,
    listarEmpresa,
    alterarContaReceber,
    salvarContaReceber,
    excluirContaReceber    
}

function listarContasReceber (callback){
    //    client.query('SELECT * FROM ' + tabela, callback);
    client.query('select C.*, E.emp_nome from contareceber C left join dados182n.empresa E on C.emp_codigo = E.emp_codigo', callback);    
}

function listarUmContaReceber (id, callback){
    client.query('SELECT * FROM contareceber WHERE tpr_codigo = ' + id, callback);
}


function listarEmpresa (callback) {
    client.query('select * from empresa order by emp_nome', callback);
}

function salvarContaReceber(dados, callback) {
    var msql = 'INSERT INTO contareceber SET ? ';

	client.query(msql, dados, callback);
}

function alterarContaReceber(dados, callback) {
	var msql = "UPDATE contareceber SET tpr_descricao = '" + dados.tpr_descricao +"' , tpr_tipo = '" + dados.tpr_tipo + "' , tpr_valor = '" + dados.tpr_valor + "' , emp_codigo = '" + dados.emp_codigo + "' , tpr_vencimento = '" + dados.tpr_vencimento + "'  WHERE tpr_codigo = '" + dados.tpr_codigo + "'";
//    console.log('Estou alterando o contareceber.......');
//    console.log(msql);
    client.query(msql, callback);
}

function excluirContaReceber(id, callback){
    client.query('delete from contareceber where tpr_codigo = ' + id, callback);
}


