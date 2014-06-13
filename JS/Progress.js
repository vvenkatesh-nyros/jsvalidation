
/*username validation for progressbar*/

function uservalid1()
{

   var p=document.forms["myForm"]["uname"].value;
   var uname= /^[a-zA-Z][a-zA-Z0-9]{5,8}$/;
   if(p.match(uname))
   {
  
      return true;
   }  
  else if(p == null || p == "" || p.length==0)
   {   

     
     return false;
   }
   else
   {
   
  
	  return false;
   }


}



/*Password validation for progressbar*/

function passvalid1()
{
  var p=document.forms["myForm"]["pwd"].value;
  var pwd= /^[a-zA-Z0-9]{6}$/;
  if(p.match(pwd))
  {
   
   return true;
  }  
  else  if(p == null || p == "")
  {   
   
   return false;  
  }  
  else  
  {   

  
   return false;  
  }  


}



/*First validation for progressbar*/

function firstvalid1()
{


  var p=document.forms["myForm"]["fname"].value;
  var fname= /^[a-zA-Z]{2,6}$/;
  if(p.match(fname))
   {
   
     return true;
   }  

  else  if(p == null || p == "")
   {   

    return false;  
   }  
  else  
  {   

  return false;  
   }  


}



/*Lastname validation for progressbar*/

function lastvalid1()
{
     var p=document.forms["myForm"]["lname"].value;
     var lname= /^[a-zA-Z]{2,15}$/;
     if(p.match(lname))
     {
        return true;
     }  
     else  if(p == null || p == "")
     {   

       return false;  
    }  
    else  
    {   

      
      return false;  
    }  
 

}




/*Profile pic validation for progressbar*/
function profilevalid1()
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
    
       return false;
    } 

    else if(p.match(pic1) || p.match(pic2) || p.match(pic3)|| p.match(pic4) || p.match(pic5) || p.match(pic6) || p.match(pic7) || p.match(pic8) )
   {

     return true;
   }
	 else
   {

		return false;
	 }

}






/*Date validation for progressbar*/
function dayvalid1()
{
        var p=document.forms["myForm"]["day"].value;

      if(p == null || p == "")
     {
 

       return false;
     }  
    else
    {
  
       return true;
    
    }

}






/*Month validation for progressbar*/

function monthvalid1()
{

   var p=document.forms["myForm"]["month"].value;

    if(p == null || p == "")
   {
  
   
      return false;
   }  
   else
   {
 
      return true;
   }

}




/*Year validation for progressbar*/

function yearvalid1()
{

   var p=document.forms["myForm"]["year"].value;
  if(p == null || p == "")
  {

    return false;
  }  
  else
  {

    return true;
  }


}


/*Hobbies validation for progressbar*/


function hobbvalid1()
{
     var p=document.forms["myForm"]["hobbies"].value;

     if(p == null || p == "")
    {

      return false;
    }  
   else
    {

      return true;
    
    }
}







/*country validation for progressbar*/
function counvalid1()
{

   var p=document.forms["myForm"]["countries"].value;

  if(p == null || p == "")
  {

  
    return false;
  }  
  else
  {
  
    return true;
  }


}





/*Phone number validation for progressbar*/
function phnovalid1()
{

  var p=document.forms["myForm"]["pno"].value;
  var phno= /^[+](\s)[0-9]{2}(\s)[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/;
   if(p.match(phno))
   {

        return true;
   }  

  else  if(p == null || p == "")
  {   

    
       return false;  
  }  
  else  
  {   
    
      return false;  
  }  


}






/*Count check for progressbar*/

function progress()
{

  var count=0;
 

  if(uservalid1()==false)
  {
      count=count+0;
     
  }
  else
  {
        
     count=count+9;
             
  }






  if(passvalid1()==false)
  {
     count=count+0;
     
  }
  else
  {
     count=count+9;

  }


 if(firstvalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }


if(lastvalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }




if(profilevalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }

         if(dayvalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }

         if(monthvalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }

         if(yearvalid1()==false){
     count=count+0;
     
   }
   else
   {
     count=count+9;
    }

         
if(hobbvalid1()==false)
  {
     count=count+0;
     
   }
   else{
     count=count+9;
         }
         
         if(counvalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }

       

  if(phnovalid1()==false){
     count=count+0;
     
   }
   else{
     count=count+9;
         }
   


  document.getElementById("myprogress").value=count; 

if(document.getElementById("myprogress").value==99)
{
  document.getElementById("header1").style.display="block";
}
else{
  document.getElementById("header1").style.display="none";
}

}
