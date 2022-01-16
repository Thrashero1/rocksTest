describe('Sends out an email with the report', () => {
    
    // This will trigger the send email functionality. This works perfectly well when run in the GUI system but seems to be having issues when run headlessly
    it('send email', () => {
        cy.task('sendMail', 'sigrid.medhurst73@ethereal.email')
    })
})