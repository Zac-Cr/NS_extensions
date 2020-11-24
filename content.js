var selection = "";
var firstinpt= "";
var secondinpt= "";
// Set Catelog to Motosport, Source to GHO, Shipping to Standard, 
// Fee to 0, Auth amount to 1, and check the get auth button
function SetCatnSource(){
    try{
        var Cat = document.getElementsByClassName("uir-record-id")[0].innerHTML;
        console.log(Cat)
    }
    catch{
        Cat = 'go';
        console.log(Cat)
    }
    try{

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
            
    }
    catch{
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

function getmessage(){
    selection = receivedArray[0];
    console.log(selection)
    switch(receivedArray.length){
        case 2:
            firstinpt = receivedArray[1];
            break;
        case 3:
            firstinpt = receivedArray[1];
            secondinpt = receivedArray[2];
            break;
    };
    for(i=0;Object.keys(messages).length; i++){
        if(selection == Object.keys(messages)[i]){
        // find the classname or id tag for the email 
        document.getElementsByClassName("public-DraftStyleDefault-block")[0].innerText = messages[selection]
        };

    };
};

var messages={
    "rma_free" : `Hey!/n
    /n
    Return Number (RMA):${firstinpt}/n
    /n
    Label:${secondinpt}/n
    /n
    To return your order using our label, please write your RMA number on the outside of the package, print our UPS Return Label and drop your package at a UPS Facility or with a UPS Driver.
    Please let us know if you are having any problems viewing this label, we can resend it in a different format. If you cannot print your label, either bring up your label on a smartphone for the UPS store to scan and print there, or forward this email directly to your UPS store./n
    /n
    Attention:/n
    * Our labels only work with UPS/n
    * This is a free and complimentary label/n
    * Returns typically take 1-5 business days to process once they arrive back to us, although they can take longer during peak times/n
    * Once your return has been processed, we will send you an email letting you know/n
    /n    
    The label has a tracking number included on it. Please note down this tracking number to keep track of your packages status!/n
    /n
    Thank you,
    `,
    "rma_cust" : `Hey!/n
    /n
    As stated in our return policy we do not pay for returns of an oversized item. The item you are trying to return is classified as oversized. If you would still like to return your product please get it shipped to/n
    295 Technology Drive/n
    Christiansburg, VA 24073-7383/n
    /n
    After we receive your product a full refund will be issued to your account. Make sure to put the RMA number on the label as well, your label should look like this/n
    ATTN RMA: ${firstinpt}/n
    295 Technology Drive/n
    Christiansburg, VA 24073-7383/n`,
    "rma_stnd" : `Hey!/n
    /n
    Return Number (RMA):${firstinpt}/n
    /n
    Label:${secondinpt}/n
    /n
    To return your order using our label, please write your RMA number on the outside of the package, print our UPS Return Label and drop your package at a UPS Facility or with a UPS Driver.
    Please let us know if you are having any problems viewing this label, we can resend it in a different format. If you cannot print your label, either bring up your label on a smartphone for the UPS store to scan and print there, or forward this email directly to your UPS store.
    /n
    Attention:/n
    * Our labels only work with UPS/n
    *  The included label is a charged $6.99 label. That total, plus any applicable tax, will be taken out of your total refund/n
    * Returns typically take 1-5 business days to process once they arrive back to us, although they can take longer during peak times/n
    * Once your return has been processed, we will send you an email letting you know/n
    /n
    The label has a tracking number included on it. Please note down this tracking number to keep track of your packages status!/n
    /n
    Thank you,/n`,
    "backorder" : `The items that are left are on a backorder. The estimated date of arrival from ${secondinpt} is ${firstinpt}. `,
    "aut" : `Sorry that you seem to have 2 charges on your account. The first charge that you see that is a few cents more then the total amount was the authorization made to make sure the card was good. Due to legal reasons we cannot take the money out of the account until the product is leaving our warehouse on its way to you. Because of this, you will see a second charge that will match the original total of the order. The authorization that was placed when the order was submitted will then drop off your account within a couple days of the items being shipped. If you order was sent in seperate shipments you will see a charge equal to the total of the items of that shipment.`,
}

setTimeout(OrderNotes(),5000);
setTimeout(SetCatnSource(),5000);

var receivedArray =[];

chrome.runtime.onMessage.addListener(
    function(message,sender,sendresponse){
        if(message == "getmessage"){
            getmessage();
            console.log("getmessage called ")
        }
        console.log("message recieved");
        receivedArray.push(message); 
        console.log(receivedArray);   
    }
);

console.log("content loaded")