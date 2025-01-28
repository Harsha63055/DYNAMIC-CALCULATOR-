let display=document.getElementById("display")
function calc(event){
    display.value+=event.target.value
}
function my_evaluate() {
    try {
        
        let expression = display.value.replace(/%/g, "/100");
        display.value = eval(expression); 
    } catch (error) {
        display.value = "Error"; 
    }
}
function del(){
    display.value=display.value.slice(0,-1)
}
function allclear(){
    display.value=""
}