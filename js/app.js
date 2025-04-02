let minValueGrap = 1000;
let rangeTrack = document.getElementById("range-track");
let inputRange = document.querySelectorAll(".inputrange");
let inputPrice = document.querySelectorAll(".layerValue input");
let BtngetPrice = document.getElementById("btnGetPrice");

let AllPrice = { Minvalue: 1000, MaxValue: 2000 };

inputRange.forEach((input) => {
  input.addEventListener("input", (e) => {
    AllPrice.Minvalue = parseInt(inputRange[0].value),
      AllPrice.MaxValue = parseInt(inputRange[1].value);

    if (AllPrice.MaxValue - AllPrice.Minvalue < minValueGrap) {
      if (e.target.className === "min") {
        inputRange[0].value = AllPrice.MaxValue - minValueGrap;
      } else {
        inputRange[1].value = AllPrice.Minvalue + minValueGrap;
      }
    } else {
      inputPrice[0].value = AllPrice.Minvalue;
      inputPrice[1].value = AllPrice.MaxValue;
      rangeTrack.style.left = (AllPrice.Minvalue / inputRange[0].max) * 100 + "%";
      rangeTrack.style.right = 100 - (AllPrice.MaxValue / inputRange[1].max) * 100 + "%";
    }
  });
});


BtngetPrice.addEventListener("click", () => {
  console.log("====================================");
  console.log("Max Price : ", AllPrice.MaxValue);
  console.log("Min Price : ", AllPrice.Minvalue);
  console.log("====================================");
});
