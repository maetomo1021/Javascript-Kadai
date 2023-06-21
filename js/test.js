

// window.addEventListener("DOMContentLoaded", function () {
//   const element = document.getElementById("p-wrap");
//   element.addEventListener("onclick", ()=> {
//     test.innerHTML = "<p>3</p>";
//     console.log(test);
//   });
// });





window.addEventListener("DOMContentLoaded", function () {
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
