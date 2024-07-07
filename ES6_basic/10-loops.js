export default function appendToEachArrayValue(array, appendString) {
    const array2 = [];
    for (const element of array) {
      array2.push(`${appendString}${element}`);
    }
  
    return array2;
  }