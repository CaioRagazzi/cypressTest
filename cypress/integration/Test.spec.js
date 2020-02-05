describe('My first test', () => {
    it('navigate to the react native site', () => {
        cy.visit('https://facebook.github.io/react-native/')
        cy.get('.nav-site > :nth-child(1) > a').click()
    })
})