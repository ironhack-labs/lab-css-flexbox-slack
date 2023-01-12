const menuBtn = document.getElementById("menu");
const dropDown = document.getElementById("dropDown");

menuBtn.onclick = () => {
  if (dropDown.style.display === 'block' && window.innerWidth <= 1024) {
    dropDown.style.display = 'none';
  } else {
    dropDown.style.display = 'block';
  }
}

document.body.onclick = (ev) => {
  if (ev.target.id !== 'menu'  && window.innerWidth <= 1024) {
    dropDown.style.display = 'none';
  }
}

//<img src="./images/icon-menu.png" alt="Slack logo" height="20px"/>