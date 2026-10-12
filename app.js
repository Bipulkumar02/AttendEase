let display = document.getElementById("display");
let zero = document.getElementById("zero");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let four = document.getElementById("four");
let five = document.getElementById("five");
let six = document.getElementById("six");
let seven = document.getElementById("seven");
let eight = document.getElementById("eight");
let nine = document.getElementById("nine");
let deleted = document.getElementById("delete");
let clear = document.getElementById("clear");
let add = document.getElementById("add");
let sortdisplay = document.getElementById("sorteddisplay");
let download = document.getElementById("download");
let branch = document.getElementById("branch");
let section = document.getElementById("section");
let period = document.getElementById("period");
let date = document.getElementById("date");
let d = document.getElementById("D");
let number = "";
let arr = [];
one.addEventListener("click",function(){
  number=number+1;
  display.innerHTML=number;
});
two.addEventListener("click",function(){
    number=number+2;
  display.innerHTML=number;
});
three.addEventListener("click",function(){
    number=number+3;
  display.innerHTML=number;
});
four.addEventListener("click",function(){
    number = number+4;
    display.innerText = number;
});
five.addEventListener("click",function(){
    number = number+5;
    display.innerText = number;
});
six.addEventListener("click",function(){
    number = number+6;
    display.innerText = number;
});
seven.addEventListener("click",function(){
    number = number+7;
    display.innerText = number;
});
eight.addEventListener("click",function(){
    number = number+8;
    display.innerText = number;
});
nine.addEventListener("click",function(){
    number = number+9;
    display.innerText = number;
});
zero.addEventListener("click",function(){
    number = number+0;
    display.innerText = number;
});
deleted.addEventListener("click",function(){
    number = number.slice(0,number.length-1);
    display.innerText = number;
});
clear.addEventListener("click",function(){
    display.innerText ="";
    number = "";
});
function show(){
for(let i = 0;i<arr.length;i++){
    let item = document.createElement("div");
    let cross = document.createElement("button");
    cross.innerText = "delete";
    item.innerText = arr[i];
    item.appendChild(cross);
    sortdisplay.appendChild(item);
    cross.addEventListener("click",function(){
        arr.splice(i,1);
        sortdisplay.innerHTML = "";
       show();
    })
}
}
add.addEventListener("click",function(){
    if(number==""){
        return;
    }
    if(arr.indexOf(number)==-1){
        sortdisplay.innerHTML = "";
    arr.push(number);
    number = "";
    display.innerText="";

    arr.sort((a, b) =>{
        let ad = a.startsWith("D");
        let bd = b.startsWith("D");
        if(!ad&&bd){
            return -1;
        }
        if(ad&&!bd){
            return 1;
        }
        if(!ad&&!bd){
           return Number(a) - Number(b);
        }
        if(ad&&bd){
          let one=  a.slice(1);
            let two = b.slice(1);
            return (Number(one)-Number(two));
 
        }
    });


    for(let i = 0;i<arr.length;i++){
    let item = document.createElement("div");
    let cross = document.createElement("button");
    cross.innerText = "delete";
    item.innerText = arr[i];
    item.appendChild(cross);
    sortdisplay.appendChild(item);
    cross.addEventListener("click",function(){
        arr.splice(i,1);
        sortdisplay.innerHTML = "";
       show();
    })
    }
    }else{
        number = "";
        display.innerText = "";
        return;
    }
});
download.addEventListener("click",function(){
    if(arr.length==0){
        return;
    }
   let docs =  new jspdf.jsPDF();
   docs.text("AttendEase - Attendance Sheet", 20,20);
   docs.text("Branch : "+branch.value,20,40);
   docs.text("Section : "+section.value,20,50);
   docs.text("Period : "+period.value,20,60);
   docs.text("Date : "+date.value,20,70);
   docs.text("Roll no - ",20,90);
   let y = 100;
   for(let i = 0;i<arr.length;i++){
    y = y+8;
    if (y > 277) {
        docs.addPage();
        y = 20;
    }
    docs.text(arr[i],20,y);
   }
   let filename = branch.value + "_" + section.value + "_P" + period.value + "_" + date.value + ".pdf";
   docs.save(filename);
});
d.addEventListener("click",function(){
    if(number==""){
    number = number+"D";
    display.innerHTML = number;
    }else{
        return;
    }
})