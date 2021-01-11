function insertdscnt(text, dscnt){
    var selection = document.getElementsByClassName("uir-machine-row");
    for(i=0; i = selection.length; i++){
        if(selection[i].id.startsWith("item_row")){
            var index = selection[i].id
            if(index[index.length - 1]%2 == 0){
                selection[i].className = "uir-machine-row-focused listfocusedrow";
                selection[i].children[2].click();
                document.getElementById("item_insert").click();
                var dscnttype = document.getElementById("item_item_display")
                dscnttype.click();
                dscnttype.value = text;
                document.getElementById("inpt_price6").value = "Custom";
                document.getElementById("rate_formattedValue").click();
                document.getElementById("rate_formattedValue").value = dscnt;
            }
        };
    };   

}

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
    "cust_sat" : "dscnt-gho-cust-satisfaction",
    "milit" : "dscnt-gho-military",
    "rider" : "sponsored rider",
    "b2b" : "b2b"
}
var parseArray= [];
var receivedArray= [];
console.log("discount.js")