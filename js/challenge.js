const minus= document.getElementById("minus");
const plus= document.getElementById("plus");
const pause= document.getElementById("pause");
const counter= document.getElementById("counter");
const heart= document.getElementById("heart");
let count=0;
//counter.addEventListener("onload",function(){
  //  return setInterval(count, 1000);

//})
setInterval(myTimer, 1000);
function myTimer() {
  count +=1
  counter.innerHTML=count;}
  
  pause.addEventListener("click", function(){
    clearInterval(timer)
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
        let list=document.createElement(ul)
        list.innerhtml
        return alert `${counter} has been liked 1 time`
    })
 
