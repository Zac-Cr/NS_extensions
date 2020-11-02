// window.addEventListener("load", onload);
document.addEventListener("click", onload); 
function onload(){
    
    document.getElementById("inpt_custbody_bc_websitecategory2").value="MotoSport";
    document.getElementById("hddn_custbody_bc_websitecategory2").value="3";
    document.getElementById("indx_custbody_bc_websitecategory2").value="3";
    console.log("function onload call")
};

console.log("Content script JS call")