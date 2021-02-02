function insertdscnt(text, dscnt){
    var selection = document.getElementsByClassName("uir-machine-row-even");
    for(i=0; i = selection.length; i++){
            selection[i].children[2].click();
            document.getElementById("item_insert").click()
            document.getElementById("item_item_display").click();
            document.getElementById("item_item_display").value = text; 
            //needs to be text when testing is done
            document.getElementById("item_item_display").onchange();
            document.getElementById("inpt_price6").title = "Custom";
            document.getElementById("inpt_price6").value = "Custom";
            document.getElementById("hddn_price6").value = -1;
            document.getElementById("hddn_price6").onchange();
            document.getElementById("indx_price6").value = 1;
            document.getElementsByName("price_display")[0].value ="Custom";            
            document.getElementById('rate_formattedValue').value =  dscnt;
            document.getElementById('rate_formattedValue').onchange();
            document.getElementById('rate').onchange();           
    };
};

chrome.runtime.onMessage.addListener(
    function(message,sender,sendresponse){
        console.log("message recieved");
        receivedArray.push(message); 
        console.log(receivedArray[0][0]); 
        seprecieved();  
    }
);

function seprecieved(){
    for(i=0; i < receivedArray[0].length; i++){
        parseArray.push(receivedArray[0][i]);
    };
    console.log(parseArray);
    getdiscount();
};

function getdiscount(){
    var dscntamt = `-${parseArray[1]}%`;
    insertdscnt(dsctdict[parseArray[0]], dscntamt);
}

var dsctdict ={
    "cust_sat" : "DSCNT-GHO-CUST-SAT",
    "milit" : "dscnt-gho-military",
    "rider" : "sponsored rider",
    "b2b" : "b2b"
}
var parseArray= [];
var receivedArray= [];
console.log("discount.js")