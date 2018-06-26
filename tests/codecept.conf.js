exports.config = {
	 tests: './*_test.js',
	 output: './output',
	 helpers: {
		WebDriverIO: {
			url: 'http://web:3000',
			host: 'chrome',
			browser: 'chrome',
			smartWait: 5000,
			restart: false,
			waitForTimeout: 10000,
			timeouts: {
				script: 60000,
				'page load': 60000,
			},
			coloredLogs: true,
			desiredCapabilities: {
				acceptInsecureCerts: true,
			},
		},
	 },
	bootstrap: false,
	mocha: {},
	name: 'codeceptjs-docker',
};
