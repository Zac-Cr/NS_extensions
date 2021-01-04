function changeinput(){ 
    var custinpt = document.getElementById("cstm");
    var militinpt = document.getElementById('milit');
    custinpt.className= "hddn";
    militinpt.className ="hddn";
    document.getElementById("business_amnt").className ="hddn";
    document.getElementById("rider_amnt").className ="hddn";
      switch(dscnt.value){
        case "cust_sat":
            custinpt.className= "unhidden";
            break;
        case 'milit':
            militinpt.className ="unhidden";
            break;
        case 'rider':
            document.getElementById("rider_amnt").className ="unhidden";
            break;
        case 'b2b':
            document.getElementById("business_amnt").className ="unhidden"  
            break;
        case '':
            document.getElementById('submit_dsc').className='hddn';
            document.getElementById("rider_amnt").value = "";
            document.getElementById("business_amnt").value = "";


            break;
        }
    document.getElementById('submit_dsc').className='unhidden';
  };
function startdscnt(){
    var userinputs =[];
    var inputs = document.getElementsByTagName("input");
    var selection = document.getElementsByTagName("select");
    for( i = 0; i < selection.length; i++){
        if(selection[i].value != ""){
            userinputs.push(selection[i].value);
        };
    };
    for(i = 0; i < inputs.length; i++){
        if(inputs[i].value != ""){
            userinputs.push(inputs[i].value);
        };
        
    };
    userinputs.push("go");
    console.log(userinputs);
    var params = {
        active :true,
        currentWindow: true
    };
    for( i=0; i < userinputs.length; i++){
        chrome.tabs.query(params,
            function gotTab(tabs){
                chrome.tabs.sendMessage(tabs[0].id, userinputs[i].value);
                console.log("sent message")
            }
        );
    }
    
}

function message(){

}
  
  var dscnt = document.getElementById("dscnt_list")
  dscnt.addEventListener("change",changeinput);
  document.getElementById("submit_dsc").addEventListener("click", startdscnt);