// نسب الجاذبية مقارنة بالأرض
const gravity = {
  mercury: 0.38, venus: 0.91, earth:1,
  mars:0.38, jupiter:2.34, saturn:1.06,
  uranus:0.92, neptune:1.19
};
const namesAr = {
  mercury:'عطارد', venus:'الزهرة', earth:'الأرض',
  mars:'المريخ', jupiter:'المشتري', saturn:'زحل',
  uranus:'أورانوس', neptune:'نبتون'
};

const weightInput = document.getElementById('earthWeight');
const planetSelect = document.getElementById('planetSelect');
const calcBtn      = document.getElementById('calcBtn');
const resultDiv    = document.getElementById('result');
const planetImg    = document.getElementById('planetImg');

planetSelect.addEventListener('change', () => {
  const p = planetSelect.value;
  planetImg.src = `images/${p}.png`;
});

calcBtn.addEventListener('click', () => {
  const earthW = parseFloat(weightInput.value);
  if (!earthW || earthW <= 0) {
    alert('رجاءً أدخل وزنك بشكل صحيح.');
    return;
  }
  const p = planetSelect.value;
  const w = earthW * gravity[p];
  resultDiv.textContent = 
    `وزنك على ${namesAr[p]} ≈ ${w.toFixed(1)} كغم`;
});
