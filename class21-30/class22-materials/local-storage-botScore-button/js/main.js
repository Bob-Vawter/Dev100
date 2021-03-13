//Create a button that adds 1 to a botScore stored in localStorage
if('botScore'===null){
  localStorage.setItem('botScore',0)
}

const myButton = document.querySelector('button').addEventListener('click',localStore)

function localStore(){
  let addMe = Number(localStorage.getItem('botScore'))+1
  localStorage.setItem('botScore',addMe)
  alert("Button working " + localStorage.getItem('botScore'))
}

document.querySelector('img').addEventListener('click',clearStore)

function clearStore(){
  localStorage.clear()
}
