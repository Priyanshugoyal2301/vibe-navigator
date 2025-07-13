function search() {
  const city = document.getElementById('city').value;
  const category = document.getElementById('category').value;
  const resultArea = document.getElementById('results');
  resultArea.innerHTML = '';

  const vibes = [
    { name: 'Green Leaf Café', summary: '🌿 A calm, cozy place with a leafy aesthetic and great matcha.', city: 'Delhi', category: 'Cafe' },
    { name: 'Riverside Park', summary: '🌊🌳 Perfect for nature lovers. Quiet and beautiful.', city: 'Delhi', category: 'Park' }
  ];

  const filtered = vibes.filter(v => v.city.toLowerCase() === city.toLowerCase() && v.category.toLowerCase() === category.toLowerCase());

  if (filtered.length === 0) {
    resultArea.innerHTML = '<p>No vibes found!</p>';
  } else {
    filtered.forEach(v => {
      const card = document.createElement('div');
      card.className = 'vibe-card';
      card.innerHTML = `<h3>${v.name}</h3><p>${v.summary}</p>`;
      resultArea.appendChild(card);
    });
  }
}
