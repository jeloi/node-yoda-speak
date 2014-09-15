Node Yoda Speak
===============

Node.js wrapper for the Yoda Speak API on Mashape.

## Install

```sh
$ npm install --save yoda-speak
```

## Usage

Initialize YodaSpeak with you Mashape API key, then call convert.

Convert accepts your input text and callback with the error and result as parameters:<br>
`yoda.convert(text, callback(err, result));`

Example:
```js
var YodaSpeak = require('yoda-speak');
var yoda = new YodaSpeak(YOUR_MASHAPE_API_KEY);

yoda.convert("I'm really happy for you, and I'm going to let you finish, but this is the best Node package of all time.",
function(err, result) {
	if (!err) {
		console.log(result.toString());
	} else {
		console.log(err);
	}
})
```
Output: <br>
`Really happy for you, am I, and going to let you finish, am I, but the best node package of all time, this is.  Yes, hmmm.`
