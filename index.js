const express = require('express');
const app = express();
const helloRouter = require('./routes/hello');

app.use('/hello', helloRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
