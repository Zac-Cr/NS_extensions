function unhide(){
    console.log(msshpslct.value);
    var orig = document.getElementById("orig_sale");
    var repl = document.getElementById("repl_sale");
    var auth = document.getElementById("return_auth");
    orig.className = "hddn";
    repl.className= "hddn";
    auth.className = "hddn";
    document.getElementById("submit_mssh").className = "hddn";
    switch(msshpslct.value){
        case 'wrng':
            orig.className = "unhidden"
            repl.className = "unhidden"
            auth.className = "unhidden"
            document.getElementById("submit_mssh").className = "unhidden";

            break;
        case 'shrt':
            orig.className = "unhidden";
            repl.className = "unhidden";
            auth.className = "unhidden"
            document.getElementById("submit_mssh").className = "unhidden";

            break;
        case 'ovr':
            orig.className = "unhidden";
            auth.className = "unhidden"
            document.getElementById("submit_mssh").className = "unhidden";

            break;
        case 'shplst':
            orig.className = "unhidden";
            repl.className = "unhidden";
            auth.className = "unhidden"
            document.getElementById("submit_mssh").className = "unhidden";

            break;
        case 'dmg':
            orig.className="unhidden";
            repl.className="unhidden";
            auth.className="unhidden";
            document.getElementById("submit_mssh").className = "unhidden";
            break;
        case '':
            orig.className = "hddn";
            repl.className = "hddn";
            auth.className = "hddn"
            document.getElementById("submit_mssh").className = "hddn";
            break;           
    };
};
function getmessage(){
    document.getElementById('notice').className = 'unhidden';
    messageArray.push(msshpslct.value);
    messageArray.push(document.getElementById("orig_sale").value);
    messageArray.push(document.getElementById("repl_sale").value); 
    messageArray.push(document.getElementById("return_auth").value); 
    var messages ={
        "wrng": `Misship-Wrong Item Sent\n
        SO: #${messageArray[1]}
        Replacement SO: #${messageArray[2]}
        Return Authorization: #${messageArray[3]}`,
        "shrt":`Misship-Shortship\n
        SO: #${messageArray[1]}
        Replacement SO: #${messageArray[2]}
        Return Authorization: #${messageArray[3]}`,
        "ovr":`Misship-Overship\n
        SO: #${messageArray[1]}
        Return Authorization: #${messageArray[3]}`,
        'shplst': `Misship-Shipper Lost\n
        SO: #${messageArray[1]}
        Replacement SO: #${messageArray[2]}
        Return Authorization: #${messageArray[3]}`,
        "dmg": `Misship-Damaged Item\n
        SO: #${messageArray[1]}
        Replacement SO: #${messageArray[2]}
        Return Authorization: #${messageArray[3]}`,
    }
    coppiedtextglobal= messages[messageArray[0]];
    copyttext();
}

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
var messageArray=[]
var coppiedtextglobal =""
var msshpslct = document.getElementById("msshp_lst");
msshpslct.addEventListener("change",unhide);
document.getElementById("submit_mssh").addEventListener('click', getmessage)