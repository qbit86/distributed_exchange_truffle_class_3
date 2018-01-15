pragma solidity ^0.4.17;

// http://truffleframework.com/tutorials/debugging-a-smart-contract
contract SimpleStorage {
  uint myVariable;
  event Odd();
  event Even();

  function set(uint x) public {
    myVariable = x;
      if (x % 2 == 0) {
        Odd();
      } else {
        Even();
      }
  }

  function get() constant public returns (uint) {
    return myVariable;
  }
}
