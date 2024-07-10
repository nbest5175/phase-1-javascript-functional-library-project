// Collection Functions
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection) === false) {
          break;
        }
      }
    } else {
      for (let key in collection) {
        if (callback(collection[key], key, collection) === false) {
          break;
        }
      }
    }
    return collection;
  }
  
  function myMap(collection, callback) {
    const mappedArray = [];
    myEach(collection, (value, index, collection) => {
      mappedArray.push(callback(value, index, collection));
    });
    return mappedArray;
  }
  
  function myReduce(collection, callback, acc) {
    let initialized = false;
    myEach(collection, (value, index, collection) => {
      if (!initialized) {
        if (acc !== undefined) {
          acc = callback(acc, value, collection);
        } else {
          acc = value;
        }
        initialized = true;
      } else {
        acc = callback(acc, value, collection);
      }
    });
    return acc;
  }
  
  function myFind(collection, predicate) {
    let found;
    myEach(collection, (value, index, collection) => {
      if (predicate(value)) {
        found = value;
        return false; // Stop iteration
      }
    });
    return found;
  }
  
  function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, (value, index, collection) => {
      if (predicate(value)) {
        filteredArray.push(value);
      }
    });
    return filteredArray;
  }
  
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // Object Functions
  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }
  
  module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
  };