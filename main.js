var drawing = document.getElementById("drawing");

drawing.addEventListener("click",drawingClick);

drawingNames = ["1.jpg","3.jpg","4.jpg","5.jpg","6.jpg","2018_1_8.png","2018_1_21.png","2018_2_12.png","2018_2_22.png","2018_2_28.png","2018_3_14.png","2018_4_16.png","2018_5_30.png","2018_7_6.png","2018_7_13.png","2018_8_30.png","girl.jpg","girl3.png"];

function drawingClick(e){
    var content = document.getElementById("content");
    content.innerHTML = "";
    
    for(name of drawingNames){
        console.log(name);
        createPic(name,content);
    }
    
   
}

function createPic(name,parent){
    var temp = document.createElement("img");
    var url = "drawing/" + name;
    temp.setAttribute("src",url);
    temp.style.maxWidth = "300px";
    
    parent.appendChild(temp);
}