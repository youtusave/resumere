document.getElementById('changeColorBtn').addEventListener('click', function () {
  document.body.style.backgroundColor = getRandomColor();
});

function getRandomColor() {
  const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#A0C4FF', '#BDB2FF', '#FFC6FF'];
  return colors[Math.floor(Math.random() * colors.length)];
}
