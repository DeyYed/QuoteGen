import React, { useState } from 'react';

const animeQuotes = [
  { quote: "Power comes in response to a need, not a desire.", character: "Goku", anime: "Dragon Ball Z" },
  { quote: "A lesson without pain is meaningless.", character: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood" },
  { quote: "Fear is not evil. It tells you what your weakness is.", character: "Gildarts Clive", anime: "Fairy Tail" },
  { quote: "In our society, letting others find out that you're a nice guy is a very risky move.", character: "Hachiman Hikigaya", anime: "Oregairu" },
  { quote: "Forgetting is like a wound. The wound may heal, but it has already left a scar.", character: "Monkey D. Luffy", anime: "One Piece" },
  { quote: "A person becomes strong when they have someone they want to protect.", character: "Haku", anime: "Naruto" },
  { quote: "A lesson in chasing dreams: you have to keep moving forward.", character: "Ash Ketchum", anime: "Pokemon" },
  { quote: "A lesson without action is just a dream.", character: "Levi Ackerman", anime: "Attack on Titan" },
  { quote: "A lesson in life: hard work beats talent when talent doesn't work hard.", character: "Rock Lee", anime: "Naruto" },
  { quote: "A lesson in humanity: we are all the same, yet so different.", character: "Ken Kaneki", anime: "Tokyo Ghoul" },
  { quote: "A lesson in courage: fear is not the absence of bravery.", character: "Shoto Todoroki", anime: "My Hero Academia" },
  { quote: "A lesson in love: sometimes, you have to let go to move forward.", character: "Tomoya Okazaki", anime: "Clannad" },
  { quote: "A lesson in strength: true power comes from within.", character: "Ichigo Kurosaki", anime: "Bleach" },
  { quote: "A lesson in friendship: bonds are what make us strong.", character: "Natsu Dragneel", anime: "Fairy Tail" },
  { quote: "A lesson in perseverance: never give up, no matter how hard it gets.", character: "Naruto Uzumaki", anime: "Naruto" }
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