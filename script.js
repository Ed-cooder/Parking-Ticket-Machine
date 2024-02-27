function calculateCost() {
  var duration = document.getElementById("duration").value;
  var cost = 0;

  switch (duration) {
      case "1":
          cost = 5;
          break;
      case "2":
          cost = 8;
          break;
      case "3":
          cost = 10;
          break;
      case "3":
          cost = 12;
          break;
      case "3":
          cost = 15;
          break;
      default:
          cost = 12;
          break;
  }

  document.getElementById("total-cost").innerHTML = "Total Cost: R" + cost;
}
