# mongodb 켜기

## terminal

```bash
$ cd /Users/jongseoklee
$ mongodb/bin/mongod --dbpath=/Users/jongseoklee/mongodb-data
...
# 포트번호 찾기 보통 27017인것 같음
```

## npm install

```bash
$ npm install mongodb
```

# 기본 접속 코드

## mongodb.js

```javascript
const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database !");
    }
    const db = client.db(databaseName);
  }
);
```

# CRUD : create, read, update, delete

## Create : insertOne

```javascript
db.collection("users").insertOne(
  {
    _id: id,
    name: "LEE",
    age: 27
  },
  (error, result) => {
    if (error) {
      return console.log("Unable to insert user");
    }
    console.log(result.ops);
  }
);
```

## Create : insertMany

```javascript
db.collection("users").insertMany(
  [
    {
      name: "Jong",
      age: 27
    },
    {
      name: "kazuko",
      age: 26
    }
  ],
  (error, result) => {
    if (error) {
      return console.log("Unable to insert user");
    }

    console.log(result.ops);
  }
);
```

## Read : findOne

```javascript
db.collection("users").findOne(
  { _id: new ObjectID("5d4ac46c8c5070098a933138") },
  (error, user) => {
    if (error) {
      return console.log("error!");
    }
    console.log(user);
  }
);
```

## Read : findMany

```javascript
// users 테이블을 출력
db.collection("users")
  .find({
    age: 27
  })
  .toArray((error, users) => {
    console.log(users);
  });

// 데이터 갯수를 출력 (count)
db.collection("users")
  .find({
    age: 27
  })
  .count((error, count) => {
    console.log(count);
  });
```

## Update : updateOne

```javascript
const updatePromise = db.collection("users").updateOne(
  {
    _id: new ObjectID("5d4ac2438d4f3a0916a908a3")
  },
  {
    $set: {
      name: "Mike"
    },
    //자동증감 (increment) : $inc
    $inc: {
      age: 1
    }
  }
);
updatePromise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

## Update : updateMany

```javascript
const updateComplete = db.collection("tasks").updateMany(
  {
    completed: false
  },
  {
    $set: {
      completed: true
    }
  }
);
updateComplete
  .then(result => {
    console.log(result.modifiedCount);
  })
  .catch(error => {
    console.log(error);
  });
```

## Delete : deleteOne

```javascript
db.collection("users")
  .deleteOne({
    _id: new ObjectID("5d4ac2438d4f3a0916a908a3")
  })
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error);
  });
```

## Delete : deleteMany

```javascript
db.collection("users")
  .deleteMany({
    age: 27
  })
  .then(result => {
    console.log(result.deletedCount);
  })
  .catch(error => {
    console.log(error);
  });
```

```

```
