const sharedConfig = require('tailwind-config/tailwind.config.js');

// https://youtu.be/exCTI9nOc-E

module.exports = {
	presets: [sharedConfig],
	content: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'],
};
