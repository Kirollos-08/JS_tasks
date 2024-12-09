let txt =document.getElementById("txt")
function get(a){
    txt.value+=a;

}
equal=document.getElementById("equal");
equal.onclick=()=>{
    txt.value=eval(txt.value)
}
function AC(){
txt.value=""
}
function DE(){
    txt.value=txt.value.slice(0,-1)
}