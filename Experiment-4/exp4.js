const textarea = document.getElementById('myTextarea');
const charCount = document.getElementById('charCount');

function updateCount() {
  charCount.textContent = textarea.value.length;
}

textarea.addEventListener('input', updateCount);
updateCount(); // initialize on page load