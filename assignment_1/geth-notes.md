Create file `Ethereum` with read-only attribute in `~/AppData/Roaming/` to prevent creation of directory for full blockhain.

Create private network:
```
cd ~/Documents/GitHub/distributed_exchange_truffle_class_3/assignment_1
geth --datadir=./chaindata init ./genesis.json
```

Run private network:
```
cd ~/Documents/GitHub/distributed_exchange_truffle_class_3/assignment_1
cd /d/Viktor/Projects/distributed_exchange_truffle_class_3/assignment_1
geth --datadir=./chaindata console --rpc --rpccorsdomain "*"
```

Expected output:
```
INFO [01-14|23:55:53] IPC endpoint opened: \\.\pipe\geth.ipc
INFO [01-14|23:55:53] HTTP endpoint opened: http://127.0.0.1:8545
```

Mining:
```
cd ~/Documents/GitHub/distributed_exchange_truffle_class_3/assignment_1
geth --datadir=./chaindata
```

```
$ geth attach
...
> miner.start(1);
...
> miner.stop();
```

```
testrpc -m "snake balcony soon muffin leader sting thumb keep live fish pitch renew"
```

```
"C:\Program Files\Mist\Mist.exe" --node-datadir="c:\Users\Viktor\AppData\Local\Mist-Rinkeby" --network=rinkeby --syncmode=fast
```

```
SimpleStorage.deployed().then(function(instance){return instance.set(5);});
...
SimpleStorage.deployed().then(function(instance){return instance.get.call();}).then(function(value){return value.toNumber()});
```

```
geth attach
...
> personal.unlockAccount(eth.accounts[0], "Пароль", 15000);
```

```
geth --datadir="c:\Users\Viktor\AppData\Local\Mist-Rinkeby" --rinkeby --rpc --rpcapi db,eth,net,web3,personal
```
