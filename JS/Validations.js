
function form_validate()
{

  if(uservalid()==false)
  {
	  return false;
  }
  
  if(passvalid()==false)
  {
    return false;
  }
  
  if(firstvalid()==false)
  {
    return false;
  }
  if(lastvalid()==false)
  {
    return false;
  }
  if(profilevalid()==false)
  {
    return false;
  }
 
  if(dayvalid()==false)
  {
    return false;
  }
  if(monthvalid()==false)
  {
    return false;
  }
  if(yearvalid()==false)
  {
    return false;
  }
  if(hobbvalid()==false)
  {
    return false;
  }
  if(counvalid()==false)
  {
    return false;
  }
  if(phnovalid()==false)
  {
    return false;
  }
  
  allFields();

     
}



/* user validation */

function uservalid()
{

  var p=document.forms["myForm"]["uname"].value;
  var uname= /^[a-zA-Z][a-zA-Z0-9]{5,8}$/;
  if(p.match(uname))
  {
    document.getElementById("im1").style.display="none";
     return true;

  }  
  else if(p == null || p == "" || p.length==0)
  {   
    
    alert('Enter User Name');
    document.myForm.uname.focus();
    document.getElementById("im1").style.display="block";
    return false;
  }
  else
  {
     alert('UserName must be alphanumeric with 5 to 8 characters') ;
     document.myForm.uname.focus();
     document.getElementById("im1").style.display="block";
	 return false;
  
  }


}



/* password validation */
function passvalid()
{
   var p=document.forms["myForm"]["pwd"].value;
   var pwd= /^[a-zA-Z0-9]{6}$/;
   if(p.match(pwd))
   {
     document.getElementById("im2").style.display="none";
     return true;
   }  
  else  if(p == null || p == "")
  {   
      alert('Enter Password') ;
      document.getElementById("im2").style.display="block";
      document.myForm.pwd.focus();
      return false;  
  }  
  else  
  {   
     alert('Enter password as alphanumeric of length 6 characters') ;
     document.myForm.pwd.focus();
     document.getElementById("im2").style.display="block";
     return false;  
  }  

}



/*firstname validation */

function firstvalid()
{


    var p=document.forms["myForm"]["fname"].value;
    var fname= /^[a-zA-Z]{2,6}$/;
    if(p.match(fname))
   {
     document.getElementById("im3").style.display="none";
     return true;
   }  
  else  if(p == null || p == "")
   {  

      alert('Enter FirstName');
      document.myForm.fname.focus();
      document.getElementById("im3").style.display="block";
      return false;  
   }  
  else  
   {   
      alert('Enter Firstname of length 2 to 6 characters') ;
      document.myForm.fname.focus();
      document.getElementById("im3").style.display="block";
      return false;  
   }  


}




/* lastname validation */

function lastvalid()
{
   var p=document.forms["myForm"]["lname"].value;
   var lname= /^[a-zA-Z]{2,15}$/;
   if(p.match(lname))
  {
    document.getElementById("im4").style.display="none";
    return true;
  }  
  else  if(p == null || p == "")
  { 

     alert('Enter Lastname') ;
     document.myForm.lname.focus();
     document.getElementById("im4").style.display="block";
     return false;  
   }  
 else  
  {  

    alert('Enter Lastname of length 2 to 15 characters ') ;
    document.myForm.lname.focus();
    document.getElementById("im4").style.display="block";
    return false;  
  }  


}




/*profilepic validation */

function profilevalid()
{
    var p=document.forms["myForm"]["pic"].value;
    var pic1=/.gif/;
    var pic2=/.jpg/;
    var pic3=/.jpeg/;
    var pic4=/.png/;
    var pic5=/.GIF/;
    var pic6=/.JPG/;
    var pic7=/.JPEG/;
    var pic8=/.PNG/;


    if(p == null || p == "")
   {
       alert("Upload your profile pic");
       document.myForm.pic.focus();
       document.getElementById("im5").style.display="block";
       return false;
   } 

   else if(p.match(pic1)||p.match(pic2) || p.match(pic3)|| p.match(pic4) || p.match(pic5) || p.match(pic6) || p.match(pic7) || p.match(pic8))
   {
      document.getElementById("im5").style.display="none";
      return true;
   }
  else
   {

     alert('upload only jpeg or jpg or png or gif format');
     document.myForm.pic.focus();
     document.getElementById("im5").style.display="block";
     return false;
   }

}




/*date validation */

function dayvalid()
{
     var p=document.forms["myForm"]["day"].value;

     if(p == null || p == "")
    {
      alert(" Select the date  you have born");
      document.myForm.day.focus();
      document.getElementById("im7").style.display="block";
      return false;
   }  
   else
   { 
  
      return true;
    
   }

}



/*month validation */

function monthvalid()
{

     var p=document.forms["myForm"]["month"].value;

      if(p == null || p == "")
    {
         alert(" Select the month you have born");
         document.myForm.month.focus();
         document.getElementById("im7").style.display="block";
         return 0;
    }  
    else
    {
 
         return true;
    }

}





/*Year validation */

function yearvalid()
{

       var p=document.forms["myForm"]["year"].value;

       if(p == null || p == "")
     {
         alert(" Select the year you have born");
         document.myForm.year.focus();
         document.getElementById("im7").style.display="block";
         return false;
     }  
     else
     {
          document.getElementById("im7").style.display="none";
          return true;
      }

}



/* Hobbie validation */

function hobbvalid()
{
      var p=document.forms["myForm"]["hobbies"].value;

     if(p == null || p == "")
   {
      alert("Select  one hobbie");
      document.getElementById("im8").style.display="block";
      return false;
   }  
   else
   {
        document.getElementById("im8").style.display="none";
        return true;
    
   }
}




/*Country validation */

function counvalid()
{

      var p=document.forms["myForm"]["countries"].value;

  if(p == null || p == "")
  {
       alert("Select the country ");
       document.myForm.countries.focus();
       document.getElementById("im9").style.display="block";
       return false;
  }  
  else
  {
       document.getElementById("im9").style.display="none";
       return true;
  }


}





/* Phone validation */
function phnovalid()
{

    var p=document.forms["myForm"]["pno"].value;
    var phno= /^[+](\s)[0-9]{2}(\s)[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/;
   if(p.match(phno))
   {
       document.getElementById("im10").style.display="none";
       return true;
   }  
   else  if(p == null || p == "")
   {   
        alert('Enter your Phone number') ;
        document.myForm.pno.focus();
        document.getElementById("im10").style.display="block";
        return false;  
   }  
  else  
   {   
        alert('Enter phone number in the format + 91 (000)-885-9894 ') ;
        document.myForm.pno.focus();
        document.getElementById("im10").style.display="block";
        return false;  
   }  

}




function allFields(){
	if(uservalid()==true && passvalid()==true && firstvalid()==true && lastvalid()==true && profilevalid()==true
		&& dayvalid()==true && monthvalid()==true && yearvalid()==true && hobbvalid()==true && counvalid()==true 
		&& phnovalid()==true)
    {
      var p=document.forms["myForm"]["uname"].value;
      alert("user name is"+p);
      return true;
    }

}
























































