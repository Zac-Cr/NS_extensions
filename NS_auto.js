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
            document.getElementById("custbody_bc_authorizationamount_formattedValue").value= 1.00;
            document.getElementById("custbody_bc_authorizationamount_formattedValue").innerHTML= 1.00;
            document.getElementById("custbody_bc_authorizationamount_formattedValue").innerText= 1.00;
            document.getElementById("custbody_bc_authorizationamount").value = 1.00;
            //get auth check
            document.getElementById("getauth_fs").click()
            };              
        // }     
    // catch{
    //     console.log("Auto input error")
    // };  
};

function Setshipping(){
    if(Cat== "go"){
        document.getElementById("inpt_shipmethod11").title="UPS Ground";
        document.getElementById("inpt_shipmethod11").value="UPS Ground";
        document.getElementById("hddn_shipmethod11").value="6135455";
        document.getElementById("indx_shipmethod11").value="15";
        // set amount to free
        document.getElementById("shippingcost_formattedValue").value="0.00";
        document.getElementById("shippingcost").value="0.00";
    }
        console.log("this changed the shipping")
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
