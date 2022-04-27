let darkMode = localStorage.getItem('darkMode')
const darkModeToggle = document.querySelector('#dark-mode-toggle');

console.log(darkMode)

//check if darkMode is enabled
//if enabled, turn it off
//if disabled, turn it on
const enableDarkMode = () => {
  // 1. add class darkmode to the body
  document.body.classList.add('darkmode')
  // 2. update darkmode in local storage
  localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
  // 1. remove class darkmode to the body
  document.body.classList.remove('darkmode')
  // 2. update darkmode in local storage
  localStorage.setItem('darkMode', 'null')
}

if (darkMode === "enabled"){
  enableDarkMode()
}else{
  disableDarkMode()
}
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode')
    if (darkMode !== 'enabled'){
    enableDarkMode()
    console.log(darkMode)
  }else{
    disableDarkMode()
    console.log(darkMode)
  }
})


const comingSoonButton = document.querySelector('.buttonComingSoon')
comingSoonButton.addEventListener('click', buttonText)

function buttonText(){
  document.querySelector('.buttonComingSoon').innerText = "Coming soon"
}