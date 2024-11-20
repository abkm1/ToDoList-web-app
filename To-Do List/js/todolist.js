const thelist=document.getElementById('list')
const add=document.getElementById("ajt");
const inputBox=document.getElementById('input');
add.addEventListener('click', ()=>{ const valeur=document.getElementById('input').value ;
  const text=document.createTextNode(valeur);
  const item=document.createElement('li');
  if (document.getElementById('input').value=="") {
    alert("write something");
    } 
  else {
    item.appendChild(text);
    item.classList.add('item');
    thelist.appendChild(item);
    let span =document.createElement('span');
    span.innerHTML="\u00d7";
    item.appendChild(span)
    inputBox.value="";
  }
  save();

});

thelist.addEventListener("click",function(e){
  if(e.target.tagName==='LI'){
    e.target.classList.toggle("checked");
    save()
  }
  else if (e.target.tagName==='SPAN'){
    e.target.parentElement.remove();
    save();
  }
},false);

function save(){
  localStorage.setItem("data",thelist.innerHTML)
}
function getData(){
  thelist.innerHTML= localStorage.getItem("data")
}
getData();