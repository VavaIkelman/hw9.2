export default class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const dataBuffer = new Uint16Array(this.buffer);
    return String.fromCharCode(...dataBuffer);
  }
}
