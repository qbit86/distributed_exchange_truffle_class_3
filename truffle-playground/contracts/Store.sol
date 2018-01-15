pragma solidity ^0.4.17;

// http://truffleframework.com/tutorials/debugging-a-smart-contract
contract SimpleStorage {
  uint myVariable;

  function set(uint x) public {
    myVariable = x;
  }

  function get() constant public returns (uint) {
    return myVariable;
  }
}
