/// <reference types= "cypress" />

import { method } from "bluebird";

describe('testes de api', () => {
    
    it('test api bible', () => {
        
      cy.request('https://bible-api.com/john%203:16')
      // cy.request('https://makeup-api.herokuapp.com/api/v1/products.json')
      
    });
});