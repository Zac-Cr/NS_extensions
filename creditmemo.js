try{
    if(document.getElementsByClassName("uir-record-type")[0]= "Credit Memo"){
        //    sets CM type to returns
        document.getElementById("inpt_custbody_bc_cmtype4").value = "Returns";
        document.getElementById("inpt_custbody_bc_cmtype4").title = "Returns";
        // Set profit center to Motossport
        document.getElementById("inpt_class5").value= "100 United States : 101 Full-Price : 104 MotoSport";
        document.getElementById("inpt_class5").title= "100 United States : 101 Full-Price : 104 MotoSport";
    }
}
catch{};