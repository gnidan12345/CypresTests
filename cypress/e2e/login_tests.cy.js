import {LoginPage} from "./pages/login_page"


const loginPage = new LoginPage()


beforeEach(function () {
	cy.visit('https://login.qa38.ucaspio.com/')
})


describe('All Login Tests', function () {

	it('Login with valid credentials', function () {

		loginPage.enterusername('yuliia.hnidan@caspio.com')
		loginPage.enterpassword('Caspio123!')
	})

})
