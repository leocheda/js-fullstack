const express = require("express");
const app = express();
app.use(express.json());
const port = 3001;

// Object to store words
let words = {
  English: [
    { word: "apple", def: "苹果", remembered: false },
    { word: "banana", def: "香蕉", remembered: true },
    { word: "orange", def: "橙子", remembered: false },
  ],
  Spanish: [
    { word: "manzana", def: "苹果", remembered: true },
    { word: "platano", def: "香蕉", remembered: false },
    { word: "naranja", def: "橙子", remembered: true },
  ],
};

// Get all words by language
app.get("/api/words", (req, res) => {
  const { language } = req.query;
  if (language) {
    const filteredWords = words[language];
    res.send(filteredWords);
  } else {
    res.send(words);
  }
});

// Update a word, remembered, by language
app.put("/api/words/:word", (req, res) => {
  const { word } = req.params;
  const { remembered, language } = req.body;
  let updated = false;
  for (let i = 0; i < words[language].length; i++) {
    if (words[language][i].word === word) {
      // merge words and new words
      words[language][i].remembered = remembered;
      updated = true;
      break;
    }
  }
  if (updated) {
    res.send({ word, remembered, language });
  } else {
    res.status(400).send(`Word ${word} not found`);
  }
});

// Add a new word
app.post("/api/words", (req, res) => {
  const { word, def, remembered = false, language } = req.body;
  let added = false;
  // use words[language] to get the array of words
  for (let i = 0; i < words[language].length; i++) {
    if (words[language][i].word === word) {
      added = true;
      break;
    }
  }
  if (!added) {
    words[language].push({ word, def, remembered });
    res.send({ word, def, remembered, language });
  } else {
    res.status(400).send(`Word ${word} already exists`);
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
