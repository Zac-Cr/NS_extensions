// allows for the options to be chosen
function changeinput(){ 
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
        document.getElementById('submit').className='unhidden';

        break;
      case "auth":
        document.getElementById('submit').className='unhidden';
  
      break;
      case "tire":
        document.getElementById('submit').className='unhidden';
  
      break;
      case 'rma_cust':
        rmainpt.className ="unhidden";
        document.getElementById('submit').className='unhidden';

        break;
      case 'rma_stnd':
      rmainpt.className ="unhidden";
      labelinpt.className ="unhidden";
      document.getElementById('submit').className='unhidden';

      break;
      case 'backorder':
        backinpt.className="unhidden";
        vendorinpt.className="unhidden";
        document.getElementById('submit').className='unhidden';

        break;
      case '':
        document.getElementById('submit').className='hddn';
        break;
      }
};

function getinputval(){
    document.getElementById('notice').className = 'unhidden';
    console.log("getinputval called")
    messageArray.push(ext.value);
    var length = inpt.length;
    for(i=0; i < length; i++){
        if(inpt[i].value != ""){
            messageArray.push(inpt[i].value);
        };
    };
    var messages={
    "rma_free" : `Hey!\n
    Return Number (RMA):${messageArray[1]}\n
    Label:${messageArray[2]}\n
    To return your order using our label, please write your RMA number on the outside of the package, print our UPS Return Label and drop your package at a UPS Facility or with a UPS Driver.
    \n
    Please let us know if you are having any problems viewing this label, we can resend it in a different format. If you cannot print your label, either bring up your label on a smartphone for the UPS store to scan and print there, or forward this email directly to your UPS store.\n
    Attention:\n
    * Our labels only work with UPS\n
    * This is a free and complimentary label\n
    * Returns typically take 1-5 business days to process once they arrive back to us, although they can take longer during peak times\n
    * Once your return has been processed, we will send you an email letting you know\n
    * All items should be in NEW and UNUSED condition. any sign of use or installation will be returned and charged\n
    The label has a tracking number included on it. Please note down this tracking number to keep track of your packages status!\n
    Thank you,\n
    `,
    "rma_cust" : `Hey!\n
    As stated in our return policy we do not pay for returns of an oversized item. The item you are trying to return is classified as oversized. If you would still like to return your product please get it shipped to\n
    295 Technology Drive\n
    Christiansburg, VA 24073-7383\n
    
    After we receive your product a full refund will be issued to your account. Make sure to put the RMA number on the label as well, your label should look like this\n
    ATTN RMA: ${messageArray[1]}\n
    295 Technology Drive\n
    Christiansburg, VA 24073-7383\n`,
    "rma_stnd" : `Hey!\n
    
    Return Number (RMA):${messageArray[1]}\n
    
    Label:${messageArray[2]}\n
    
    To return your order using our label, please write your RMA number on the outside of the package, print our UPS Return Label and drop your package at a UPS Facility or with a UPS Driver.
    Please let us know if you are having any problems viewing this label, we can resend it in a different format. If you cannot print your label, either bring up your label on a smartphone for the UPS store to scan and print there, or forward this email directly to your UPS store.
    
    Attention:\n
    * Our labels only work with UPS\n
    *  The included label is a charged $6.99 label. That total, plus any applicable tax, will be taken out of your total refund\n
    * Returns typically take 1-5 business days to process once they arrive back to us, although they can take longer during peak times\n
    * Once your return has been processed, we will send you an email letting you know\n
    
    The label has a tracking number included on it. Please note down this tracking number to keep track of your packages status!\n
    
    Thank you,\n`,
    "backorder" : `The items that are left are on a backorder. The estimated date of arrival from ${messageArray[2]} is ${messageArray[1]}. `,
    "auth" : `Sorry that you seem to have 2 charges on your account. The first charge that you see that is a few cents more then the total amount was the authorization made to make sure the card was good. Due to legal reasons we cannot take the money out of the account until the product is leaving our warehouse on its way to you. Because of this, you will see a second charge that will match the original total of the order. The authorization that was placed when the order was submitted will then drop off your account within a couple days of the items being shipped. If you order was sent in seperate shipments you will see a charge equal to the total of the items of that shipment.`,
    "tire": "The manufacturing date is stamped into each individual tire. All of our tire suppliers and manufacturers have statements on their individual websites describing how tires do not have an expiration date. We only sell and deliver tires based on the terms of the manufacturers.The primary cause of premature tire breakdown is exposure to the sun, and other extremes of hot and cold temperatures. Our tires are stored in an environmentally controlled warehouse, protected from the weather.We sell more tires than any other on-line motorcycle parts store on the web. Our stock is constantly rotating out with new deliveries arriving each week.I regret that it is not feasible for us to look at the manufacturing date of each tire before ordering or before shipping. We can not accept returns for tires only because the manufacturing date is older than what may be desired.All of our tires are covered by the manufacturer's warranty covering defects, regardless of the production date.If knowing the exact production date is important to you, I can only suggest looking at your local motorcycle shop so that you can read the production date on each tire. We all buy our tires from the same manufacturers and distributors. Our prices are usually better because of the high volume we sell, which rotates our inventory faster. It is very likely that our inventory of tires is newer than that of most local motorcycle shops."
  };
    coppiedtextglobal= messages[messageArray[0]];
    copyttext();
};

function copyttext(){
  console.log("coppyttex call")
  /* Get the text field */
  var copyText = document.createElement('textarea');
  copyText.value = coppiedtextglobal;
  copyText.setAttribute('id', "testing")
  document.body.append(copyText);
  var coppied = document.getElementById('testing');
  
  /* Select the text field */
  coppied.select();
  coppied.setSelectionRange(0, 99999); /*For mobile devices*/
  
  /* Copy the text inside the text field */
  document.execCommand("Copy");
  coppied.className= 'hddn';
};

var messageArray=[];
var ext= document.getElementById("rspns_list");
ext.addEventListener("change",changeinput);
var inpt = document.getElementsByTagName('input');
document.getElementById('submit').addEventListener('click', getinputval);
var coppiedtextglobal = "";

// sending array to chrom
// https://stackoverflow.com/questions/56532745/how-do-i-send-an-array-from-a-content-script-to-a-popup-script


//  