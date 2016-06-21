/*
//step 1 - Using Camel Casing
    var someMonth;
    function theMonth
    currentMonth
    var summerMonth;
    myLibraryAFunction

//step 2 - literal expression examples
    var myAge = 21; // 21 is numeric literal
    var myName = "Stephanie Cancel"; //Stephanie Cancel is string literal
    var awesome = true; //true is a boolean literal
    var favoriteFood = null; //null is a null literal 

//step 3 - Complex/Variable Expressions
    var regNumber = yearCode + sysEntryNumber; //assuming that yearCode and sysEntryCode have already been defined
    var pracMath1 = 3 + (2 * 6) - 2;

//step 4 - Declaring Variables to Identifiers -Camel case and Hungarian Notation
    var strFirstName;
    var strLastName;
    var strAddress;
    var strCity;
    var strState;
    var numZipCode;
    var numYourAge;
    var strReferralSource;
    var boolMayWeContactYou; 

//step 5 - 3 ways for declaring and assigning value to variable

        //1st method - delaring variable identifier, then assigning value
    var strFirstName;
    strFirstName = "Stephanie";
    var strLastName;
    strLastName = "Cancel";
    var strAddress;
    strAddress = "2034 San Diego Ave";
    var strCity;
    strCity= "San Diego";
    var strState;
    strState = "California";
    var numZipCode;
    numZipCode = 92110;
    var numYourAge;
    numYourAge = 21;
    var strReferralSource;
    strReferralSource = "friend";
    var boolMayWeContactYou;
    boolMayWeContactYou = "true";

        //2nd method - declaring a variable and assigning a value
    var strFirstName = "Stephanie";
    var strLastName = "Cancel";
    var strAddress = "2034 San Diego Ave";
    var strCity = "San Diego";
    var strState = "California";
    var numZipCode = 92110;
    var numYourAge = 21;
    var strReferralSource = "friend";
    var boolMayWeContactYou = "true";


        //3rd method -- Relying on Hoisting to assign value before declaring a variable
    strFirstName = "Stephanie";
    var strFirstName;

    strLastName = "Cancel";
    var strLastName;

    var strAddress = "2034 San Diego Ave";
    var strAddress;

    strCity = "San Diego";
    var strCity;

    strState ="California";
    var strState;

    numZipCode = 92110;
    var numZipCode;

    numYourAge = 21;
    var numYourAge;

    strReferralSource = "friend";
    var strReferralSource;

    boolMayWeContactYou = "true";
    var boolMayWeContactYou;

//step 6
    var yearsMarried = 2;
    window.console.log("Josh and Rose have been married for " + yearsMarried + " years.") //number and string

    var isKnown = true;
    window.console.log("They know that the news is " + isKnown + "."); //boolean and string

    window.console.log(Number(true)); //boolean and number

//step 7 - Hoisting incorrectly to return undefined
    window.console.log(myName);
    var myName = "Stephanie Cancel";

//step 8 - Displaying quotes using backslash
        //var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I'm not sure //about the former."';
        //window.console.log(someString);      //This is incorrect

    var someString = "Who once said, \"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.\" ";
    window.console.log(someString);        //Corrected using backslash

//step 9 - Returns null and undefined
    var petCount = null;
    var fishCount;
    window.console.log(petCount,fishCount);

//step 10
    window.console.log(typeof "Animals", typeof 4, typeof false, typeof null, typeof middleName);

//step 11 - Use of concatenation operator within alert box
    alert("Hello " + "Stephanie Cancel" + ", welcome to the JavaScript class!");


//step 12 - substituting string literal with variable
    var name = "Stephanie Cancel";
    alert("Hello " + name + ", welcome to the JavaScript class!");

//step 13 - Using two variables in alert
    var name = "Stephanie Cancel";
    var course = "JavaScript";
    alert("Hello " + name + ", welcome to the " + course + " class!");


//step 14 - line break
    var name = "Stephanie Cancel";
    var course = "JavaScript";
    alert("Hello " + name + "." + "\nWelcome to the " + course + " class!");

//step 15 - Prompt for name value
    var name = prompt("What is your name?");

//step 16 - Prompt for course value
    var course = prompt("What class are you taking?");

//step 17
    var x;
    x = 10;
    var y;
    y = 20;
    window.console.log(x + y);

//step 18
    var x = 20;
    window.console.log(x + 20);
    
//step 19
    var x = 20;
    window.console.log(x * 5);

//step 20
    var x = 20 % 3;
    window.console.log(x / 1);
    
//step 21
    var lifeSpan = 70;
    var yearsLived = 70;
    window.console.log(lifeSpan==yearsLived);

//step 22
    var lifeSpan = 70;
    var yearsLived = "TBD";
    window.console.log(lifeSpan===yearsLived);

//step 23
    var widget = new Object();
    window.console.log(typeof widget);

//step 24
    var widget = new Object();
    window.console.log(widget instanceof Object);
*/
//step 25
    var widget = new Object();
    window.console.log(widget in Object);


