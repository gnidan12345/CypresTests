export class LoginPage {
    username = '#EmailField'
    password = '#PasswordField'

    enterusername(username) {
        cy.get(this.username).type(username)
    }


    enterpassword(password) {
        cy.get(this.password).type(password)
    }





}