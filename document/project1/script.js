// alert("loading");
function addNewWEField() {
 //   console.log("Adding new field");

 let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("weField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");

 let weOb=document.getElementById("we");
 let weAddbuttonOb=document.getElementById("weAddbutton");

 weOb.insertBefore(newNode, weAddbuttonOb);

 
}

function addNewEDField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("edField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3); 
 newNode.setAttribute("placeholder","Enter here");


 let edOb=document.getElementById("ed");
 let edAddbuttonOb=document.getElementById("edAddbutton");

 edOb.insertBefore(newNode, edAddbuttonOb);

}

function addNewSKField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("skField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let skOb=document.getElementById("sk");
 let skAddbuttonOb=document.getElementById("skAddbutton");

 skOb.insertBefore(newNode, skAddbuttonOb);

}

function addNewINField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("inField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let inOb=document.getElementById("in");
 let inAddbuttonOb=document.getElementById("inAddbutton");

 inOb.insertBefore(newNode, inAddbuttonOb);

}

function addNewPRField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("prField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let prOb=document.getElementById("pr");
 let prAddbuttonOb=document.getElementById("prAddbutton");

 prOb.insertBefore(newNode, prAddbuttonOb);

}
function addNewPLField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("plField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let plOb=document.getElementById("pl");
 let plAddbuttonOb=document.getElementById("plAddbutton");

 plOb.insertBefore(newNode, plAddbuttonOb);

}

function addNewLNField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("lnField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let lnOb=document.getElementById("ln");
 let lnAddbuttonOb=document.getElementById("lnAddbutton");

 lnOb.insertBefore(newNode, lnAddbuttonOb);

}

function addNewHBField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("hbField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let hbOb=document.getElementById("hb");
 let hbAddbuttonOb=document.getElementById("hbAddbutton");

 hbOb.insertBefore(newNode, hbAddbuttonOb);

}


function addNewDCField() {


    let newNode=document.createElement("textarea");
 newNode.classList.add("form-control");
 newNode.classList.add("dcField");
 newNode.classList.add("mt-2");
 newNode.setAttribute("rows",3);
 newNode.setAttribute("placeholder","Enter here");


 let dcOb=document.getElementById("dc");
 let dcAddbuttonOb=document.getElementById("dcAddbutton");

 dcOb.insertBefore(newNode, dcAddbuttonOb);

}






//genrating cv//
function generateCV() {
   // console.log("generating CV");

    let nameField=document.getElementById("nameField").value;
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML = nameField;

    //direct

    document.getElementById('nameT2').innerHTML= nameField;


     //direct

     document.getElementById('dobT').innerHTML= document.getElementById("dobField").value;



    //direct

    document.getElementById('contactT').innerHTML= document.getElementById("contactField").value;

    //direct

    document.getElementById('addressT').innerHTML= document.getElementById("addressField").value;

    //direct
    document.getElementById('emailT').innerHTML= document.getElementById("emailField").value;

    //objective

    document.getElementById('objectiveT').innerHTML= document.getElementById("objectiveField").value;

    //direct

    //we
    let wes=document.getElementsByClassName('weField');

    let str='';

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById('weT').innerHTML= str;

    //ed


    let eds=document.getElementsByClassName('edField');

    let str1='';

    for(let e of eds)
    {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById('edT').innerHTML= str1;

   //skills
   let sks=document.getElementsByClassName('skField');

    let str2='';

    for(let e of sks)
    {
        str2 += `<li> ${e.value} </li>`;
    }

    document.getElementById('skT').innerHTML= str2;

   
     //interests
   let ins=document.getElementsByClassName('inField');

   let str3='';

   for(let e of ins)
   {
       str3 += `<li> ${e.value} </li>`;
   }

   document.getElementById('inT').innerHTML= str3;

    //projects
    let prs=document.getElementsByClassName('prField');

    let str4='';
 
    for(let e of prs)
    {
        str4 += `<li> ${e.value} </li>`;
    }
 
    document.getElementById('prT').innerHTML= str4;
 
    
    //programming lang
    let pls=document.getElementsByClassName('plField');

    let str5='';
 
    for(let e of pls)
    {
        str5 += `<li> ${e.value} </li>`;
    }
 
    document.getElementById('plT').innerHTML= str5;
 
    
     //languages


     let lns=document.getElementsByClassName('lnField');

     let str6='';
 
     for(let e of lns)
     {
         str6 += `<li> ${e.value} </li>`;
     }
     document.getElementById('lnT').innerHTML= str6;
     

      //hobbies


    let hbs=document.getElementsByClassName('hbField');

    let str7='';

    for(let e of hbs)
    {
        str7 += `<li> ${e.value} </li>`;
    }
    document.getElementById('hbT').innerHTML= str7;


     //declaration


     let dcs=document.getElementsByClassName('dcField');

     let str8='';
 
     for(let e of dcs)
     {
         str8 += `<li> ${e.value} </li>`;
     }
     document.getElementById('dcT').innerHTML= str8;

    //code for image
    let file=document.getElementById("imgField").files[0];
    
    console.log(file);

    let reader=new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    //set the img to template


    reader.onloadend=function(){
        document.getElementById("imgTemplate").src=reader.result;
    };
  
    document.getElementById('cv-form').style.display="none";
    document.getElementById('cv-template').style.display="block";


  
}

//print
function printcv() {
    window.print();
}