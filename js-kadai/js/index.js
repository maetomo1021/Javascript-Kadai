
window.addEventListener("DOMContentLoaded", function () {
  var tokyo = document.getElementsByClassName("Tokyo");
  var osaka = document.getElementsByClassName("Oosaka");
  var tiba = document.getElementsByClassName("Tiba");
  var sizuoka = document.getElementsByClassName("Sizuoka");
  // var test = document.getElementsByClassName("Sizuoka");


  // console.log(test[0])
  // console.log(test[1])
  // console.log(test[2])
  // console.log(test[3])
  console.log("hello")
  // console.log(test[0],[1],[2],[3])
  console.log("hello")
  // console.log(test)
  var removebutton = document.getElementById("remove-button");

  var clickData = document.getElementsByClassName("category");

  // console.log(removebutton.innerHTML)

  removebutton.addEventListener("click", function () {
    // test.style.display = "none";


    returnValue = clickData[0].selectedIndex;

    // console.log(returnValue)
    if (returnValue == 0) {
      console.log(tokyo.length)
      console.log(osaka.length)
      console.log(tiba.length)
      console.log(sizuoka.length)

      console.log("東京のお店を非表示にします")
      for (let i = 0; i <= 4; i++) {
        if (tokyo[i].style.display != "none") {
          tokyo[i].style.display = "none";
          // test[1].style.display = "none";
          // test[2].style.display = "none";
          // test[3].style.display = "none";
          // test[4].style.display = "none";
        } else if (tokyo[i].style.display == "none") {
          console.log("東京を再表示します")
          // tokyo[i].style.display = "visible"
          // osaka[i].style.display = "visible"
          // tiba[i].style.display = "visible"

        }
      }

    } else if (returnValue == 1) {
      console.log("大阪のお店を非表示にします")
      osaka[0].style.display = "none";
      osaka[1].style.display = "none";

    } else if (returnValue == 2) {
      console.log("千葉のお店を非表示にします")
      tiba[0].style.display = "none";

    } else if (returnValue == 3) {
      console.log("静岡のお店を非表示にします")
      sizuoka[0].style.display = "none";

    }
    else {
      console.log("")
    }
  })
})



