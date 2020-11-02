// window.addEventListener("load", onload);
document.addEventListener("click", onload); 
function SetCatnSource(){
    
    document.getElementById("inpt_custbody_bc_websitecategory2").value="MotoSport";
    document.getElementById("hddn_custbody_bc_websitecategory2").value="3";
    document.getElementById("indx_custbody_bc_websitecategory2").value="3";
    document.getElementById("inpt_custbody_bc_ordersource3").value="GHO";
    document.getElementById("hddn_custbody_bc_ordersource3").value="5";
    document.getElementById("indx_custbody_bc_ordersource3").value="5";
    console.log("function onload call")
};

console.log("Content script JS call")