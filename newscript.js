let original_heading=document.getElementById("heading").innerText;
let sign="X";
let name_heading=document.getElementById("heading");

function fill(number){

   let box_status=document.getElementById("a"+number); 

   if(box_status.innerText==""){
    box_status.innerText=sign;
    checksign();
    name_heading.innerHTML= "<center>"+sign+" turn"+"</center>";
        if(Winner()){
            alert(checksign()+" winner");
            // for(let i=1;i<=9;++i){
            //document.getElementById('a'+i).innerHTML=="";
            // }
            // sign="X";
            rst();
        }
    // else{
    // alert("Match Draw");
    // rst();
    // }
    }
        
}  
function rst(){
    for(let i=1;i<=9;++i){
        (document.getElementById('a'+i).innerHTML="");
    }
    sign="X";
    name_heading.innerHTML= "<center>"+original_heading+"</center>";
   
}
function checksign(){
    if(sign=="X") sign="0";
    else sign="X";
   
    return sign;
    
}

function get(n){
    
    return(document.getElementById("a"+n).innerText);
}

function Winner(){
    if(checkmove("1","2","3","X")||checkmove("1","4","7","X")||checkmove("1","5","9","X")||
    checkmove("2","5","8","X")||checkmove("4","5","6","X")||checkmove("3","6","9","X")||checkmove("3","5","7","X")||
    checkmove("7","8","9","X"))
        return true;
    else if(checkmove("1","2","3","0")||checkmove("1","4","7","0")||checkmove("1","5","9","0")||
    checkmove("2","5","8","0")||checkmove("4","5","6","0")||checkmove("3","6","9","0")||checkmove("3","5","7","0")||
    checkmove("7","8","9","0"))
        return true;  
    else{
        if(get(1)!=""&&get(2)!=""&&get(3)!=""&&get(4)!=""&&get(5)!=""&&get(6)!=""&&get(7)!=""&&get(8)!=""&&get(9)!=""){
            alert("Match Draw");
            rst();
        }
    }   
}

function checkmove(n1,n2,n3,value){
    if(get(n1)==value&&get(n2)==value&&get(n3)==value)
        return true;
}

