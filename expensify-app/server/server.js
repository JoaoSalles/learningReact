const express = require('express');
const app = express();
const path = require('path');
const publicpath = path.join(__dirname, '..', 'public');

app.use(express.static(publicpath));


app.get('*', (req,res) => {
    res.senfFile(path.join(publicpath, 'indext.html'));
});


app.listen(3000, () => {
    console.log('Server is up');
});