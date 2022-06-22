const INNInput = document.querySelector(".INNInput");
const INNCheck = document.querySelector(".INNCheck");
const INNResult = document.querySelector(".INNResult");



const INNRegExp = /^1\d{13}$/;

INNCheck.addEventListener("click", () => {
    if (INNRegExp.test(INNInput.value)) {
        INNResult.innerText = "Ok";
        INNResult.style.color = "Green";
    } else {
        INNResult.innerText = "Not Ok";
        INNResult.style.color = "Red";
    }
})