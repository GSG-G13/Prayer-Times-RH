const bth = document.getElementById('bth');
const inp = document.getElementById('inp');
const breefDiv = document.querySelector('.breef');

bth.addEventListener('click', () => {
  fetch(`/search/:${inp.value}`)
    .then((data) => data.json())
    .then((data) => {
      const fajrP = document.createElement('p');
      const sunriseP = document.createElement('p');
      const dhuhrP = document.createElement('p');
      const asrP = document.createElement('p');
      const maghribP = document.createElement('p');
      const ishaP = document.createElement('p');
      fajrP.innerHTML = `Fajr: <span>${data.data.timings.Fajr}</span>`;
      sunriseP.innerHTML = `Sunrise: <span>${data.data.timings.Sunrise}</span>`;
      dhuhrP.innerHTML = `Dhuhr: <span>${data.data.timings.Dhuhr}</span>`;
      asrP.innerHTML = `Asr: <span>${data.data.timings.Asr}</span>`;
      maghribP.innerHTML = `Maghrib: <span>${data.data.timings.Maghrib}</span>`;
      ishaP.innerHTML = `Isha: <span>${data.data.timings.Isha}</span>`;

      breefDiv.innerHTML = '';
      breefDiv.appendChild(fajrP);
      breefDiv.appendChild(sunriseP);
      breefDiv.appendChild(dhuhrP);
      breefDiv.appendChild(asrP);
      breefDiv.appendChild(maghribP);
      breefDiv.appendChild(ishaP);
    })
    // eslint-disable-next-line no-console
    .catch (error) => console.error(error);
});
