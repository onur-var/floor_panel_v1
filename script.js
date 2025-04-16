const sheetID = 'SENIN_SHEET_ID';
const sheetName = 'Sayfa1';
const apiKey = 'SENIN_API_KEY';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${1orLufqVLD73-JPRvSu1PW4Rjb5mAU67X9uyRYv7WF4o}/values/${Sayfa1}?key=${AIzaSyA47pjFvA9S2D4vq9mKSuvUXyMkWGjPOo0}`;

const table = document.getElementById('sheetTable');

fetch(url)
  .then(res => res.json())
  .then(data => {
    const rows = data.values;
    if (!rows) return alert("Veri alınamadı");

    const tbody = table.querySelector('tbody');
    tbody.innerHTML = '';

    rows.forEach((row, rowIndex) => {
      const tr = document.createElement('tr');

      row.forEach((cell, colIndex) => {
        const td = document.createElement('td');
        td.textContent = cell;
        td.contentEditable = true;

        td.addEventListener('click', () => {
          if (td.classList.contains('active-green')) {
            td.classList.remove('active-green');
            td.classList.add('active-red');
          } else if (td.classList.contains('active-red')) {
            td.classList.remove('active-red');
          } else {
            td.classList.add('active-green');
          }
        });

        tr.appendChild(td);
      });

      tbody.appendChild(tr);
    });
  })
  .catch(err => {
    console.error('Hata:', err);
    alert('Veri çekme başarısız!');
  });
