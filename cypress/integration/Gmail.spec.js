describe('Gmail', () => {
    it('Send email to me: ', () => {
        cy.visit('https://accounts.google.com/signin/v2/identifier?continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&service=mail&sacu=1&rip=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
        cy.get('.header__nav--ltr > :nth-child(2) > .h-c-header__nav-li-link').click()
    })
})