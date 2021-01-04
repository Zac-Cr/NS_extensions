function insertdscnt(text, dscnt){
    var selection = document.getElementsByClassName("uir-machine-row");
    for(i=0; i = selection.length; i++){
        if(selection[i].startsWith("item_row")){
            var index = selection[i].id
            if(index[index.length - 1]%2 == 0){
                selection[i].className = "uir-machine-row-focused listfocusedrow";
                selection[i].children[2].click();
                document.getElementById("item_insert").click();
                var dscnttype = document.getElementById("item_item_display")
                dscnttype.value = text;
                document.getElementById("inpt_price6").value = "Custom";
                document.getElementById("rate_formattedValue").value = dscnt;
            }
        };
    };   

}

chrome.runtime.onMessage.addListener(
    function(message,sender,sendresponse){
        console.log("message recieved");
        if(message == "go"){
            insertdscnt(receivedArray[0], receivedArray[1]);
        }
        receivedArray.push(message); 
        console.log(receivedArray);   
    }
);

var receivedArray= []