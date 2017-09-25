/**
 * Arquivo: app-test.js
 * Author: Glaucia Lemos
 * Description: arquivo responsável por realizar os testes do arquivo: 'app.js'
 * Data: 24/09/2017
 * 
 * Documentação: http://chaijs.com/guide/styles/#should 
 *               http://chaijs.com/guide/styles/
 * 
 */

const assert = require('chai').assert;
const olaMundo = require('../demo-2/app/demo').olaMundo;
//const app = require('../demo-2/app/demo');

describe('TDD Aplicação Demo 2', () => {
    it('Aplicação deve retornar uma frase ', () => {
        let resultado = olaMundo();
        assert.equal(resultado, 'Olá Pessoal!!');
    });    
    
    it('A Frase deve retornar o tipo "string"', () => {
        let resultado = olaMundo();
        assert.typeOf(resultado, 'string');
    });
});