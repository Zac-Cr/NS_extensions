function changeinput(){ 
    var custinpt = document.getElementById("cstm");
    custinpt.className= "hddn";
      switch(dscnt.value){
        case "cust_sat":
            custinpt.className= "unhidden";
            document.getElementById('submit_dsc').className='unhidden';

            break;
        case 'milit':
            custinpt.className ="unhidden";
            document.getElementById('submit_dsc').className='unhidden';

            break;
        case '':
            document.getElementById('submit_dsc').className='hddn';
            break;
        }
  };
function startdscnt(){
    var inputs = document.getElementById("cstm").value;
    var selection = document.getElementById("dscnt_list").value;
    userinputs.push(selection);
    userinputs.push(inputs);
    userinputs.push("go");
    console.log(userinputs);
    gettab();
};
function gettab(){
    var params = {
        active: true,
        currentWindow: true,
    }
    chrome.tabs.query(params, passmessage);
    function passmessage(tabs){
            chrome.tabs.sendMessage(tabs[0].id, userinputs)
            console.log(userinputs[i]);
    }
};


var userinputs =[];
var dscnt = document.getElementById("dscnt_list")
dscnt.addEventListener("change",changeinput);
document.getElementById("submit_dsc").addEventListener("click", startdscnt);