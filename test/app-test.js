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
const app = require('../demo-2/app/demo');

//Segundo Teste:
describe('TDD Aplicação Demo 2', () => {
    it('Aplicação deve retornar frase ', () => {
        assert.equal(app(), 'oi');
    });    
});