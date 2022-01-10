/// <reference types="Cypress" />

// const cypress = require("cypress")

describe('Verfies tags across site', () => {
const url = 'https://apuestasonline.net/'
const title = 'Mejores apuestas online 2022 → Ranking España y Latam'

    it('Loads up site and verifies title', () => {
        cy.visit(url)
        cy.get('head').should('have.length', '1');
        cy.get('head title').should('contain', title)
        cy.get('head [name="description"]').should('have.length', '1').and('have.attr', 'content')
    })

    it('Verfies a single heading havibg a title and meta description', () => {
        cy.get('head title').should('not.have.length.above', 1)
        cy.get('head [name="description"]').should('not.have.length.above', 1)
    })

    it('Verfies the number of H1 and H2 tags', () => {
        cy.get('h1').should('have.length', '1')
        cy.get('h2').then(h2 => {
            expect(h2).to.have.length.gte(2)
            const h2Count = Cypress.$(h2).length;
            cy.log(`The number of h2 tags present is ${h2Count}`)
        })
    })
})