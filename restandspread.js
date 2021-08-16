function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }



  const filterOutOdds = (...arguments) => 
  arguments.filter(val => val % 2 === 0)


  const findMind = (...values) => Math.min(values)

  const mergeObject = (object1, object2) => ({...object1, ...object2})




const animals = [Dog, Cat, Bird, Fish, Whale, Ant, Hippo];


  const removeRandom = items => {
      let index = Math.floor(Math.random() * items.length);
      return [...items.slice(0,index), ...items.slice(index + 1)]
  }

  const extend = (array1, array2) => {
    return [...array1, ...array2];
  }

  const addKeyVal = (obj, key, val) => {
      return {...obj, [key]:val};
  };

//   OR

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

  const removeKey = (obj, key) => {
      let newObj = {...obj}
      delete newObj[key]
      return newObj;
  }

  const combine = (obj1, obj2) => {
      return {...obj1, ...obj2};
  }

  const update = (obj, key, val) => {
      return {...obj, [key]: val};
  }

