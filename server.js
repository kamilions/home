require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000;

// Парсинг JSON из тела запроса
app.use(bodyParser.json());

// Раздача статичных файлов из папки public
app.use(express.static('public'));

// Маршрут для обработки запроса к OpenAI API
app.post('/api/chat', async (req, res) => {
  const message = req.body.message;
  if (!message) {
    return res.status(400).json({ error: 'Сообщение не указано' });
  }

  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      model: 'text-davinci-003',
      prompt: message,
      max_tokens: 150,
      temperature: 0.7
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });

    res.json({ answer: response.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Ошибка при вызове OpenAI API', error);
    res.status(500).json({ error: 'Ошибка при вызове OpenAI API' });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен: http://localhost:${port}`);
});
