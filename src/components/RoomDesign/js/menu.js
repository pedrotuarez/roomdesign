// Display Menu

const ShowMenu = () => {
  let btnMenu = document.getElementById('btn-menu');
  let menu = document.getElementById('menu');

  btnMenu.firstElementChild.classList.toggle("none");
  btnMenu.lastElementChild.classList.toggle("none");
  
  menu.classList.toggle('visible');

  document.addEventListener("click", (e)=>{
    if(!e.target.matches(".menu a")) return false;
    btnMenu.firstElementChild.classList.remove("none");
    btnMenu.lastElementChild.classList.add("none");
    menu.classList.remove('visible');
  });
}

export default ShowMenu;