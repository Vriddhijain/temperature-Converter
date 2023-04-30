function convert() {
  const tempInput = document.getElementById("temp-input").value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  let convertedTemp;

  if (unit === "celsius") {
    convertedTemp = (tempInput * 9/5) + 32;
    document.getElementById("result").innerHTML = `${tempInput} &#8451; = ${convertedTemp} &#8457;`;
  } else {
    convertedTemp = (tempInput - 32) * 5/9;
    document.getElementById("result").innerHTML = `${tempInput} &#8457; = ${convertedTemp} &#8451;`;
  }
}
