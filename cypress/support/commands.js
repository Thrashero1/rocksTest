import addContext from 'mochawesome/addContext';

Cypress.Commands.add('addContext', (context) => {
  cy.once('test:after:run', (test) => addContext({ test }, context));
});

export function testLinks(linkTag){
  cy.get(linkTag).each($link => {
    const test = $link.attr('href')
    cy.request({url: test, failOnStatusCode: false}).then((resp => {
        if(resp.status === 404 || resp.status === 403) {
            cy.addContext(`This URL has an issue: ${test}`)
        }
    }))
})
}

Cypress.Commands.add('testLinks', testLinks)