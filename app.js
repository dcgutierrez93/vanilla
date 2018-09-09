'use strict';

const Readline = require('readline');
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const matcher = require('./matcher');

rl.setPrompt('> ');
rl.prompt();
rl.on('line', reply => {
    matcher(reply, data => {
        switch(data.intent) {
            case 'Hello':
                console.log("A big hello from Vanilla");
                rl.prompt();
                break;
            default: {
                console.log("I don't know what you mean :(");
                rl.prompt();
            }
        }
    });
});
