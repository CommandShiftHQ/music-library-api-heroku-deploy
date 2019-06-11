const mongoose = require('mongoose');
const app = require('./src/app');
const cors = require('cors');

app.use(cors());

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  app.listen(process.env.PORT);
});
