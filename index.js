let justInvoke ={
  function otherFunction() {
    return this;
  }
  return otherFunction();
}
