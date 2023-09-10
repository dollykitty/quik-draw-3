function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    background("ivory")
    }

    function preload(){
        classifier=ml5.imageClassifier("DoodleNet")
    }
    
    function classifycanvas(){
    classifier.classify(canvas,gotresult)
    }
    function draw(){
    strokeWeight(10)
    stroke("red")
    if(mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY)
    }
    
    }
    function gotresult(error,result){
    if (error) {
        console.error(error)
    }
    console.log(result)
    document.getElementById("label").innerHTML="label :"+result[0].label
    document.getElementById("confidence").innerHTML="confidence :"+Math.round(result[0].confidence*100)+"%"
    hello=new SpeechSynthesisUtterance(result[0].label)
    itss.speek(hello)
    }
    function clearcanvas(){
        background("ivory")
    }