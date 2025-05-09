import React, { useState } from 'react';

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
