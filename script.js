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
    const values = [0.0307, 0.0444, 0.0307, 0.0376, 0.0444, 0.0691, 0.05, 0.0556, 0.0625, 0.075, 0.08, 0.1, 0.125, 0.178, 0.249, 0.251, 0.3125, 0.374, 0.375, 0.4375, 0.5, 1]; // All spike variables' respective values
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

  // Event listeners for button clicks
  document.querySelectorAll('.controls button').forEach(button => {
    button.addEventListener('click', function() {
      const input = this.parentElement.querySelector('input[type="number"]');
      let value = parseInt(input.value) || 0;
      if (this.classList.contains('plus')) {
        input.value = value + 1;
      } else if (this.classList.contains('minus') && value > 0) {
        input.value = value - 1;
      }
      calculateTotal();
    });
  });
});
