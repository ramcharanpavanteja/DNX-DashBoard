let passphrase="hi iam ram charn";
console.log(passphrase.length)
let fourwords=passphrase.split(" ");
if(fourwords.length>3){
console.log("four words"+fourwords);
}
else{
    console.log("not matched");
}