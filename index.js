var a=0;
document.querySelector(".nobutton").addEventListener("mouseover",function(){
    if(a==0)
    {
        document.querySelector(".emote").firstElementChild.setAttribute("src","images/cute-sad.gif");
        
    }
   if(a==3){
    document.querySelector(".emote").firstElementChild.setAttribute("src","images/littlebitofab-cry.gif");
   }
    
    this.classList.add("abs");
    this.style.top=Math.floor(Math.random()*90)+"%";
    this.style.left=Math.floor(Math.random()*90)+"%";
    
    a++;
})

document.querySelector(".yesbutton").addEventListener("click",function (){
    document.querySelector(".head").innerHTML=" Yeyyy Finally!!"
    document.querySelector(".emote").firstElementChild.setAttribute("src","images/oh-yay.gif");
    document.querySelector(".box1").classList.add("hide");

    document.querySelector(".box2").classList.remove('hide');
    // document.querySelector("box2").classList.add("show");
})

