const input = document.querySelector('input');
const button = document.querySelector('button');
const copytext = document.querySelector('#copyText');
const btn = document.querySelector('#btn');

button.addEventListener('click', () => {
    input.value = Generatepass(16);

});

btn.addEventListener('click', ()=>{
    copytext.select();
    document.execCommand("copy");
    alert("Password Copied to clipboard!");
});

function Generatepass(length = 16) {
    const set1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    let pass = '';
    for (let i = 0; i < length; ++i) {
        let at = Math.floor(Math.random() * (set1.length + 1));
        pass += set1.charAt(at);
    }
    return pass;
}