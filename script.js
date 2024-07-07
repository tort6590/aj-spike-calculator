document.addEventListener('DOMContentLoaded', function() {
  // Collapsible functionality
  const colls = document.querySelectorAll('.collapsible');
  colls.forEach(coll => {
    coll.addEventListener('click', function() {
      this.classList.toggle('active');
      const content = this.nextElementSibling;
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });

  // Calculate total function
  function calculateTotal() {
    const values = [0.03, 0.04]; // Adjust values as needed for your variables
    let sum = 0;
    for (let i = 1; i <= values.length; i++) {
      let count = parseInt(document.getElementById('count' + i).value) || 0;
      sum += values[i - 1] * count;
    }
    document.getElementById('total').innerText = sum.toFixed(2);
  }

  // Event listeners for input changes
  document.querySelectorAll('.calculator input[type="number"]').forEach(input => {
    input.addEventListener('input', calculateTotal);
  });
});
