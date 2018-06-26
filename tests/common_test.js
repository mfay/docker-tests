Feature('Simple Hello World');

Scenario('navigate to homepage', I => {
	I.amOnPage('http://web:9090');
	I.saveScreenshot('frontpageScreenshot.png');
	I.see('Hello');
});
