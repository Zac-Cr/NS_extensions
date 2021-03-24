const ev = new Event("change");

try{

    if(document.getElementsByClassName("uir-record-type")[0]= "Credit Memo"){
        //    sets CM type to returns
        document.getElementById("inpt_custbody_bc_cmtype4").value = "Returns";
        document.getElementById("inpt_custbody_bc_cmtype4").title = "Returns";
        document.getElementById("hddn_custbody_bc_cmtype4").value = 3;
        document.getElementById("indx_custbody_bc_cmtype4").value = 4
        console.log("value sets");
        // document.getElementById("hddn_custbody_bc_cmtype4").onchange();
        console.log("onchange");
        setTimeout(function(){onchangecall("hddn_custbody_bc_cmtype4")},2000)
        console.log("dispatch")
        // Set profit center to Motossport
        document.getElementById("inpt_class5").value= "100 United States : 101 Full-Price : 104 MotoSport";
        document.getElementById("inpt_class5").title= "100 United States : 101 Full-Price : 104 MotoSport";
        document.getElementById("hddn_class5").value = 3;
        document.getElementById("indx_class5").value = 3;
        setTimeout(function(){onchangecall("hddn_class5")},2000);
        
    }
}
catch{};   
function onchangecall(id){
    document.getElementById(id).dispatchEvent(ev);
}