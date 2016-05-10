import {assert} from 'chai';
import sinon from 'sinon';
import Code from '../../src/Code';
import Cursor from 'kittik-cursor';

const cursor = Cursor.create();

describe('Shape::Code', () => {
  it('Should properly create Code instance', () => {
    const code = new Code(cursor);
    assert.instanceOf(code, Code);
  });

  it('Should properly get/set code', () => {
    const code = new Code(cursor);

    assert.equal(code.getCode(), '');
    assert.instanceOf(code.setCode(`console.log(  'test'  )`), Code);
    assert.equal(code.getCode(), `console.log('test')`);
  });

  it('Should properly get actual width of the shape', () => {
    const code = new Code(cursor, {code: `console.log('Test')`});
    assert.equal(code.getWidth(), 19);
  });

  it('Should properly get actual height of the shape', () => {
    const code = new Code(cursor, {code: `console.log('Test')`});
    assert.equal(code.getHeight(), 1);
  });

  it('Should properly render the shape', () => {
    const cursor = Cursor.create({stream: {write: sinon.spy()}});
    const code = new Code(cursor, {code: `console.log();\nprocess.exit()`});

    code.render();

    assert.equal(cursor._stream.write.getCall(0).args[0], `\u001b[10;10H\u001b[34mconsole\u001b[39m\u001b[32m.\u001b[39m\u001b[34mlog\u001b[39m\u001b[90m(\u001b[39m\u001b[90m)\u001b[39m\u001b[90m;\u001b[39m`);
    assert.equal(cursor._stream.write.getCall(1).args[0], `\u001b[11;10H\u001b[37mprocess\u001b[39m\u001b[32m.\u001b[39m\u001b[37mexit\u001b[39m\u001b[90m(\u001b[39m\u001b[90m)\u001b[39m`);
  });

  it('Should properly serialize shape to Object representation', () => {
    const code = Code.create(cursor, {code: 'console.log()'});
    const obj = code.toObject();

    assert.deepEqual(obj, {
      type: 'Code',
      options: {
        code: 'console.log()',
        text: '',
        width: 15,
        height: 5,
        x: 10,
        y: 10,
        background: false,
        foreground: false
      }
    });
  });

  it('Should properly create code from Object representation', () => {
    const obj = {
      type: 'Code',
      options: {
        code: 'console.log()',
        x: 'left',
        y: 'top',
        background: undefined,
        foreground: undefined
      }
    };

    const code = Code.fromObject(obj, cursor);
    assert.instanceOf(code, Code);
    assert.instanceOf(code.getCursor(), Cursor);
    assert.equal(code.getText(), '');
    assert.equal(code.getCode(), 'console.log()');
    assert.equal(code.getWidth(), 13);
    assert.equal(code.getHeight(), 1);
    assert.equal(code.getX(), 0);
    assert.equal(code.getY(), 0);
    assert.notOk(code.getBackground());
    assert.notOk(code.getForeground());
  });
});
