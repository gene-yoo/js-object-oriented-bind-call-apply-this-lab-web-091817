function justInvoke (fn) {
  return fn();
}

function setThisWithCall (fn, obj, arg) {
  return fn.call(obj, arg);
}

function setThisWithApply (fn, obj, argArray) {
  return fn.apply(obj, argArray);
}

function returnNewFunctionOf (fn, obj) {
  return fn.bind(obj);
}
