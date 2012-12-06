Feature: Registration
	As a QA I want to test the registration process

	@javascript
	Scenario: Should not complete the registration
		Given I am viewing "https://www.tipp24.com/webshop/register/register.htm"
		And I click on button "Jetzt registrieren"
		Then I should see "Bitte geben Sie einen Spielernamen ein." within "#customer"
		Then I should see "Bitte geben Sie eine E-Mail Adresse an." within "#customer"
		Then I should see "Bitte wiederholen Sie Ihre E-Mail-Adresse." within "#customer"
		Then I should see "Bitte geben Sie ein Passwort ein." within "#customer"
		Then I should see "Bitte geben Sie Ihr Passwort zur Bestätigung erneut ein." within "#customer"
		Then I should see "Bitte geben Sie Ihre Anrede an." within "#customer"
		Then I should see "Bitte geben Sie Ihren Vornamen ein." within "#customer"
		Then I should see "Bitte geben Sie Ihren Nachnamen ein." within "#customer"
		Then I should see "Bitte geben Sie den Namen Ihrer Straße ein." within "#customer"
		Then I should see "Bitte geben Sie Ihre Postleitzahl ein." within "#customer"
		Then I should see "Bitte geben Sie Ihren Wohnort ein." within "#customer"
		Then I should see "Bitte geben Sie Ihren Geburtstag an." within "#customer"
		Then I should see "Bitte geben Sie Ihr Herkunftsland an." within "#customer"
		Then I should see "Bitte akzeptieren Sie die AGB. Bitte stimmen Sie der Überprüfung Ihres Alters zu." within "#customer"
