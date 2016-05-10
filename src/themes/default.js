/**
 * Dictionary of tokens and their colors for the code coloring.
 *
 * @private
 */
export const DEFAULT_THEME = {
  'Boolean': {
    'true': undefined,
    'false': undefined,
    _default: '__RED_VIOLET__'
  },

  'Identifier': {
    'undefined': '__LIGHT_GRAY__',
    'self': '__RED_VIOLET__',
    'console': '__BLUE__',
    'log': '__BLUE__',
    'warn': '__RED__',
    'error': '__RED_VIOLET__',
    _default: '__WHITE__'
  },

  'Null': {
    _default: '__LIGHT_GRAY__'
  },

  'Numeric': {
    _default: '__BLUE__'
  },

  'String': {
    _default: '__GREEN__'
  },

  'Keyword': {
    'break': undefined,
    'case': undefined,
    'catch': '__CYAN__',
    'class': undefined,
    'const': undefined,
    'continue': undefined,
    'debugger': undefined,
    'default': undefined,
    'delete': '__RED__',
    'do': undefined,
    'else': undefined,
    'enum': undefined,
    'export': undefined,
    'extends': undefined,
    'finally': '__CYAN__',
    'for': undefined,
    'function': undefined,
    'if': undefined,
    'implements': undefined,
    'import': undefined,
    'in': undefined,
    'instanceof': undefined,
    'let': undefined,
    'new': '__RED__',
    'package': undefined,
    'private': undefined,
    'protected': undefined,
    'public': undefined,
    'return': '__RED__',
    'static': undefined,
    'super': undefined,
    'switch': undefined,
    'this': '__RED_VIOLET__',
    'throw': undefined,
    'try': '__CYAN__',
    'typeof': undefined,
    'var': '__GREEN__',
    'void': undefined,
    'while': undefined,
    'with': undefined,
    'yield': undefined,
    _default: '__SKY_BLUE__'
  },

  'Punctuator': {
    ';': '__LIGHT_GRAY__',
    '.': '__GREEN__',
    ',': '__GREEN__',
    '{': '__YELLOW__',
    '}': '__YELLOW__',
    '(': '__LIGHT_GRAY__',
    ')': '__LIGHT_GRAY__',
    '[': '__YELLOW__',
    ']': '__YELLOW__',
    '<': undefined,
    '>': undefined,
    '+': undefined,
    '-': undefined,
    '*': undefined,
    '%': undefined,
    '&': undefined,
    '|': undefined,
    '^': undefined,
    '!': undefined,
    '~': undefined,
    '?': undefined,
    ':': undefined,
    '=': undefined,
    '<=': undefined,
    '>=': undefined,
    '==': undefined,
    '!=': undefined,
    '++': undefined,
    '--': undefined,
    '<<': undefined,
    '>>': undefined,
    '&&': undefined,
    '||': undefined,
    '+=': undefined,
    '-=': undefined,
    '*=': undefined,
    '%=': undefined,
    '&=': undefined,
    '|=': undefined,
    '^=': undefined,
    '/=': undefined,
    '=>': undefined,
    '===': undefined,
    '!==': undefined,
    '>>>': undefined,
    '<<=': undefined,
    '>>=': undefined,
    '...': undefined,
    '>>>=': undefined,
    _default: '__LIGHT_YELLOW__'
  },

  Line: {
    _default: '__LIGHT_GRAY__'
  },

  Block: {
    _default: '__LIGHT_GRAY__'
  },

  _default: undefined
};
