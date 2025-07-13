async function search() {
  const city = document.getElementById('city').value;
  const category = document.getElementById('category').value;
  const resultArea = document.getElementById('results');
  resultArea.innerHTML = '';

  try {
    const res = await fetch("http://127.0.0.1:8000/get-vibes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ city, category })
    });

    const data = await res.json();

    data.results.forEach(v => {
      const card = document.createElement('div');
      card.className = 'vibe-card';
      card.innerHTML = `<h3>${v.name}</h3><p>${v.summary}</p>`;
      resultArea.appendChild(card);
    });

  } catch (error) {
    resultArea.innerHTML = '<p>Error fetching vibes. Is the backend running?</p>';
    console.error(error);
  }
}
