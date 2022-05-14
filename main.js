const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});


function tbn(){
  alert('Ma`lumotlarni to`g`ri kiritmagan bo`lsangiz arizangiz adminga yuborilmaydi!!  Arizani to`liq kiritganingizga ishonch hosil qildingizmi')
}



// ==============================================================================================================================================================================

let sorov_ha = document.getElementById('ha')
let sorov_yoq = document.getElementById('yoq')
let sorov_ha_prog = document.getElementById('ha_prog')
let sorov_yoq_prog = document.getElementById('yoq_prog')

let bos = sorov_ha.addEventListener('click', () =>{
  sorov_ha_prog.textContent = sorov_ha_prog.textContent + parseInt(1)
})
if(bos<1){
  alert("sdfkjn")
}