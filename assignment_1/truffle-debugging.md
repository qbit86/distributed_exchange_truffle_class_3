http://truffleframework.com/tutorials/debugging-a-smart-contract

```
mkdir simple-storage
cd simple-storage
```

```
truffle init
```

```
truffle compile
```

```
cd /d/Viktor/Projects/distributed_exchange_truffle_class_3/truffle-playground
truffle develop
```

```
migrate
```

```
SimpleStorage.deployed().then(function(instance){return instance.set(4);});
...
SimpleStorage.deployed().then(function(instance){return instance.get.call();}).then(function(value){return value.toNumber()});
```

```
migrate --reset
```

```
truffle develop --log
```

```
truffle(develop)> debug 0x5ed833ce36022c2f4e6371455be91e71a140de2fb1cc40e53c253930337722d8
...
debug(develop:0x5ed833ce...)> q
```

