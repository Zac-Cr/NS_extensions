var messageArray=[];

function changeinput(){ 
  console.log("changed input")
  var rmainpt = document.getElementById("rma");
  var labelinpt = document.getElementById('label');
  var backinpt = document.getElementById('bckorder');
  var vendorinpt = document.getElementById('vendor');
  document.getElementById('submit').className='hddn';
  rmainpt.className="hddn";
  labelinpt.className='hddn';
  backinpt.className="hddn";
  vendorinpt.className="hddn";
    switch(ext.value){
      case "rma_free":
        rmainpt.className ="unhidden";
        labelinpt.className ="unhidden";
        break;
      case "auth":
        break;
      case 'rma_cust':
        rmainpt.className ="unhidden";
        break;
      case 'rma_stnd':
      rmainpt.className ="unhidden";
      labelinpt.className ="unhidden";
      break;
      case 'backorder':
        backinpt.className="unhidden";
        vendorinpt.className="unhidden";
        break;
      case '':
        document.getElementById('submit').className='hddn';
        break;
      }
  document.getElementById('submit').className='unhidden';
};
  // var params ={
  //   active: true,
  //   currentWindow: true
  // }

  // chrome.tabs.query(params,getinputval); 

function getinputval(){
  messageArray.push(ext.value);
  var length = inpt.length;
   for(i=0; i < length; i++){
    if(inpt[i].value != ""){
      messageArray.push(inpt[i].value);
      console.log("chromemessage if statement");
    };
  };
  messageArray.push('getmessage');
  chromemessage();
  console.log(messageArray);
};

function chromemessage(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    messageArray.forEach(element => {
      chrome.tabs.sendMessage(tabs[0].id,element);
    });
  });
  console.log("chromemessage called")
};


var ext= document.getElementById("rspns_list");
ext.addEventListener("change",changeinput);
var inpt = document.getElementsByTagName('input');
document.getElementById('submit').addEventListener('click', getinputval);


// sending array to chrom
// https://stackoverflow.com/questions/56532745/how-do-i-send-an-array-from-a-content-script-to-a-popup-script