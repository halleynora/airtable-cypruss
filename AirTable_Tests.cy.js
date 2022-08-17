


context('AirTable', () => {

  //Go to Airtable Signup page 
    beforeEach(() => {
      cy.visit('http://airtable.com/');
    })


  it('Begin Test Scenario One', () => {

    function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
   }
   
   console.log(makeid(5));

   cy.get('#marketingHeaderSharedRoot > .Nav-module_headerInnerWrap__WHzem > .ActionGroup-module_actionGroupWrap__2CSAe > .ActionButton-module_actionButton__25MzN > .ActionButton-module_mediumAndUpText__3D7uw').click()
 
   cy.visit('https://airtable.com/signup')

   cy.get('.mb2 > form > .flex > .col-12 > #emailSignup').click()

   cy.get('.mb2 > form > .flex > .col-12 > #emailSignup').type(makeid(6) + "@test.com")

   cy.get('.col-12 > .mb2 > form > .flex > .signupButton').click()

   cy.get('#signUpForm > .signUpInput > .col-12 > .col-12 > #fullName').type('testy test')

   cy.get('#signUpForm > .signUpInput > .col-12 > .relative > #password').type('Password')

   cy.get('.col-12 > #signUpForm > .flex > .flex > .rounded').click()


  })
})