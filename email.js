// document.getElementsByClassName('public_draftStyleDefault-block')[0].innerHTML;
// this set the email message.
// this so far does eveything that i can find changes when text is input but crashes if you try to edit anything

function createenviron(){
    // Delets the placeholder
    var parentplace = document.getElementsByClassName("public-DraftEditorPlaceholder-root");
    var childplace = parentplace[0].children;
    childplace[0].remove();
    parentplace[0].remove();
    // Deletes the br tag
    var parent = document.getElementsByClassName("public-DraftStyleDefault-block");
    var childbr = parent[0].children;
    var removebr = childbr[0].children;
    removebr[0].remove();
    // Addes the span tag
    var childspan = document.createElement("span");
    var att = document.createAttribute('data-text');
    att.value = "true";
    childspan.innerHTML = "hey";
    childspan.setAttribute('data-text', 'true');
    childbr[0].appendChild(childspan);
};


// global declarations

// Calling Check
console.log("email.js")