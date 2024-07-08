export default function createInt8TypedArray(length, position, value) {
  if (position >= length || position < 0) {
    throw Error('Position outside range');
  } else {
    const arrayBuffer = new ArrayBuffer(length);
    const int8 = new Int8Array(arrayBuffer);
    int8[position] = value;
    return new DataView(arrayBuffer);
  }
}
