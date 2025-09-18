fetch('../../HTML/patient-ui/sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('container').innerHTML = html;
  })
  .catch(err => {
    console.warn('Sidebar failed to load:', err);
  });