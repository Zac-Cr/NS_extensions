const eve = new Event("change");
// if(document.getElementsByClassName("uir-record-type")[0].innerText == "Return Authorization"){
//     try{
//         document.getElementsByClassName("uir-record-id")[0].innerHTML
//         console.log("rma already made")
//     }
//     catch{
//         if(confirm("Is this a credit transaction")){
//             document.getElementById("inpt_customform1").value = "BC Return Authorization - Credit";
//             document.getElementById("hddn_customform1").value = "122";
//             document.getElementById("indx_customform1").value = "1";
//             document.getElementById("hddn_customform1").dispatchEvent(eve);
//         }
//     }
//     // Can have it seen as every Return authorizatoin made make google alert cash or credit depedning on selection makes the following selection on page 

// };

function SetCatnSource(){
    // try{
        // check to see if new order or not
        if(Cat == 'go'){
            // Set catalog
            document.getElementById("inpt_custbody_bc_websitecategory2").value="MotoSport";
            document.getElementById("hddn_custbody_bc_websitecategory2").value="3";
            document.getElementById("indx_custbody_bc_websitecategory2").value="3";
            // set ORder Source
            document.getElementById("inpt_custbody_bc_ordersource3").value="GHO";
            document.getElementById("hddn_custbody_bc_ordersource3").value="5";
            document.getElementById("indx_custbody_bc_ordersource3").value="5";
            // Set auth amount
            document.getElementById("custbody_bc_authorizationamount_formattedValue").click();
            document.getElementById("custbody_bc_authorizationamount_formattedValue").value= .01;
            document.getElementById("custbody_bc_authorizationamount_formattedValue").innerHTML= .01;
            document.getElementById("custbody_bc_authorizationamount_formattedValue").innerText= .01;
            document.getElementById("custbody_bc_authorizationamount").value = .01;
            //get auth check
            document.getElementById("getauth_fs").click()
            };              
             
    // catch{
    //     console.log("Auto input error")
    // };  
};

function Setshipping(){
    if(Cat== "go"){
        document.getElementById("inpt_shipmethod12").title="UPS Ground";
        document.getElementById("inpt_shipmethod12").value="UPS Ground";
        document.getElementById("hddn_shipmethod12").value="6135455";
        document.getElementById("indx_shipmethod12").value="15";
        // set amount to free
        document.getElementById("shippingcost").value="0.00";
        document.getElementById("shippingcost").dispatchEvent(eve);
        document.getElementById("shippingcost_formattedValue").value="0.00";
        document.getElementById("shippingcost_formattedValue").dispatchEvent(eve);
        console.log("this changed the shipping");
        document.getElementById("shippingtxt").removeEventListener("click", Setshipping);
        // Avatax setting
        document.getElementById("inpt_shippingtaxcode15").title="AVATAX";
        document.getElementById("inpt_shippingtaxcode15").value="AVATAX";
        document.getElementById("hddn_shippingtaxcode15").value="6156581";
        document.getElementById("indx_shippingtaxcode15").value="2";
        document.getElementById("hddn_shippingtaxcode15").dispatchEvent(eve);
    };
//Auto adjust shipping if its standard to ups ground
    if(Cat != "go" &&  document.getElementById("indx_shipmethod12").value == 4){
        document.getElementById("inpt_shipmethod12").title="UPS Ground";
        document.getElementById("inpt_shipmethod12").value="UPS Ground";
        document.getElementById("hddn_shipmethod12").value="6135455";
        document.getElementById("indx_shipmethod12").value="15";
    };
};



function OrderNotes(){
    try{

        document.getElementById("tr_newhist").className="tabBnt";
        document.getElementById("newhist").click();
        console.log("Notes click");
        _mousedown="F";
        _mousedown="T";
        _mousedown="F";
    }
    catch{
    }

};

try{
    var Cat = document.getElementsByClassName("uir-record-id")[0].innerHTML;
    console.log(Cat)
}
catch{
    Cat = 'go';
    console.log(Cat)
};
document.getElementById("shippingtxt").addEventListener("click", Setshipping);
setTimeout(OrderNotes(),5000);
setTimeout(SetCatnSource(),5000);
console.log("NS_auto loaded")
