# kill port 3000

## 1번

```bash
$ sudo lsof -i :3000
$ kill -9 PIDㄴ
```

## 2번

```bash
$ ps aux | grep node
$ kill -9 PID
```