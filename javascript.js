function validateForm()
{     var count;
    var x=document.forms["myform"]["VisitorMobile"].value;
  no = x.toString().length;
   if (no == 0) {
    alert("Please Enter your Mobile No.");
    return false;
  }
  else if (no< 10 || no > 10) {
    alert("Mobile No  is not valid, Please Enter 10 Digit Mobile No");
    return false;
  }


  var x=document.forms["myform"]["VisitorrName"].value;
    if(x==null || x=="" )
    {
        alert("name can't be left blank");
        return false;
    }


   var x=document.forms["myform"]["Message"].value;
    if(x==null || x=="" )
    {
        alert("Please leave a Message");
        return false;
    }



  else
    {
      alert("thank you");
      return false;
    }
}
function goBack() {
  window.history.back();
}
