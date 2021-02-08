function compute()
{
    //Get form values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Compute Interest Formula
    var interest = parseFloat(principal * years * rate / 100);

    // Compute Actual Year
    var actualyear = parseFloat(years) + 2021;

    // Form Validation for Principal Value
    if (principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else {

        // Display Results of Interest Calculation
        var resultId = document.getElementById("result");
        resultId.innerHTML = "<b>If you deposit <mark>" + principal + "</mark><br /> at an interest rate of <mark>" + rate + "%</mark> <br />" + "You will receive an amount of <mark>" + interest + "</mark>, <br> in the year <mark>" + actualyear + "</mark></b>";

    }
    
