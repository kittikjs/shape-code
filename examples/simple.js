"use strict";

const Code = require('../lib/Code');
const cursor = require('kittik-cursor').create().reset();

Code.create(cursor, {code: `console.log('KittikJS: shape for code rendering')`, x: 'center', y: 'middle'}).render();

cursor.flush();
