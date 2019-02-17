var ContasReceber = require('../models/contareceber.js');

module.exports = {
    inicio,
    contasreceberInicio,
    contasreceberListar,
    contasreceberNovo,
    contasreceberSalvar,
    contareceberBuscar,
    contareceberExcluir

}

function inicio(req, res){
    res.render('../app/views/index.ejs', {title: 'Projeto Final Script-2018'});
}

function contasreceberInicio(req, res){
    res.render('../app/views/contasreceberInicio.ejs', {title: 'Menu ContasReceber'});
}

function contasreceberListar(req, res){
    ContasReceber.listarContasReceber(function (err, result){
        console.log("Listado");
        if(err) {
            throw err;
        }
        res.render('../app/views/contasreceberListar.ejs', 
            {title: 'Novos ContasReceber',
             contasreceber: result});
    });
};


function contareceberBuscar(req, res){
    var id = req.params.codigo;
    ContasReceber.listarUmContaReceber(id, function(err, result){
        if (err) {
            throw err;
        } else{
                    ContasReceber.listarEmpresa(function (err, result_empresa) {
                        if (err) {
                            throw err;
                        }else{
                            res.render('../app/views/contasreceberEditar.ejs', 
                                {contareceber: result,
                                lista_empresa: result_empresa
                            });            
                        }
                    });            
                }
            });
        }

function contasreceberNovo(req, res){
    var dados = [
        {
            tpr_codigo: "",
            tpr_descricao: "",
            tpr_tipo: "",
            tpr_valor: "",
            tpr_vencimento: "",
            emp_codigo: ""
        }
    ];

            ContasReceber.listarEmpresa(function (err, result_empresa) {
                if (err) {
                    throw err;
                }else{
                    res.render('../app/views/contasreceberEditar.ejs', 
                        {contareceber: dados,
                        lista_empresa: result_empresa
                    });            
                }
            });            
        }

function contasreceberSalvar(req, res){
    var dados = req.body;
    console.log("Salvando ContaReceber...");
    console.log(req.body);
    if(dados.tpr_codigo == ""){
        dados.tpr_codigo = null;
        console.log("Inserindo ContaReceber...");
        ContasReceber.salvarContaReceber(dados, function (err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/contasreceberListar');
        })
    }else{
        console.log("Alterando ContaReceber...");
        ContasReceber.alterarContaReceber(dados, function (err, result) {
            if (err) {
                throw err;
            }
            res.redirect('/contasreceberListar');
        });
    }

}

function contareceberExcluir(req, res){
    var id = req.params.codigo;

    ContasReceber.excluirContaReceber(id, function(err, result){
        if (err){
            console.log("Erro Verifique!!!");
            throw err;                        
        }
        res.redirect('/contasreceberListar');        
    });
}

