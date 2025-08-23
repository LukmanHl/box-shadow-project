const elem = document.getElementById("element");
const code = document.getElementById("code");

const slidders = document.querySelectorAll(".slidders input");


slidders.forEach((slidder) => slidder.addEventListener ("input", generateShadow));

function generateShadow(){
  
  const shadowParametas = getShadowParametas();

}
