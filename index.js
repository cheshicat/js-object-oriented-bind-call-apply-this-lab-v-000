function justInvoke() {
  function otherFunction() {
    return this;
  }
  return otherFunction();
}
