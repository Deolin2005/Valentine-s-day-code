var pageno=0;

var letterimage=document.getElementById("letterimage");
letterimage.addEventListener("click",function(){
    let bck=document.getElementById("letter-background");
    let lett=document.getElementById("letter");
    bck.style.display="block";
    lett.style.display="block";
})
var cancel=document.getElementById("cancel");
cancel.addEventListener("click",function(){
    let bck=document.getElementById("letter-background");
    let lett=document.getElementById("letter");
    bck.style.display="none";
    lett.style.display="none";  
})
function nextpage(){
    pageno+=1
    console.log(pageno);
    let firstpage=document.getElementById("firstpage");
    firstpage.style.display="none";
    if(pageno==1){
    let secondpage=document.getElementById("secondpage");
    secondpage.style.display="block";
}
    if(pageno==2){
      secondpage.style.display="none";  
      let thirdpage=document.getElementById("thirdpage");
      thirdpage.style.display="block"
      let nextbutton=document.getElementById("nextbutton");
      nextbutton.style.display="none";
    }
    if(pageno==3){
        thirdpage.style.display="none";
        let fourthpage=document.getElementById("fourthpage")
        fourthpage.style.display="block";
    }
}
var noo=document.getElementById("no");
noo.addEventListener("mouseover" ,function(){
    let indicator=document.getElementById("indicator")
    indicator.style.display="block";
})
noo.addEventListener("mouseleave" ,function(){
    let indicator=document.getElementById("indicator")
    indicator.style.display="none";
})
