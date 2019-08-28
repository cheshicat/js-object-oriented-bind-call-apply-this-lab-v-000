function justInvoke() {
  function otherFunction() {
    return this;
  }
  otherFunction();
}
