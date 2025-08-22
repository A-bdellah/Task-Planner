let todayDateContainer = document.querySelector(".daily-date-picker-container");

function updateDailyDatePickerAppearance(tasks) {
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const percentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // remove old colors
  todayDateContainer.classList.remove("red-day", "orange-day", "green-day");

  // apply the new color
  if (totalTasks > 0) {
    if (percentage > 0 && percentage < 50) {
      todayDateContainer.classList.add("red-day");
    } else if (percentage >= 50 && percentage < 100) {
      todayDateContainer.classList.add("orange-day");
    } else if (percentage === 100) {
      todayDateContainer.classList.add("green-day");
    }
  }
}
