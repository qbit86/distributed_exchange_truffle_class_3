var fixedSupplyToken = artifacts.require("./FixedSupplyToken");

contract('MyToken', function(accounts) {
    it("first account should own all tokens", function() {
        var _totalSupply;
        var myTokenInstance;
        return fixedSupplyToken.deployed().then(function(instance) {
            myTokenInstance = instance;
            return myTokenInstance.totalSupply.call();
        }).then(function(totalSupply) {
            _totalSupply = totalSupply;
            return myTokenInstance.balanceOf(accounts[0]);
        }).then(function(balanceAccountOwner) {
            assert.equal(balanceAccountOwner.toNumber(), _totalSupply.toNumber(), "Total Amount of tokens is owned by owner");
        });
    });

    it("second account should have no tokens", function () {
        return fixedSupplyToken.deployed().then(function (instance) {
            return instance.balanceOf(accounts[1])
        }).then(function (balance) {
            assert.equal(balance.toNumber(), 0, "Second account does not own any tokens.")
        });
    });
});