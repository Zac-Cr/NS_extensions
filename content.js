// window.addEventListener("load", onload);
// document.addEventListener("click", onload); 

setTimeout(SetCatnSource(),15000);

function SetCatnSource(){
    
    // Set catalog
    document.getElementById("inpt_custbody_bc_websitecategory2").value="MotoSport";
    document.getElementById("hddn_custbody_bc_websitecategory2").value="3";
    document.getElementById("indx_custbody_bc_websitecategory2").value="3";
    // set ORder Source
    document.getElementById("inpt_custbody_bc_ordersource3").value="GHO";
    document.getElementById("hddn_custbody_bc_ordersource3").value="5";
    document.getElementById("indx_custbody_bc_ordersource3").value="5";
    // Set auth amount
    document.getElementById("custbody_bc_authorizationamount_formattedValue").value="1.00";
    // not working yet
    document.querySelector("checkbox").checked=true;
    document.getElementById("getauth_fs").className="checkbox_ck";
    console.log("function onload call")
};

console.log("Content script JS call")