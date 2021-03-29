const input = document.querySelector('input');
const button = document.querySelector('button');
const copytext = document.querySelector('#copyText');
const btn = document.querySelector('#btn');
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var l = 0;

upbtn.onclick = function () {
    l = document.getElementById("num").value;
    document.getElementById("num").value = ++l;
}
downbtn.onclick = function () {
    l = document.getElementById("num").value;
    if(l>0){
    document.getElementById("num").value = --l;
    }
}

button.addEventListener('click', () => {
    l = document.getElementById("num").value;
    input.value = Generatepass(l);
});

btn.addEventListener('click', () => {
    copytext.select();
    document.execCommand("copy");
    swal("Success", "Password copied to clipboard", { icon: "success", });
});

function Generatepass(length = l) {
    const set1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let pass = '';
    for (let i = 0; i < length; ++i) {
        let at = Math.floor(Math.random() * (set1.length + 1));
        pass += set1.charAt(at);
    }
    return pass;
}