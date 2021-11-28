// Compute function calculates the Simple Interest 
// given the Principal, Rate of Interest and No. of Years
function compute(){
    // Fetch the User Input
    var p = document.getElementById("principal");
    var principal = p.value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Computation of Simple Interest I = P*(r/100)*t
    var interest = principal * 0.01 * rate * years;
    
    // Test the type of variables
    console.log(typeof(principal));
    console.log(typeof(rate));
    console.log(typeof(years));
    console.log(typeof(interest));
    
    // Calculate the year from the number of years selected
    var date = new Date();
    var current_year = date.getFullYear();
    var year = current_year + parseInt(years);
    // Test the Year calculated
    console.log(typeof(year));
    
    // Set Flag for Input Validation  of Principal
    var showResult = true;

    // Input Validation for Principal Input Field
    if(principal <= 0){
        alert("Enter a positive number");   // Alert about Invalid Input
        p.focus();                          // Focus back to the Principal Input Field
        p.value="";                         // Clear the Principal Input Field
        var showResult = false;             // Set Flag to False
    }

    // Show the Result of Compute Function if Input Validation is successful
    if(showResult == true){
        document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal.bold()+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate.bold()+"%,\</mark\>\<br\>You will receive an amount of \<mark\>"+interest.toString().bold()+"\</mark\>,\<br\>in the year \<mark\>"+year.toString().bold()+"\</mark\> \<br\>"
    }
    else{
        // Display an empty string if Input Validation is not successful
        document.getElementById("result").innerHTML="";
    }

}
    
// showRate() Function displays the Interest Rate selected 
// based on the user input in the Range Input field
function showRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML = rateval;
}
