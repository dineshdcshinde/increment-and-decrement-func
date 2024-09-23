let countValue = document.querySelector(".value");


function inc(){
    let value = +countValue.innerText;
    value++;
    countValue.innerText = value;
}
function dec(){
    let value = +countValue.innerText;
    value--;
    countValue.innerText = value;
}