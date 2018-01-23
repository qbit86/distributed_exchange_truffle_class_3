Create file `Ethereum` with read-only attribute in `~/AppData/Roaming/` to prevent creation of directory for full blockhain.

Create private network:
```
cd ~/Documents/GitHub/distributed_exchange_truffle_class_3/assignment_1
geth --datadir=./chaindata init ./genesis.json
```

Положить keystore-файл.

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

```
geth --datadir=path/to/custom/data/folder --networkid=15 --bootnodes <bootnode-enode-url-from-above>
```

```
geth --nodiscover --rpc --datadir=./ --rpccorsdomain "*" --rpcapi "eth,web3,personal,net,miner,admin,debug"
```
```
geth --nodiscover --rpc --datadir=./ --rpccorsdomain "*" --mine --rpcapi "eth,web3,personal,net,miner,admin,debug" --unlock 0x12890d2cce102216644c59daE5baed380d84830c --password "pass.txt" --verbosity 0 console
```

Mining:
```
cd ~/Documents/GitHub/distributed_exchange_truffle_class_3/assignment_1
geth --datadir=./chaindata
```

```
geth <usual-flags> --mine --minerthreads=1 --etherbase=0x0000000000000000000000000000000000000000
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
> personal.unlockAccount("0x14b9c2a9f1cc5b3b4eab4a89b5461ecf7c5ff63c", "%Пароль%", 15000);
```

```
geth --datadir="c:\Users\Viktor\AppData\Local\Mist-Rinkeby" --rinkeby --rpc --rpcapi db,eth,net,web3,personal
```
