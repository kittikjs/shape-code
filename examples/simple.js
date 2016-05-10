"use strict";

const Code = require('../lib/Code');
const cursor = require('kittik-cursor').create().reset();

Code.create(cursor, {
  code: `const sentence = 'KittikJS: shape for code rendering'\nconsole.log(sentence);`,
  x: 'center',
  y: 'middle'
}).render();

cursor.flush();
