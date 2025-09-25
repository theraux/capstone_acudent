fetch('../../HTML/patient-ui/appointment-clicked.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('dashboard-container').innerHTML = html;
  })
  .catch(err => {
    console.warn('Sidebar failed to load:', err);
  });

  