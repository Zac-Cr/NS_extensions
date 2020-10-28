// window.addEventListener("load", onload);
document.addEventListener("click", onload);

// chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
//     alert(response);
// });
function onload(){
    
    var category = document.getElementById("input_custbody_bc_websitecategory2");
    if(category!="Motosport"){
        document.getElementById("indx_custbody_bc_websitecategory2").value="3";
        document.getElementById("inpt_custbody_bc_websitecategory2").value="MotoSport";
        document.getElementById("custbody_bc_websitecategory").value="3";
        // document.getElementById("indx_custbody_bc_ordersource3").value="5";
        // document.getElementById("custbody_bc_authorizationamount_formattedValue").value="1.00";
        // document.getElementById("getauth_fs").className="checkbox_ck";
    }
    console.log("function onload call")
}

console.log("Content script JS call")