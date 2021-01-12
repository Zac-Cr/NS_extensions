function insertdscnt(text, dscnt){
    var selection = document.getElementsByClassName("uir-machine-row");
    for(i=0; i = selection.length; i++){
        try{
            var selection = document.getElementsByClassName("uir-machine-row-even");
            selection[i].children[2].click();
            document.getElementById("item_insert").click()
            var dscnttitle = document.getElementById("item_item_display");
            dscnttitle = text;
            runSearchitem()
            selection[i].children[4].click();
            document.getElementById("inpt_price6").value = "Custom";
            document.getElementById("indx_price6").value = '1';
            document.getElementById("hddn_price6").value = '-1';
            var inputselec = selection[i].children[4].getElementsByTagName("input");
            inputselec[3].value = "Custom";
            selection[1].children[5].click();
            document.getElementById('rate_formattedValue').value =  dscnt;
            document.getElementById('rate').value = dscnt;
            document.getElementById('rate_formattedValue').onchange();




            
        }
        catch{};   
    };

}

function runSearchitem(){
    var mysearch = document.createElement('script');
    mysearch.id = 'mysearchid';
    mysearch.innerText = "Searchitem(document.forms['item_form'].elements.item_display.value)";
    document.body.appendChild(mysearch);
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