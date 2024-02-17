const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');

app.use(express.json());
app.use('/api', usersRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
