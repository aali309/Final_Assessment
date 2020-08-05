
/**************************************************************************** 
 * * Assignment1 
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source 
* (including web sites) or distributed to other students.  
* Name: _ATIF HAMMUD ALI__Student ID: __116743196_ Date: __june/1st.2020_  
****************************************************************************/

//assignment one playnumbers()

function playNumbers()
{
    var count = arguments.length;
 if (count === 0)
 {
     console.log("There are no inputs.\n");
 }
 
 if (count > 0 )
 {   
     var add = 0;
     var highest = 0;
     var ave;
     var total = 0;
     var characters = 0;
     var argmnts = "";
     for(var i = 0; i < count; i++)
     {
         
        if (isNaN(arguments[i]))
         { 
            characters ++;
            console.log(arguments[i]+ " is not a number.\n");
         }
         
         if (characters === 0)
         {
            if (i+1 != arguments.length)
            {
                argmnts = argmnts + String(arguments[i]) + ", ";
            }
            else
            {
                argmnts += arguments[i];
            }
            add++;
            total += arguments[i];
            if ( highest < arguments[i])
            {
                highest = arguments[i];
            }
         }
        }
     
     if (characters === 0)
     {   var ave = 0.0;
        var avestring = "";
         ave = total / add;
         console.log("The largest number of (" +argmnts + ") is "+highest +"\n");
         
         console.log("The average of (" +argmnts + ") is "+ave +"\n");
         
     }
     
 }
}

console.log("/************************ Task 1 ***********************/\n");

playNumbers();

playNumbers("abc",3,"hello");

playNumbers(9,3,6);

playNumbers(3,5,1,3,5);

playNumbers("Good day!",3,4,32,"hi","we");
 

//Task two : Celsius and Fahrenheit temp converter
var convertCF = function( val, cf)
{
    var checks = 0;
    if (isNaN(val))
    {
        console.log("I need a number.\n");
        ++checks;
    }
    if (cf != "F" && cf != "C")
    {
        console.log("I am confused :(\n");
        ++checks;
    }
    if (cf == "C" && checks == 0 )
    //formula to convert celsius to Fahrenheit (#in celcius* (9/5) + 32)
    {
        var CtoF = 0; var temp1Type = "F";
        CtoF = (val * (9/5)) + 32;
        console.log(val+cf + " is equivalent to " + CtoF + temp1Type +"\n");
    }

    if ( checks == 0 && cf == "F" )
    //formula to convert Fahreinheit to Celcius ((32F - 32)*(5/9))
    {
        var FtoC = 0; var temp2Type = "C";
        FtoC = ((val - 32)*(5/9));
        console.log(val+cf + " is equivalent to " + FtoC + temp2Type +"\n");
    }
}

console.log("/************************ Task 2 ***********************/\n");

convertCF("avc","F");

convertCF("32","M");

convertCF(32,"F");

convertCF(0,"C");

convertCF(122,"F");



