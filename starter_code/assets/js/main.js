const menuBtn = document.getElementById("menu");
const dropDown = document.getElementById("dropDown");

menuBtn.onclick = () => {
  if (dropDown.style.display === 'block') {
    dropDown.style.display = 'none';
  } else {
    dropDown.style.display = 'block';
  }
}

document.body.onclick = (ev) => {
  if (ev.target.id !== 'menu') {
    dropDown.style.display = 'none';
  }
}

//<img src="./images/icon-menu.png" alt="Slack logo" height="20px"/>