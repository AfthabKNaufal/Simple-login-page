$( document ).ready(function() {
src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min.js";
var mail_check=0;
var address_check=0;
var age_check=0;
var pass_check =0;
var confirm_check=0;
var gender_check=0;
var name_check=0;

$("#address").keyup(function(){
    var address_input= $(this).val();
    console.log(address_input);
     var length_address = address_input.length;
    if(address_input=='')
    {
        $("#out_address").empty();
        $("#out_address").show();
        $("#out_address").append("Address field should not be black");
    //  alert("Address should not be blank");
    }
    else if (length_address<10)
    {
        $("#out_address").empty();
        $("#out_address").show();
        $("#out_address").append("Address should contain minimum 10 characters ");
    //  alert("address should contain minimum 10 length")
    }
    else
    {
     address_check+=1;
     console.log("address=",address_check)
     $("#out_address").hide();   
    }
    
 })

$("#name").change(function(){
    var name = $(this).val().length;
    console.log(name)
    
    if (name<3)
    {
        $("#out").empty();
        $('#out').show()
        $("#out").append(" Name should contain minimum 3 character ");
        name_check=0;
        //console.log("minimum 3 digit");

    }
    else
    {
        name_check+=1;
        $("#out").fadeOut("slow");   
    }
    //console.log("name",name_check);
})

$("#email").change(function(){
    var email=$("#email").val();
    console.log(email);
    var out=isemail(email)
    if(out==false)
    {
        $("#out_mail").empty();
        $("#out_mail").show();
        $("#out_mail").append("Enter a valid mailid");
        mail_check=0;
    }
    else
    {
        //alert("Valid email")
        mail_check+=1;
        $("#out_mail").fadeOut("slow"); 
    }
    console.log("mail",mail_check)
})



function isemail(email)
{
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(!regex.test(email))
    {
        return false;
    }
    else{
        return true;
    }
}


$("#DOB").change(function(){

        var input = new Date($(this).val());
        var dob_year = input.getFullYear();
        var current = new Date();
        var today_year = current.getFullYear();
        //console.log(today_year)
        var age = today_year-dob_year;
        if (age<18){
            $("#out_birth").empty();
            $("#out_birth").show();
            $("#out_birth").append("Age must be above 18");
            age_check=0;
        }
        else{
        //console.log(age);
            $("#out_birth").hide();
            dob_month= input.getMonth();
            today_month = current.getMonth();
        //console.log(today_month);
            var month_diff = today_month-dob_month;

            if (month_diff<0 || month_diff==0 && (current.getDate()<input.getDate()))
            {
            age--;
            $("#Age").val(age);
            age_check+=1;
            //console.log(age_check);
            }
            else
            {
            
            age_check=0;
            //console.log(age_check);
            }
    }
})

$("#gender").change(function(){
    var value = $(this).val();
    console.log(value);
    if (value=="male"||value=="female")
    {
        $("#out_gender").hide();
        gender_check+=1;
    }
    else
    {
        $("#out_gender").empty();
        $("#out_gender").show();
        $("#out_gender").append("Choose a gender")
        gender_check=0;

    }
    console.log(gender_check)
})


$("#password").change(function(){

    let value=[];
    var password_input = $(this).val();
    var pass_len = password_input.length;
    var i;
    var lower=0;
    var upper=0;
    var special=0;
    var number=0;
    for (i=0;i<pass_len;i++)
    {
        if(password_input.charAt(i)>="a" && password_input.charAt(i)<="z")
        {
            lower=lower+1;
        }
        else if (password_input.charAt(i)>="A" && password_input.charAt(i)<="Z")
        {
            upper+=1;
        }
        else if ((password_input.charAt(i)>="!"&& password_input.charAt(i)<="/") || (password_input.charAt(i)>=":" && password_input.charAt(i)<="@"))
        {
            special+=1;
        }
        else if (password_input.charAt(i).match(/\d+/g))
        {
            number+=1;
        }
      
    }
        console.log(lower,upper,special,number,pass_len)


    if (lower!=0 && upper!=0 && special!=0 && number!=0 && pass_len>8)
    {
        pass_check+=1;
        var confirm_input = $("#confirm").val();
        console.log(confirm_input);
        $("#out_pass").hide();
       
        if (confirm_input==password_input && confirm_input!="")
        {
        console.log("ok");
        pass_check+=1;
        $("#out_confirm").empty();
        $("#out_confirm").append("password match");
        $("#out_pass").hide();
        console.log(pass_check);
        
       
        }
        else{
            $("#out_confirm").empty();
            pass_check=0;
            $("#out_confirm").append("password does not Match")}
    }
    else
    {
        $("#out_pass").empty();
            $("#out_pass").show();
            $("#out_pass").append("Password Must contain at least one number, one uppercase, lowercase letter, special characters, and at least 8 or more characters.")
            pass_check=0;
    }

})




$("#confirm").keyup(function(){

    var confm_pass = $(this).val();
    var old_pass = $("#password").val();
    if(confm_pass==old_pass)
    {
        $("#out_confirm").empty()
        $("#out_confirm").append("Password match")
        confirm_check+=1;
        pass_check+=1;
        //console.log(confirm_check);
    }
    else
    {
        $("#out_confirm").empty()
        $("#out_confirm").append("Password does not match")
        confirm_check=0;
    }

})

$("#eye").click(function(){
    $(this).toggleClass("fa-eye fa-eye-slash");
    var pass= $("#password")
    if(pass.attr('type')=='password')
    {
        pass.attr('type','text');
    }
    else
    {
        pass.attr('type','password');
    }


})



$("#eye1").click(function(){
    $(this).toggleClass("fa-eye fa-eye-slash");
    var pass= $("#confirm")
    if(pass.attr('type')=='password')
    {
        pass.attr('type','text');
    }
    else
    {
        pass.attr('type','password');
    }


})





$(".login_button").click(function(){

    console.log(name_check,mail_check,address_check,pass_check,confirm_check);
    if (name_check!=0 && mail_check!=0 && address_check!=0 && pass_check!=0 && confirm_check!=0 &&gender_check!=0 && age_check!=0)
    {
        $("#final").hide();
        window.location.href="https://www.cybrosys.com/"
        
    }
    else
    {
        $("#modal").fadeIn();
    }
  
    

})

$("#close_modal").click(function(){
    $("#modal").hide();
})



})
