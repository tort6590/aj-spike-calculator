document.addEventListener("DOMContentLoaded", function () {
  var coll = document.getElementsByClassName("collapsible");
  for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

  var incrementButtons = document.querySelectorAll('.increment');
  var decrementButtons = document.querySelectorAll('.decrement');

  incrementButtons.forEach(button => {
    button.addEventListener('click', function () {
      var input = this.previousElementSibling;
      input.value = parseInt(input.value) + 1;
      calculateTotal();
    });
  });

  decrementButtons.forEach(button => {
    button.addEventListener('click', function () {
      var input = this.nextElementSibling;
      if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
        calculateTotal();
      }
    });
  });

  function calculateTotal() {
    var total = 0;
    var values = {
      count1: 0.62, count2: 0.5, count3: 1.5, count4: 2, count5: 2.5,
      count6: 3, count7: 4, count8: 4.5, count9: 5, count10: 6,
      count11: 6.5, count12: 7, count13: 8, count14: 9, count15: 10,
      count16: 11, count17: 12, count18: 13, count19: 14, count20: 15,
      count21: 16, count22: 17
    };

    for (var key in values) {
      total += (parseInt(document.getElementById(key).value) || 0) * values[key];
    }

    document.getElementById('total').textContent = total.toFixed(2);
  }
});
