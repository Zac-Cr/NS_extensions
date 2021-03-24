var k = 0;
function insertdscnt(text, dscnt){  
        console.log("for loop");
        console.log(k);
            setTimeout(function(){setdscnttype(text,k,"uir-machine-row-even");},1);
            setTimeout(function(){setpricelvl(k,"uir-machine-row-even");},3000);
            setTimeout(function(){setdscntamt(dscnt,k,"uir-machine-row-even");},5000);
            setTimeout(function(){loopinit(text,dscnt);},6000); 
            
        };
function loopinit(text, dscnt){
    k++;
    if(k < document.getElementsByClassName("uir-machine-row-even").length){
        console.log("recalled"); 
        insertdscnt(text, dscnt);  
    }
    else{
        console.log("add final line")
            var add = document.getElementsByClassName("uir-machine-row").length-2;
            document.getElementsByClassName("uir-machine-row")[add].click();
            setTimeout(function(){setdscnttype(text,add,"uir-machine-row");},1);
            setTimeout(function(){setpricelvl(add,"uir-machine-row");},3000);
            setTimeout(function(){setdscntamt(dscnt,add,"uir-machine-row");},5000);
        };
};

function setdscnttype(text,i,id){
    document.getElementsByClassName(id)[i].getElementsByTagName("td")[1].click();
    document.getElementById("item_insert").click();
    document.getElementById("item_item_display").click();
    document.getElementById("item_item_display").style.color = "rgba( 0, 0, 0)"; 
    document.getElementById("item_item_display").value = text; 
    document.getElementById("item_item_display").title = text;
    document.getElementById("hddn_item_item_fs").value ="6451666"
    document.getElementById("item_item_display").dispatchEvent(evt);
    console.log("10 sec wait");
};
function setpricelvl(i,id){
    document.getElementsByClassName(id)[i].getElementsByTagName("td")[4].click();        
    var focus = document.getElementsByClassName(id)[i].getElementsByTagName("td")[4];        
    document.getElementById("inpt_price6").title = "Custom";
    document.getElementById("inpt_price6").value = "Custom";
    document.getElementById("hddn_price6").value = -1
    document.getElementById("indx_price6").value = 1
    console.log(document.getElementById("inpt_price6").value);
    focus.getElementsByTagName("input")[3].value = "Custom";
    document.getElementById("hddn_price6").dispatchEvent(evt); 
}

function setdscntamt(dscnt,i,id){
    document.getElementsByClassName(id)[i].getElementsByTagName("td")[5].click();        
    document.getElementById('rate_formattedValue').value =  dscnt;
    document.getElementById("rate_formattedValue").dispatchEvent(evt);
};
chrome.runtime.onMessage.addListener(
    function(message,sender,sendresponse){
        console.log("message recieved");
        receivedArray.push(message); 
        console.log(receivedArray[0][0]); 
        seprecieved();  
    },
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
    console.log("get");
    console.log(dscntamt);
    var dsnttype = dsctdict[parseArray[0]];
    console.log(dsnttype);
    insertdscnt(dsnttype,dscntamt)
    
};
var dsctdict ={
    "cust_sat" : "DSCNT-GHO-CUST-SAT",
    "milit" : "DSCNT-GHO-MILITARY",
    "milit10" : "Military_10",
}
var parseArray= [];
var receivedArray= [];
console.log("discount.js");
const evt = new Event("change");