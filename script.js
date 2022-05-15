function ValidateForm() {
var x=document.forms["form1"]["ad"].value;
var y=document.forms["form1"]["email"].value;
var z=document.forms["form1"]["telefon"].value;
var t=document.forms["form1"]["mesaj"].value;
 
var phone = /^\d{10}$/;
var Kontrol = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
if(x==""){
    alert("Ad alanı boş bırakılamaz.");
    return false;
}
if(t==""){
    alert("Mesaj alanı boş bırakılamaz.");
    return false;
}
if (z.match(phone)) {
    
} else {
    alert("Geçerli bir telefon numarası giriniz.");
    return false;
}
if (y.match(Kontrol)) {
    return false;
} else {
    alert("E-Mail adresiniz geçersiz.");
    return false;
}

}