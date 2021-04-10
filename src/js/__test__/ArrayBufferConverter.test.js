import ArrayBufferConverter from '../ArrayBufferConverter';
import getBuffer from '../getBuffer';

const dataBuffer = new ArrayBufferConverter();
test('convert correctly', () => {
  dataBuffer.load(getBuffer());
  expect(dataBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
