import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});

// Get all jokes
app.get('/api/jokes', (req, res) => {
  const jokes = [
    {
      id: '1',
      name: 'Banana Hands',
      joke: 'What do you get hanging off banana trees? Sore arms.',
    },
    {
      id: '2',
      name: 'Perforated Hatred',
      joke: "I hate perforated lines, they're tearable.",
    },
    {
      id: '3',
      name: 'I Predict A Heart Attack',
      joke: 'What do you call a fat psychic? A four-chin teller.',
    },
    {
      id: '4',
      name: 'Uno Joke, Por Favor',
      joke: 'A Mexican magician says he\'ll disappear on the count of 3; "Uno... dos... poof...". He disappeared without a tres.',
    },
    {
      id: '5',
      name: 'This Joke Will Spark A Laugh',
      joke: "What's the difference between a hippo and a Zippo? One is heavy, and the other is a little lighter.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
