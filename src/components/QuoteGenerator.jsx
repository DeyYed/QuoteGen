import React, { useState } from 'react';

const QuoteGenerator = () => {
  const [currentQuote, setCurrentQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateQuote = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://animechan.xyz/api/random');
      const data = await response.json();
      setCurrentQuote(`"${data.quote}" - ${data.character} (${data.anime})`);
    } catch (error) {
      setCurrentQuote('Failed to fetch anime quote. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '5rem' }}>
      <h1>Random Anime Quote Generator</h1>
      <button
        onClick={generateQuote}
        style={{ padding: '10px 20px', fontSize: '16px', marginTop: '1rem' }}
        disabled={isLoading}
      >
        {isLoading ? 'Loading...' : 'Generate Quote'}
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
