/// <reference types="Cypress" />

// const cypress = require("cypress")

describe('Verfies tags and elements across site', () => {   
const url = 'https://apuestasonline.net/'
const title = 'Mejores apuestas online 2022 → Ranking España y Latam'

    it('Loads up site and verifies title and language presence', () => {
        cy.visit(url)
        cy.get('head').should('have.length', '1');
        cy.get('head title').should('contain', title)
        cy.get('head [name="description"]').should('have.length', '1').and('have.attr', 'content')
        cy.get('html').should('have.attr', 'lang')

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

    it('Check all images have alt tags', () => {
        cy.get('img').each($img => {
            expect($img).to.have.attr('alt')
        })
        
    })

    it('Verifies the canonical', () => {
        cy.get('head [rel="canonical"]').should('have.attr', 'href', 'https://apuestasonline.net/')
    })
})

describe('Verify all linked sites', () => {

    it('Verifies there are no 404 sites', () => {
        cy.get('[title="Visitar"]').each($link => {
            const test = $link.attr('href')
            cy.request({url: test, failOnStatusCode: false}).then((resp => {
                if(resp.status === 403) {
                    cy.addContext(`This URL has an issue: ${test}`)
                }
            }))
        })
    })
})