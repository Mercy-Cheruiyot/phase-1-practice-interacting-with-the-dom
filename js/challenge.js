const minus= document.getElementById("minus");
const plus= document.getElementById("plus");
const pause= document.getElementById("pause");
const counter= document.getElementById("counter");
const heart= document.getElementById("heart");
const submit=document.getElementById("submit")
let count=0;

setInterval(myTimer, 1000);

function myTimer() {
  count +=1
  counter.innerHTML = count;}

  function pauser(){

  }

  clearInterval(pauser);
  function pauser(){
    pause.addEventListener("click");
    counter.innerHTML=count;
  }
  
  pause.addEventListener("click", function(){
    clearInterval(counter)
})
    plus.addEventListener("click", function(){
        count += 1;
        counter.innerHTML= count;
    })
    minus.addEventListener("click",function(){
        count -=1;
        counter.innerHTML=count;
    })
    heart.addEventListener("click",function(){
        let list=document.getElementById ("list")
        list.innerHTML += `<li>${count} has been liked 1 time</li>`
    })
  
   const Form = document.forms["comment-form"];

Form.addEventListener('submit', addComment); // adding submit listener to the form

function addComment(evt) {
   evt.preventDefault(); 
   const lists = document.getElementById('list');
   let toDoText = Form.elements["comment"].value 
   lists.innerHTML += `<p class="todo">${toDoText}</p>`
  Form.reset(); 
}
   

    
 
