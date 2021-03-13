//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('input').addEventListener('keypress',function(e){
  if (e.key ==='Enter'){
    getFetch()
  }
})
let classes = ''
let subclasses = ''

function getFetch(){
  const choice = document.querySelector('input').value.replace(/ /g, '-').toLowerCase()
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    classes = ''
    var nodes = document.querySelector('ul');
    while (nodes.firstChild) {
      nodes.removeChild(nodes.firstChild);
    }

    console.log(data.classes)
    document.querySelector('h2').innerHTML = "Spell: " + data.name
    for(i=0;i<data.classes.length;i++){
      classes = classes + ' ' + data.classes[i].name
    }
    document.querySelector('h3').innerHTML = "Classes: " + classes

    for(i=0;i<data.subclasses.length;i++){
      var li = document.createElement('li')
      li.innerHTML = data.subclasses[i].name
      document.querySelector('ul').appendChild(li)
    }

    document.querySelector('p').innerHTML = data.desc


  })
  .catch(err => {
    console.log(`error ${err}`)
  });
}
