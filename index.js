const dotenv = require('dotenv').config();

const NAME = process.env.NAME;

function greet(name){
    console.log(`Hello ${name}`);
}

function greet2(name){
    console.log(`Hello World!`);
}

greet(NAME);