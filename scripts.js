const list = document.querySelector('#newTask');
const btn = document.querySelector('#btnAdd');
const btnRem = document.querySelector('#btnRemove');

btn.addEventListener('click', (event) => {

    const task = document.querySelector('#task').value;//Get the value from user input
    let li = document.createElement("li");//Create a 'li' element
    let tmpTask = document.createTextNode(task);    
    li.append(tmpTask);

 
    let button = document.createElement('button');
    button.classList.add('close');
    button.innerHTML = 'X';
    button.addEventListener('click', remove);
    li.append(button);
    
    if (task === "") {
        alert("You must write something to add!");
    }
    else{     
        document.getElementById("newTask").appendChild(li);        
        document.getElementById('task').value = "";
    }
 
});

function remove(){
    this.parentElement.remove();
}

let uList = document.querySelector('ul');

uList.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {   //LI ????
      ev.target.classList.toggle('checked');
    }
  }, false);

let close = document.getElementsByClassName("close");
console.log(close);