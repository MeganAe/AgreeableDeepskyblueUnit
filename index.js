const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/gpt4', async (req, res) => {
    const prompt = req.query.prompt;
    if (!prompt) {
        return res.status(400).send('Prompt query parameter is required');
    }

    try {
        const response = await axios.get(`https://ggwp-yyxy.onrender.com/blackbox?prompt=${encodeURIComponent(prompt)}`);
        res.send(response.data);
    } catch (error) {
        res.status(500).send('Error fetching data from the external API');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});