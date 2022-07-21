


context('AirTable', () => {

  //Go to Airtable Signup page 
    beforeEach(() => {
      cy.visit('http://airtable.com/signup');
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
  

    describe('test_name', function() {

      it('what_it_does', function() {
     
        //  cy.viewport(1792, 1040)
            
        //  cy.get('.homepage > .hero > .hero__width-container > .hero__text-container > .hero__button').click()
      
        // //  cy.visit('https://airtable.com/signup')
      
         cy.get('.mb2 > form > .flex > .col-12 > #emailSignup').click()
        //  cy.get('.mb2 > form > .flex > .col-12 > #emailSignup').type(makeid(6) + '@airtabletest.com')
         cy.get('.mb2 > form > .flex > .col-12 > #emailSignup').type('halley.nora.short+' + makeid(6) + '@gmail.com')
         cy.get('.col-12 > .mb2 > form > .flex > .signupButton').click()
      
         cy.get('#signUpForm > .signUpInput > .col-12 > .col-12 > #fullName').click()
      
         cy.get('#signUpForm > .signUpInput > .col-12 > .col-12 > #fullName').click()
      
         cy.get('#signUpForm > .signUpInput > .col-12 > .col-12 > #fullName').type('Automation Test User')
      
         cy.get('#signUpForm > .signUpInput > .col-12 > .relative > #password').click()
      
         cy.get('#signUpForm > .signUpInput > .col-12 > .relative > #password').type('Password123')
      
         cy.get('.baymax > .authWrapper > .formContainer > .col-12 > #signUpForm').click()
      
         cy.get('.col-12 > #signUpForm > .flex > .flex > .rounded').click()
      
         cy.visit('https://airtable.com/')
      
         cy.get('.flex > .onboardingStepWrapper > .flex > .flex > .pointer:nth-child(1)').click()
      
         cy.get('.formContainer > .flex > .onboardingStepWrapper > .flex > .flex').click()
      
         cy.get('.flex > .onboardingStepWrapper > .flex > .flex > .flex:nth-child(1)').click()
      
      })
     
     })
     
    
    // //Enter username/password and login
    // cy.get('[id=usernameOrEmail]').type('zemux@inboxbear.com');

    // cy.get('[id=password]').type('Hereisanew1!');

    // cy.get('button[type=submit]').click();

    // //Wait for the page to load by checking to see if title is loaded
    // cy.title().should('eq', 'Acquire Admin Dashboard — Acquire Admin');

    // //Get to Create User page
    // cy.get('a[href="/settings"]').click();

    // //Wait for the page to load by checking to see if title is loaded
    // cy.title().should('eq', 'Web Widget Integration Setting — Acquire Admin');

    // //Get to Create User page
    // cy.contains('Account Settings').click();

    // cy.contains('Users, Roles, and Skills').click();

    // cy.contains('Create User').click();

    // //Enter Country first so Save button shows up and we can verify the required fields
    // cy.get('*[class="col-md-6 col-sm-12 col-xs-12 country-select"]').click();

    // cy.contains('United States').click();

    // cy.contains('Save').click();

    // //Warning message only shows up for the required fields so checking if these exists
    // cy.get('*[class="col-md-6 col-sm-12 col-xs-12 user-name-column"]').contains('Unfortunately, you can’t leave this blank.');

    // cy.get('*[class="col-md-6 col-sm-12 col-xs-12 user-email-column"]').contains('Unfortunately, you can’t leave this blank.');

    // cy.get('*[class="col-md-6 col-sm-12 col-xs-12 password"]').contains('Password must contain at least 1 lower case,1 upper case,1 number & 1 special character.');

    // cy.get('*[class="col-md-6 col-sm-12 col-xs-12 confirm-password"]').contains('Password must contain at least 1 lower case,1 upper case,1 number & 1 special character.');

    // cy.get('*[class="col-md-12 col-sm-12 col-xs-12 add-edit-role"]').contains('Please assign any role');

    // //After all the warning message validation, we start to create the test user
    // cy.get('[id=name]').type('Test');

    // cy.get('[id=email]').type('test@test.com');

    // cy.get('[id=password]').type('Acquiretest1!');

    // cy.get('[id=passwordRepeat]').type('Acquiretest1!');

    // cy.get('*[class="col-md-12 col-sm-12 col-xs-12 add-edit-role"]').click();

    // cy.contains('Operator').click();

    // cy.contains('Save').click();

  })
})