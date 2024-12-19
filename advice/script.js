const text_div = document.querySelector("advice-text");
const zar_img = document.querySelector("#image-zar");
console.log(zar_img);

zar_img.addEventListener("click", e => {
  GenerateAdvice();
});
function GenerateAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then(response => {
      //return console.log(response.json());
      return response.json();
    })
    .then(adviceData => {
      console.log(adviceData.slip);
      const advice_div = adviceData.slip.advice;
      document.getElementById("advice-text").innerText = advice_div;
      document.getElementById("advice-number").innerText =
        "#" + adviceData.slip.id;
    })
    .catch(error => {
      console.log(error);
    });
}
