function insertdscnt(text, dscnt){
    console.log(document.getElementsByClassName("uir-machine-row-even"))
    console.log(document.getElementsByClassName("uir-machine-row-even")[1]);
    console.log(document.getElementsByClassName("item_row_1"));
    for(i=0; i = document.getElementsByClassName("uir-machine-row-even").length; i++){
        // clicks the node to start editing.
            document.getElementsByClassName("uir-machine-row-even")[i].childNodes[2].click();
            // clicks insert button
            document.getElementById("item_insert").click()
            // document.getElementById("item_item_display").click();
            // set dscnt text
            document.getElementById("item_item_display").value = text; 
            document.getElementById("item_item_display").onchange();
            // clicks the price level slot
            document.getElementsByClassName("uir-machine-row-even")[i].childNodes[4].click();
            // sets the price level to custom
            document.getElementById("inpt_price6").title = "Custom";
            document.getElementById("inpt_price6").value = "Custom";
            document.getElementById("hddn_price6").value = -1;
            document.getElementById("hddn_price6").onchange();
            document.getElementById("indx_price6").value = 1;
            document.getElementsByName("price_display")[0].value ="Custom";    
        //    clicks the rate section
            document.getElementsByClassName("uir-machine-row-even")[i].childNodes[5].click();        
            // sets the rate
            document.getElementById('rate_formattedValue').value =  dscnt;
            document.getElementById('rate_formattedValue').onchange();
            document.getElementById('rate').onchange();           
    };
};

function injectJS(){
    var node = document.createElement("script");
    node.innerHTML= insert
    body.appendChild(node);
    getdiscount();
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
    insertdscnt()
};

function getdiscount(){
    var dscntamt = `-${parseArray[1]}%`;
    console.log("injected");
};
var dsctdict ={
    "cust_sat" : "DSCNT-GHO-CUST-SAT",
    "milit" : "DSCNT-GHO-MILITARY",
}
var parseArray= [];
var receivedArray= [];
console.log("discount.js");
