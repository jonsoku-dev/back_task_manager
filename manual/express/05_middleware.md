## basic middleware

```javascript
//middleware
app.use((req, res, next) => {
  if (req.method === "GET") {
    res.send("GET requests are disabled");
  } else {
    next();
  }
});
```

## server down message
```javascript
app.use((req, res, next) => {
  res.status(503).send("Site is currently down. Check back soon!");
});
```