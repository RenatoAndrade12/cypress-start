describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameField: "[name= 'username']",
    passwordField: "[name= 'password']",
    loginButton: ".oxd-button",
    sectionTitleTopbar: ".oxd-topbar-header-breadcrumb > .oxd-text",
    wrongCredentialAlert: ".oxd-alert"
  }

  const userData = {
    userSucess: {
      username: 'Admin',
      password: 'admin123'
    },
    userFail: {
      username: 'teste',
      password: 'teste'
    }
  }


  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userSucess.username)
    cy.get(selectorList.passwordField).type(userData.userSucess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.sectionTitleTopbar).contains('Dashboard')
  })

    it('Login Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)s
  })
})