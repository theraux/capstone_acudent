fetch('../../HTML/patient-ui/appointment-clicked.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('dashboard-container').innerHTML = html;
  })
  .catch(err => {
    console.warn('Sidebar failed to load:', err);
  });

  const monthYear = document.getElementById("month-year");
  const calendarDays = document.getElementById("calendar-days");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");

  let date = new Date();

  function renderCalendar() {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();

    // Get month name
    const monthName = date.toLocaleString("default", { month: "long" });
    monthYear.textContent = `${monthName} ${year}`;

    // Clear old days
    calendarDays.innerHTML = "";
    

    // First day of month (weekday index)
    const firstDay = new Date(year, month, 1).getDay();

    // Last date of month
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Add empty slots before first day
    for (let i = 0; i < firstDay; i++) {
      const empty = document.createElement("div");
      empty.classList.add("empty");
      calendarDays.appendChild(empty);
    }

    // Add all days
    for (let day = 1; day <= lastDate; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;
      dayDiv.classList.add("day");

      // Example: mark weekends as unavailable
      const thisDay = new Date(year, month, day).getDay();
      if (thisDay === 0 || thisDay === 6) {
        dayDiv.classList.add("unavailable");
      }

      // Example: mark today
      const today = new Date();
      if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayDiv.style.border = "2px solid #502C00";
        dayDiv.style.fontWeight = "bold";
      }

      calendarDays.appendChild(dayDiv);
    }
  }

  // Navigation
  prevBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  nextBtn.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  // Initial render
  document.addEventListener("DOMContentLoaded", function() {
  renderCalendar();
});

