// window.addEventListener("load", onload);
// document.addEventListener("click", onload);
setTimeout(onload);
// chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){
//     alert(response);
// });
function onload(){
    
    var category = document.getElementById("inpt_custbody_bc_websitecategory2").value;
    var changedCategory = "MotoSport";
    var source = document.getElementById("indx_custbody_bc_websitecategory2").value;
    // document.getElementById("custbody_bc_websitecategory").value="3";
    var changeSource = "3";
    if(category!="Motosport"){
        if(category){
            category = changedCategory;
            console.log("category null")
        }
        else{
            category ="MotoSport";
        }
        if(source){
            source = changeSource;
            console.log("source null")
        }
        else{
            source = "3";
        }
        if()
            
        // document.getElementById("indx_custbody_bc_ordersource3").value="5";
        // document.getElementById("custbody_bc_authorizationamount_formattedValue").value="1.00";
        // document.getElementById("getauth_fs").className="checkbox_ck";
    }
    console.log("function onload call")
}

console.log("Content script JS call")