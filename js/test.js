

window.addEventListener("DOMContentLoaded", function () {

  this.document.addEventListener("click", function () {
    for (let i = 0; i < 12; i++) {
      var numberscounter = document.getElementsByClassName("numbers")
    }
  })
  const counter = document.getElementById("add-button");
  var couterText = document.getElementById("h2-number")
  let counternumber = 0;


  counter.addEventListener("click", function () {
    // alert("クリックされました");
    counternumber += 1;
    // counternumber = counternumber+1;
    couterText.innerHTML = counternumber

  });
});
