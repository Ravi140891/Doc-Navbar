const star = document.querySelector(".star");
const starPara = document.querySelector(".star p");
const yellowStar = document.querySelector(".star .fa-solid");
const normalStar = document.querySelector(".star span");
const drivePara= document.querySelector(".drive p");
const drive = document.querySelector(".drive");
const details = document.querySelector(".details");
const detailsPara = document.querySelector(".details p");
const statusIcon = document.querySelector(".status");
const statusPara = document.querySelector(".status p");
const share = document.querySelector(".share");
const sharePara = document.querySelector(".share-link");
const meet = document.querySelector(".meet");
const meetPara = document.querySelector(".meet p");
const access = document.querySelector(".access");
const accessPara = document.querySelector(".access-para");
const menu = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-close");
const menuItems = document.querySelector(".menu-items");



star.addEventListener('mouseover',() => {
    starPara.style.display = "block"
    starPara.innerText = "Star"
})
 star.addEventListener('mouseout', () => {
    starPara.style.display = "none";
 })

 star.addEventListener('click', () => {
    normalStar.style.display = "none";
    yellowStar.style.display = "block"
 })

 drive.addEventListener('mouseover', () => {
    drivePara.style.display = "block";
    drivePara.innerText = "Add a shortcut to Drive"
 })

 drive.addEventListener('mouseout', () => {
    drivePara.style.display = "none";
 })

 details.addEventListener("mouseover", () => {
   detailsPara.style.display = "block";
   detailsPara.innerText = "Document details";
 });

 details.addEventListener("mouseout", () => {
   detailsPara.style.display = "none";
 });

  statusIcon.addEventListener("mouseover", () => {
    statusPara.style.display = "block";
    statusPara.innerText = "See document status";
  });

  statusIcon.addEventListener('mouseout',() => {
    statusPara.style.display = "none";
  })

  share.addEventListener('mouseover', () => {
    sharePara.style.display ="block"
  })

  share.addEventListener('mouseout', () => {
    sharePara.style.display= "none";
  })

  meet.addEventListener('mouseover', () => {
    meetPara.style.display = "block"
    meetPara.innerText = "Join a call here or present this tab to call."
  })

  meet.addEventListener('mouseout', () =>{
    meetPara.style.display = "none"
  })

  access.addEventListener('mouseover', ()=> {
    accessPara.style.display ="block";
  })

  access.addEventListener("mouseout", () => {
    accessPara.style.display = "none";
  });

  menu.addEventListener('click', () => {
    menu.style.display = "none";
    closeBtn.style.display = "block";
    menuItems.style.display ="block";
  })

  closeBtn.addEventListener('click', () => {
    closeBtn.style.display = "none";
    menu.style.display = "block";
    menuItems.style.display = "none";
  })


