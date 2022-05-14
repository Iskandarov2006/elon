let javob = document.getElementById('javob-user')
let message = document.getElementById('message-javobb')


function javobyozish() {
    let javobni_sora = prompt("Ma`lumotni kiriting")
    javob.textContent = javobni_sora
}
// ====================================================================================================================================
let user = document.getElementById('username')
let tahrirlash = document.getElementById('tahrir-javob')
let ismi_tahrir = document.getElementById("malumot_tahrir")
ismi_tahrir.addEventListener('click', () =>{
    let ism_sora = prompt("Yangi ismingizni kiriting")
    user.textContent = ism_sora
})