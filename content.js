window.addEventListener("load", onload);

function onload(){
    
    var category = document.getElementById("input_custbody_bc_websitecategory2");
    var source = document.getElementById("inpt_custbody_bc_ordersource3");
    if(category!="Motosport"){
        document.getElementById("inpt_custbody_bc_websitecategory2").value="MotoSport";
        document.getElementById("inpt_custbody_bc_ordersource3").value="GHO";
        document.getElementById("custbody_bc_authorizationamount_formattedValue").value="1.00";
        document.getElementsByClassName("getauth_fs").className="checkbox_ck";
    }
}

console.log("Content script JS call")