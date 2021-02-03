const input = document.querySelector('input');
const button = document.querySelector('button');
const copytext = document.querySelector('#copyText');
const btn = document.querySelector('#btn');

var l = 0;

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