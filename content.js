
setTimeout(SetCatnSource(),15000);



// Set Catelog to Motosport, Source to GHO, Shipping to Standard, 
// Fee to 0, Auth amount to 1, and check the get auth button
function SetCatnSource(){

    var Cat = document.getElementById("inpt_custbody_bc_websitecategory2").value;
    // check to see if new order or not
    if(Cat != "MotoSport" || Cat != "Backcountry"){
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
        //get auth check
        document.getElementById("getauth_fs_inp").checked=true;
        document.getElementById("getauth_fs").className="checkbox_ck checkboximage";
        // set shipping method to standard
        document.getElementById("inpt_shipmethod11").value="4. Standard Delivery (Includes UPS MI)";
        document.getElementById("hddn_shipmethod11").value="6087332";
        document.getElementById("indx_shipmethod11").value="4";
        // set amount to free
        document.getElementById("shippingcost_formattedValue").value="0.00";
        document.getElementById("shippingcost").value="0.00";   

    }
    else{
        document.getElementById("newhist").click();
    }
        console.log("function onload call")
    };

console.log("Content script JS call")

