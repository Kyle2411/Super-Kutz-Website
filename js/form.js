
let idError = true;
let unameError = true;
let fnameError = true;
let lnameError = true;
let pwordError = true;
let dobError = true;
let locationError = true;
let appointmentError = true;
let phoneError = true;
let emailError = true;
let cityError = true;
let streetError = true;
let provinceError = true;
let postalError = true;

$(document).ready(function () {
    

    //ID//

        $('#idcheck').hide();   
        idError = false;
        $('#id2').keyup(function () {
            validateId();
        });
         
        function validateId() {

           
          let idValue = $('#id2').val();
          
        
          if (idValue.length == '') {
          $('#idcheck').show();
          $('#idcheck').html
    ("**Please enter a value!");
          
              idError = false;
              
              return false;
          }
          
          else if(!Boolean(idValue.charAt(0).match(/[a-zA-Z]/)) || !Boolean(idValue.charAt(1).match(/[a-zA-Z]/)) || !Boolean(idValue.charAt(2).match(/[a-zA-Z]/))) {
              $('#idcheck').show();
              $('#idcheck').html
    ("<br>**id must begin with 3 letters!");
    
                idError = false;
                
              return false;
          }
          else if (!idValue.charAt(3).match(/\./)) {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**3 letters must be followed by dot!");
              idError = false;
            return false;
             
          }

          else if (!Boolean(idValue.charAt(4).match(/^\d+$/)) || !Boolean(idValue.charAt(5).match(/^\d+$/)) || !Boolean(idValue.charAt(6).match(/^\d+$/))) {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**dot must be followed by 3 numbers!");
              idError = false;
            return false;
             
          }

          else if (!idValue.charAt(7).match(/\./)) {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**3 numbers must be followed by dot!");
              idError = false;
            return false;
             
          }      

          
          else if (!Boolean(idValue.charAt(8).match(/^\d+$/))) {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**dot must be followed by up to 4 numbers!");
              idError = false;
            return false;
             
          }

        
          else if (!Boolean(idValue.charAt(9).match(/^\d+$/)) && idValue.charAt(9) != '') {
            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**dot must be followed by up to 4 numbers!");
              idError = false;
            return false;
             
          }

          else if (!Boolean(idValue.charAt(10).match(/^\d+$/)) && idValue.charAt(10) != '') {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**dot must be followed by up to 4 numbers!");
              idError = false;
            return false;
             
          }

          
          else if (!Boolean(idValue.charAt(11).match(/^\d+$/)) && idValue.charAt(11) != '') {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**dot must be followed by up to 4 numbers!");
              idError = false;
            return false;
             
          }

          else if (idValue.length > 12) {

            $('#idcheck').show();
            $('#idcheck').html
  ("<br>**number cannot be greater than 12 digits!");
              idError = false;
            return false;
        
            
          }

          else{

            $('#idcheck').hide();
            idError = true;
          
      
        }
    }

    
 
        //FirstName//

    $('#fnamecheck').hide();   
    fnameError = false;
    $('#fname2').keyup(function () {
        validateFirstName();
    });

     
    function validateFirstName() {

      let fnameValue = $('#fname2').val();
      let check = false;

      for(let i = 0 ;fnameValue.length > i; i++){

        if(!Boolean(fnameValue.charAt(i).match(/[a-zA-Z]/))){
            check = true;

        }

      }
      if (fnameValue.length == '') {
      $('#fnamecheck').show();
      $('#fnamecheck').html
      ("**Please enter a value!");
          fnameError = false;
          return false;
      }
      else if(check) {
          $('#fnamecheck').show();
          $('#fnamecheck').html
("<br>**first name must only be letters");
          fnameError = false;
          return false;
      }

      else if(fnameValue.length > 15) {
        $('#fnamecheck').show();
        $('#fnamecheck').html
("<br>**length of first name cannot exceed 15 characters");
        fnameError = false;
        return false;
    }
      else {
          $('#fnamecheck').hide();
          fnameError = true;
      }
    }
        //LastName//

$('#lnamecheck').hide();   
    lnameError = false;
$('#lname2').keyup(function () {
    validateLastName();
});
 
function validateLastName() {

    let lnameValue = $('#lname2').val();
    let check = false;

    for(let i = 0 ;lnameValue.length > i; i++){

      if(!Boolean(lnameValue.charAt(i).match(/[a-zA-Z]/))){
          check = true;

      }

    }
    if (lnameValue.length == '') {
    $('#lnamecheck').show();
    $('#lnamecheck').html
    ("<br>**Please enter a value!");
        lnameError = false;
        return false;
    }
    else if(check) {
        $('#lnamecheck').show();
        $('#lnamecheck').html
("<br>**last name must only be letters");
        lnameError = false;
        return false;
    }

    else if(lnameValue.length > 25) {
      $('#lnamecheck').show();
      $('#lnamecheck').html
("<br>**length of last name cannot exceed 25 characters");
      lnameError = false;
      return false;
  }
    else {
        $('#lnamecheck').hide();
        lnameError = true;
    }
  }

  ///UsernName///



  $('#unamecheck').hide();
  unameError = false;
  $('#uname2').keyup(function () {
      validateUsername();
  });
   
  function validateUsername() {
    let unameValue = $('#uname2').val();

    let check = false;

    for(let i = 0 ;unameValue.length > i; i++){

      if(!Boolean(unameValue.charAt(i).match(/[a-zA-Z]/))){
          check = true;

      }

    }


    if (unameValue.length == '') {
        
    $('#unamecheck').show();
    $('#unamecheck').html
    ("**The username is required!");
        unameError = false;
        return false;
    }

    else if(check) {
$('#unamecheck').show();
$('#unamecheck').html
("**username can only be letters1");
unameError = false;
return false;
}

    else if(unameValue.length < 6) {
        $('#unamecheck').show();
        $('#unamecheck').html
("**length of username must be greater than 6");
        unameError = false;
        return false;
    }

    else if(unameValue.length > 10) {
        $('#unamecheck').show();
        $('#unamecheck').html
("**length of username cannot be greater than 10");
        unameError = false;
        return false;
    }

    else {
        $('#unamecheck').hide();
        unameError = true;
    }
}



//////PASSWORDS//////


$('#pwordcheck').hide();
pwordError = false;
$('#pword2').keyup(function () {
    validatePassword();
});


 
function validatePassword() {
  let pwordValue = $('#pword2').val();

  let digit = 0
  let lowerChar = 0
  let upperChar = 0;
  let special = 0;

  for(let i = 0 ;pwordValue.length > i; i++){

    if(Boolean(pwordValue.charAt(i).match(/^\d+$/))){
        digit++

    }

    if(Boolean(pwordValue.charAt(i).match(/[a-z]/))){
        lowerChar++;

    }

    if(Boolean(pwordValue.charAt(i).match(/[A-Z]/))){
        upperChar++;

    }

    if(Boolean(pwordValue.charAt(i).match(/\W|_/g))){
        special++;

    }

  }

  if (pwordValue.length == '') {
      
  $('#pwordcheck').show();
  $('#pwordcheck').html
  ("**The password is required!");
  pwordError = false;
      return false;
  }



  else if(pwordValue.length < 6) {
      $('#pwordcheck').show();
      $('#pwordcheck').html
("**length of password must be greater than 6");
pwordError = false;
      return false;
  }

  else if(digit < 2) {
    $('#pwordcheck').show();
    $('#pwordcheck').html
    ("**password must contain at least 2 numbers");
    pwordError = false;
    return false;
    }

    else if(lowerChar < 2) {
        $('#pwordcheck').show();
        $('#pwordcheck').html
        ("**password must contain at least 2 lower case letters");
        pwordError = false;
        return false;
        }

        else if(upperChar < 1) {
            $('#pwordcheck').show();
            $('#pwordcheck').html
            ("**password must contain at least 1 upper case letters");
            pwordError = false;
            return false;
            }

            else if(special < 1) {
                $('#pwordcheck').show();
                $('#pwordcheck').html
                ("**password must contain at least 1 special character");
                pwordError = false;
                return false;
                }

  else if(pwordValue.length > 8) {
      $('#pwordcheck').show();
      $('#pwordcheck').html
("**length of password cannot be greater than 8");
pwordError = false;
      return false;
  }

  else {
      $('#pwordcheck').hide();
      pwordError = true;
  }
}

//////Gender////

// $('#gendercheck').hide();
// let genderError = true;
// $('#gender2').keyup(function () {
//     //validateGender();
// });



//////DATEOFBIRTH///////

$('#dobcheck').hide();
dobError = false;
$('#dob2').keyup(function () {

});


//////LOCATION///////


$('#locationcheck').hide();
locationError = false;

   // validateLocation();


 



/////////APPOINTMENT.////////////


$('#appointmentcheck').hide();
appointmentError = false;
$('#appointment2').keyup(function () {
    //validateAppointment();
});
// $('#checkbox').is(':checked'); 


 

/////////EMAIL////////////


$('#emailcheck').hide();   
emailError = false;
$('#email2').keyup(function () {
    validateEmail();
});
 
function validateEmail() {

    let emailValue = $('#email2').val();
    let check = false;

    if (emailValue.length == '') {
    $('#emailcheck').show();
    $('#emailcheck').html
    ("**Please enter a value!");
        emailError = false;
        return false;
    }
    else if(!Boolean(emailValue.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))) {
        $('#emailcheck').show();
        $('#emailcheck').html
("**must be correct email format");
        emailError = false;
        return false;
    }

    else {
        $('#emailcheck').hide();
        emailError = true;
    }
  }

/////////PHONE////////////

$('#phonecheck').hide();   
    phoneError = false;
$('#phone2').keyup(function () {
    validatePhone();
});

 
function validatePhone() {

    phoneValue = $('#phone2').val();
    let check = false;
    
    if (phoneValue.length == '') {
    $('#phonecheck').show();
    $('#phonecheck').html
    ("**Please enter a value!");
        phoneError = false;
        return false;
    }
    else if(!Boolean(phoneValue.match(/^(\([0-9]{3}\))[0-9]{3}-[0-9]{4}$/))){
        $('#phonecheck').show();
        $('#phonecheck').html
("**must be correct phone number format");
        phoneError = false;
        return false;
    }

    else {
        $('#phonecheck').hide();
        phoneError = true;
    }
  }


/////////STREET//////////


$('#streetcheck').hide();   
    streetError = false;
$('#street2').keyup(function () {
    validateStreet();
});

 
function validateStreet() {

    let streetValue = $('#street2').val();

    if (streetValue.length == '') {
    $('#streetcheck').show();
    $('#streetcheck').html
    ("**Please enter a value!");
        streetError = false;
        return false;
    }


    else {
        $('#streetcheck').hide();
        streetError = true;
    }
  }

/////////CITY//////////

$('#citycheck').hide();   
    cityError = false;
$('#city2').keyup(function () {
    validateCity();
});

function validateCity() {

    let cityValue = $('#city2').val();
    let digit = false;
    
    for(let i = 0 ;cityValue.length > i; i++){
    if(Boolean(cityValue.charAt(i).match(/^\d+$/))){
        digit = true;

    }
}
    if (cityValue.length == '') {
    $('#citycheck').show();
    $('#citycheck').html
    ("**Please enter a value!");
    cityError = false;
        return false;
    }
    else if(digit){
        $('#citycheck').show();
        $('#citycheck').html
("**City cannot contain digits");
        citytError = false;
        return false;
    }

    else {
        $('#citycheck').hide();
        cityError = true;
    }
  }

/////////PROVINCE//////////

$('#provincecheck').hide();   
    provinceError = false;
$('#province2').keyup(function () {
    validateProvince();
});

function validateProvince() {

    let provinceValue = $('#province2').val();
    let digit = false;
    
    for(let i = 0 ;provinceValue.length > i; i++){
    if(Boolean(provinceValue.charAt(i).match(/^\d+$/))){
        digit = true;

    }
}
    if (provinceValue.length == '') {
    $('#provincecheck').show();
    $('#provincecheck').html
    ("**Please enter a value!");
    provinceError = false;
        return false;
    }
    else if(digit){
        $('#provincecheck').show();
        $('#provincecheck').html
("**Province cannot contain digits");
provinceError = false;
        return false;
    }

    else {
        $('#provincecheck').hide();
        provinceError = true;
    }
  }

/////////POSTAL//////////

$('#postalcheck').hide();   
    postalError = false;
$('#postal2').keyup(function () {
    validatePostal();
});

function validatePostal() {

    let postalValue = $('#postal2').val();
    let digit = false;
    

    if (postalValue.length == '') {
    $('#postalcheck').show();
    $('#postalcheck').html
    ("**Please enter a value!");
    postalError = false;
        return false;
    }

    else if(!Boolean(postalValue.match(/^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/))){
        $('#postalcheck').show();
        $('#postalcheck').html
("**must be correct postal format");
        postalError = false;
        return false;
    }

    else {
        $('#postalcheck').hide();
        postalError = true;
    }
  }

});

