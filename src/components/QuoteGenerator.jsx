import React, { useState } from 'react';

const animeQuotes = [
  { quote: "Power comes in response to a need, not a desire.", character: "Goku", anime: "Dragon Ball Z" },
  { quote: "A lesson without pain is meaningless.", character: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
  { quote: "Fear is not evil. It tells you what your weakness is.", character: "Gildarts Clive", anime: "Fairy Tail" },
  { quote: "In our society, letting others find out that you're a nice guy is a very risky move.", character: "Hachiman Hikigaya", anime: "Oregairu" },
  { quote: "Forgetting is like a wound. The wound may heal, but it has already left a scar.", character: "Monkey D. Luffy", anime: "One Piece" }
];

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * animeQuotes.length);
    const { quote, character, anime } = animeQuotes[randomIndex];
    setCurrentQuote(`"${quote}" - ${character} (${anime})`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Random Anime Quote Generator</h1>
      <button
        onClick={generateQuote}
        style={{ padding: '10px 20px', fontSize: '16px', marginTop: '1rem' }}
      >
        Generate Quote
      </button>
      {currentQuote && (
        <p style={{ marginTop: '2rem', fontStyle: 'italic', maxWidth: '600px', margin: '2rem auto' }}>
          {currentQuote}
        </p>
      )}
    </div>
  );
};

export default QuoteGenerator;

