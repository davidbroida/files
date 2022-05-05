// this is a strange one. it (the solution from the solution code) isnt working when i run it in my debug toolbar and im not sure if i fully understand what its supposed to even do. weird one

function curriedAdd(total) {
  if (total === undefined) return 0;
  return function addNext(num) {
    if (num === undefined) return total;
    total += num;
    return addNext;
  };
}


module.exports = { curriedAdd };
