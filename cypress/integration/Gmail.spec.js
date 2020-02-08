describe('Gmail', () => {
    it('Send email to me: ', () => {
        cy.visit('http://jenkins.nccserver.com.br/login?from=%2F')
        cy.get('#j_username').type('caio.gemignani')
        cy.get(':nth-child(2) > .normal').type('orb123123')
        cy.get('.submit-button').click()
    })
})