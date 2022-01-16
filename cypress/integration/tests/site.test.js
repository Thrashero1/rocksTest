/// <reference types="Cypress" />

describe('Verfies tags and elements across site', () => {   

const title = 'Mejores apuestas online 2022 → Ranking España y Latam'

    // This loads the site before each run of tests as if one fails it could create an issue for the following tests and this way makes sure each one is independance of the previous. Also the site is defined within the cypress.json config file
    beforeEach(() => {
        cy.visit('/')
    })

    // This test basically makes sure that the title and meta description are present and show the right data
    it('Loads up site and verifies title and language presence', () => {
        cy.get('head').should('have.length', '1');
        cy.get('head title').should('contain', title)
        cy.get('head [name="description"]').should('have.length', '1').and('have.attr', 'content')
        cy.get('html').should('have.attr', 'lang')

    })

    // This test makes sure one title is and meta description are present within the head section
    it('Verfies a single heading havibg a title and meta description', () => {
        cy.get('head title').should('not.have.length.above', 1)
        cy.get('head [name="description"]').should('not.have.length.above', 1)
    })

    // This test makes sure that only one H1 tag is present on the site while there are 2 or more H2 subheadings
    it('Verfies the number of H1 and H2 tags', () => {
        cy.get('h1').should('have.length', '1')
        cy.get('h2').then(h2 => {
            expect(h2).to.have.length.gte(2)
            const h2Count = Cypress.$(h2).length;
            cy.log(`The number of h2 tags present is ${h2Count}`)
        })
    })

    // This tests cycles through all images present on the site and verifies the presence of an alt taG
    it('Check all images have alt tags', () => {
        cy.get('img').each($img => {
            expect($img).to.have.attr('alt')
        })
        
    })

    // This test makes sure the canonical ios present and correctly set up
    it('Verifies the canonical', () => {
        cy.get('head [rel="canonical"]').should('have.attr', 'href', 'https://apuestasonline.net/')
    })
})

describe('Verify all linked sites', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    // This test grabs all the affailiate links and sends a request to each one.  For each request the status code is checked and if the check returns a 404 it prints the name of the site within the report. I have also added a check for 403 as all sites were fine but a couple returned a 403 and this would give an exampleof how the report would look with a site indicated as having a 4** error
    it('Verifies there are no 404 sites', () => {
        cy.testLinks('[title="Visitar"]')
    })
})