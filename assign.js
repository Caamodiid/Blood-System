let fnameError=document.getElementById("helper1");
let LnameError=document.getElementById("helper2");

function fnameValide(){
    var correct_way1=/^[A-Za-z]+$/;
    var fnames =document.getElementById("Fname").value;
    if(fnames==""){
        fnameError.innerHTML='please fill name';
        return false;
    }if(fnames.length<=2|| fnames.length>=15){
        fnameError.innerHTML="Invalid name";
        return false;
    } if(fnames.match(correct_way1))
      true;
    else{
        fnameError.innerHTML="only alphabetic is allowed";
        return false;
    }
    fnameError.innerHTML='';
    return true;
}










function lnamevalide(){
    var correct_way2=/^[A-Za-z]+$/;
    var lnames  =document.getElementById("Lname").value;
    if(lnames ==""){
        LnameError.innerHTML='please fill name';
        return false;
    }if(lnames.length<=2){
        LnameError.innerHTML="Invalid name";
        return false;
     }
 if(lnames.match(correct_way2))
      true;
    else{
        LnameError.innerHTML="only alpha is allowed";
        return false;
    }
    LnameError.innerHTML='';
    return true;
 }


function passvalide(){
    var pass_match =/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var pass1 =document.getElementById("password").value;
    if(pass1.length==""){
        document.getElementById("helper3").innerHTML="please fill password";
        return false;
    }if(pass1.length<5){
        document.getElementById("helper3").innerHTML="please create strong password";
        return false;

    }if(pass1.length>11){
        document.getElementById("helper3").innerHTML="Your pasword is very long";
        return false;
    }
    if(pass1.match(pass_match))
    true;
    else{
        document.getElementById("helper3").innerHTML="Invalid";
    }
    document.getElementById("helper3").innerHTML="";
    return true;
}


 function confirmvalid(){
    var pass2 =document.getElementById("confirm").value;
    var pass1 =document.getElementById("password").value;
    if(pass2.length==""){
        document.getElementById("helper4").innerHTML="please comfirm password";
        return false;
    }
    if(pass1!=pass2){
        document.getElementById("helper4").innerHTML="Dismarch password";
        return false ;
    }
   document.getElementById("helper4").innerHTML=""
   return true;


}


    function emailvalid(){
        var email_correct=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        var email=document.getElementById("email").value;
        if(email.length==""){
            document.getElementById("helper5").innerHTML="please enter Email";
            return false;
        }if(email.match(email_correct))
        true;
        else{
            document.getElementById("helper5").innerHTML="Invalid email";
            return false;
        }
        document.getElementById("helper5").innerHTML="";
        return true;

    }

function phonevalid(){
    var tell =document.getElementById("tell").value;
    if(tell.length==0){
        document.getElementById("helper6").innerHTML="please enter phone number"
    }if(isNaN(tell)){
        document.getElementById("helper6").innerHTML="please enter numeric only";
        return false;
    }if(tell.length<9||tell.length>14){
        document.getElementById("helper6").innerHTML="Invalid Phone";
        return false;

    }
    document.getElementById("helper6").innerHTML="";
    return true;

}


var form =document.getElementById("signUpForm");
 form.addEventListener('submit',function(event){
    event.preventDefault();

var error1 =document.getElementById("helper7");
    error1.style.display="block"
    if(!fnameValide() || !lnamevalide() || !passvalide() || !confirmvalid() || !emailvalid() || !phonevalid() ){
        error1.innerHTML="";
        setTimeout(function(){error1.style.display="none"},100);
        return false;}
    
    var email=document.getElementById("email").value;
    var fnames =document.getElementById("Fname").value;
    var lnames  =document.getElementById("Lname").value;
    var tell =document.getElementById("tell").value;



    document.getElementById("par1").innerHTML="Full Name:"+fnames+" "+lnames+ " <br >" +"Your Email : "+email+ " <br> "+ "Your Phone: "+tell;
     document.getElementById("Success").innerHTML="succesfuly your sumbit form ";
     document.getElementById("Success").style.color="Lime"
     document.getElementById("Success").style.fontFamily="Arial";



 })

 function Refresh(){
    location.reload();

 }

//Assigment for Dom;


function Change(){
    let modify =document.getElementById("mod");
    modify.style.textAlign="center";
    modify.style.fontFamily="Arial";
    modify.style.fontSize="30px";
}

function change1(){
    let mod =document.getElementsByTagName("div");
    let text="";
    for(let i=0;i<mod.length;i++){
        mod[i].style.background="yellow";
    }
 
}

function change2(){
    mod1=document.getElementsByClassName("sum");
    let text1="";
    for(let i=0;i<mod1.length;i++){
        text1+=mod1[i].style.textShadow="5px 4px 2px green";
    }
}
