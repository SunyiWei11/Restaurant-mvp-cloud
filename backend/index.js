const express = require('express');
const cors = require('cors');

const auth = require('./routes/auth');
const ingredients = require('./routes/ingredients');
const menu = require('./routes/menu');
const sales = require('./routes/sales');
const reports = require('./routes/reports');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', auth);
app.use('/api/ingredients', ingredients);
app.use('/api/menu', menu);
app.use('/api/sales', sales);
app.use('/api/reports', reports);

const PORT = process.env.PORT || 4000;
app.listen(PORT, ()=> console.log('Backend listening on', PORT));