function validateForm(){
    
    
    if(!document.getElementById("laval2").checked && !document.getElementById("montreal2").checked && !document.getElementById("Lasalle2").checked){
 
         locationError = false;
         
     }
     else{
 
         locationError = true;

     }

     if(!document.getElementById("morning2").checked && !document.getElementById("evening2").checked && !document.getElementById("backtoback2").checked && !document.getElementById("no2").checked){
 
        appointmentError = false;
        
    }
    else{

        appointmentError = true;
    }

    if($("#dob2").val() == ''){
 
        dobError = false;
        
    }
    else{

        dobError = true;
    }

let countError = 0;

  if(!idError || !fnameError|| !lnameError|| !unameError || !pwordError || !dobError || !locationError || !appointmentError || !phoneError || !emailError || !cityError || !streetError || !provinceError || !postalError){
      
    if(!idError){
        $('#idcheck').show(); 
        document.getElementById("id").style.color = "red";
        document.getElementById("id2").style.border="2px solid red";
        countError++; 
        }

        else{
            document.getElementById("id").style.color = "green";
            document.getElementById("id2").style.border="2px solid green";

        }
        if(!fnameError){
        $('#fnamecheck').show();  
        document.getElementById("fname").style.color = "red";
        document.getElementById("fname2").style.border="2px solid red";
        countError++; 
        }

        else{

        document.getElementById("fname").style.color = "green";
        document.getElementById("fname2").style.border="2px solid green";
        }
        if(!lnameError){
        $('#lnamecheck').show();  
        document.getElementById("lname").style.color = "red";
        document.getElementById("lname2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("lname").style.color = "green";
        document.getElementById("lname2").style.border="2px solid green";
        }
        if(!unameError){
        $('#unamecheck').show();  
        document.getElementById("uname").style.color = "red";
        document.getElementById("uname2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("uname").style.color = "green";
        document.getElementById("uname2").style.border="2px solid green";
        }
        if(!pwordError){
        $('#pwordcheck').show();  
        document.getElementById("pword").style.color = "red";
        document.getElementById("pword2").style.border="2px solid red";

        countError++; 
        }
        else{

            document.getElementById("pword").style.color = "green";
        document.getElementById("pword2").style.border="2px solid green";
        }
        if(!dobError){
        $('#dobcheck').show();  
        document.getElementById("dob").style.color = "red";
        document.getElementById("dob2").style.border="2px solid red";
        countError++; 
        }
        else{
            $('#dobcheck').hide();  
            document.getElementById("dob").style.color = "green";
        document.getElementById("dob2").style.border="2px solid green";
        }
        if(!locationError){
        $('#locationcheck').show(); 
        document.getElementById("location").style.color = "red";
        countError++; 
        }
        else{
            $('#locationcheck').hide();  
        document.getElementById("location").style.color = "green";
        }
        if(!appointmentError){
        $('#appointmentcheck').show(); 
        document.getElementById("appointment").style.color = "red";
        countError++; 
        }
        else{
            $('appointmentncheck').hide();  
            document.getElementById("appointment").style.color = "green";
        }
        if(!phoneError){
        $('#phonecheck').show();
        document.getElementById("phone").style.color = "red"; 
        document.getElementById("phone2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("phone").style.color = "green";
        document.getElementById("phone2").style.border="2px solid green";
        }
        if( !emailError){
        $('#emailcheck').show();
        document.getElementById("email").style.color = "red"
        document.getElementById("email2").style.border="2px solid red";;
        countError++; 
        }
        else{

            document.getElementById("email").style.color = "green";
        document.getElementById("email2").style.border="2px solid green";
        }
        if(!cityError){
        $('#citycheck').show();
        document.getElementById("city").style.color = "red";
        document.getElementById("city2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("city").style.color = "green";
        document.getElementById("city2").style.border="2px solid green";
        }
        if(!streetError){
        $('#streetcheck').show(); 
        document.getElementById("street").style.color = "red";
        document.getElementById("street2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("street").style.color = "green";
        document.getElementById("street2").style.border="2px solid green";
        }
        if(!provinceError){
        $('#provincecheck').show(); 
        document.getElementById("province").style.color = "red";
        document.getElementById("province2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("province").style.color = "green";
        document.getElementById("province2").style.border="2px solid green";
        }
        if(!postalError){
        $('#postalcheck').show();
        document.getElementById("postal").style.color = "red";
        document.getElementById("postal2").style.border="2px solid red";
        countError++; 
        }
        else{

            document.getElementById("postal").style.color = "green";
        document.getElementById("postal2").style.border="2px solid green";
        }

    let mainContainer = document.getElementById("myH2");
    
        function testId(){

            if(!idError){
            let ide = '';
            return ide = `You must fill in your username`;
            }

            else{
            return ide = '';

            }
        }

        function testFname(){

            if(!fnameError){
            let fnamee = '';
            return fnamee = `You must fill in your firstname`;
            }

            else{

                return fnamee = '';
    
                }
        }

        function testLname(){

            if(!lnameError){
            let lnamee = '';
            return lnamee = `You must fill in your lastname`;
            }

            else{
                return lnamee = '';
    
                }
        }

        function testUname(){

            if(!unameError){
            let unamee = '';
            return unamee = `You must fill in your username`;
            }

            else{
                return unamee = '';
    
                }
        }
        function testPword(){

            if(!pwordError){
            let pworde = '';
            return pworde = `You must fill in your password`;
            }

            else{
                return pworde = '';
    
                }
        }

        function testDob(){

            if(!dobError){
            let dobe = '';
            return dobe = `You must fill in your date of birth`;
            }
            else{
                return dobe = '';
    
                }
        }
        function testLocation(){

            if(!locationError){
            let locatione = '';
            return locatione = `You must fill in your location`;
            }

            else{
                return locatione = ``;
    
                }
        }
        function testAppointment(){

            if(!appointmentError){
            let appointmente = '';
            return appointmente = `You must fill in your appointment`;
            }

            else{
                return appointmente = '';
    
                }
        }
        function testPhone(){

            if(!phoneError){
            let phonee = '';
            return phonee = `You must fill in your phone`;
            }

            else{
                return phonee = '';
    
                }
        }
        function testEmail(){

            if(!emailError){
            let emaile = '';
            return emaile = `You must fill in your email`;
            }

            else{
                return email = '';
    
                }
        }
        function testCity(){

            if(!cityError){
            let citye = '';
            return citye = `You must fill in your city`;
            }

            else{
                return citye = '';
    
                }
        }
        function testStreet(){

            if(!streetError){
            let streete = '';
            return streete = `You must fill in your street`;
            }

            else{
                return streete = '';
    
                }
        }
        function testProvince(){

            if(!provinceError){
            let provincee = '';
            return provincee = `You must fill in your province`;
            }

            else{
                return provincee = '';
    
                }
        }
        function testPostal(){

            if(!postalError){
            let postale = '';
            return postale = `You must fill in your postal`;
            }

            else{
                return provincee = '';
    
                }
        }

    let content = ` Error, sorry your form is invalid. <br><br> ${countError} errors prevented this registration from from being submitted <br><br> Please correct any errors below and try again! <br><br> 
    <ul id = 'ul1'>
    
    <li id = 'id1'>${testId()}</li>
    <li>${testFname()}</li>
    <li>${testLname()}</li>
    <li>${testUname()}</li>
    <li>${testPword()}</li>
    <li>${testDob()}</li>
    <li>${testLocation()}</li>
    <li>${testAppointment()}</li>
    <li>${testPhone()}</li>
    <li>${testEmail()}</li>
    <li>${testCity()}</li>
    <li>${testStreet()}</li>
    <li>${testProvince()}</li>
    <li>${testPostal()}</li>

  </ul> ` ;


       mainContainer.innerHTML = content;
       document.getElementById("myH2").style.font = "14px Arial, sans-serif";
       document.getElementById("myH2").style.backgroundColor = "red";

   
  }
  else{

  
       
      
        let mainContainer = document.getElementById("myH2");
        
        let content = ` Success your From is valid   `;
    
        
           mainContainer.innerHTML = content;
           document.getElementById("myH2").style.font = "14px Arial, sans-serif";
           document.getElementById("myH2").style.backgroundColor = "green";
           
    
       
}

}

function resetForm(){

location.reload();

}

function changeLablelColor(){


}

function showErrors(){


}
function showSuccess(){


}