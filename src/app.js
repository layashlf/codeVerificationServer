const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/verify', (req, res) => {
    const { code } = req.body;

    if (!/^\d{6}$/.test(code) || code.endsWith('7')) {
        return res.status(400).json({ message: 'Verification Error' });
    }

    res.status(200).json({ message: 'Success' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});