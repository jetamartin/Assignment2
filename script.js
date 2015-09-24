/*--------------------------------------------------------------------------------------------------------------*/
// ASSIGNMENT 2 - PART 1
/*--------------------------------------------------------------------------------------------------------------*/

//1.  Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
//var name = window.prompt("Please enter your full name (first and last name) :");
//// Note: Subtracting 1 from length to account for user entering space between first and last name
//window.alert("Your first and last name has " + (name.length - 1) + " characters in it");
//2.	Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
//var name = window.prompt("Please enter your full name (first and last name) :");
//var position = window.prompt("Please enter a number between 1 and " + (name.length) + " to get the corresponding letter in your name's string");
//window.alert("The letter in position " + position + " is " + name.charAt(position - 1));

//3.	Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
//var firstName = window.prompt("Please enter your first name:");
//var lastName = window.prompt("Please enter your last name:");
//window.alert("Your name is: " + firstName.concat(lastName));

//4.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
//var textString = "The quick brown fox jumps over the lazy dog";
//window.alert("The index of the word fox is: " + textString.indexOf("fox"));

//5.	Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
//var textString = "The quick brown fox jumps over the lazy dog";
//window.alert("The last index of the word fox is: " + textString.lastIndexOf("fox"));

//6.	Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
//var textString = "The quick brown fox jumps over the lazy dog";
//var fullName = window.prompt("Please enter your full name:");
//window.alert(textString.replace("the lazy dog", fullName));

//7.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
//var textString = "The quick brown fox jumps over the lazy dog";
//var guessWord = window.prompt("Please enter a word that you guess might be in a hidden phrase: ");
//window.console.log(textString.search(guessWord.toString()));
//var guessResults = textString.search(guessWord.toString());
//if (guessResults > 0) {
//    window.alert("Congratulations there was a match!");
//} else {
//    window.alert("Wah, wah, wah...the word you entered was not found in the hidden phrase. Try again");
//}

//8.	Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.slice(31);
//window.alert(new_string.toUpperCase());

//// ****** "Extra Credit": You can ignore next three lines
//// Tried to use negative values with slice...but it doesn't seem to allow you to grab last character in the string in this case "g" in dog with a negative number.
////var old_string = "The quick brown fox jumps over the lazy dog";
////var new_string1 = old_string.slice(-8);
////window.alert(new_string1.toUpperCase());

//9.	Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
//var textString = "           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG            ";
//window.alert(textString.trim().toLowerCase());

//10.	Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.
//var textString = "the quick brown fox jumps over the lazy dog";
//window.alert(textString.replace(textString.charAt(0), textString.slice(0, 1).toUpperCase()));

/*--------------------------------------------------------------------------------------------------------------*/
// ASSIGNMENT 2 - PART 2
/*--------------------------------------------------------------------------------------------------------------*/
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 1 - Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/


//***********************************************************************************************************************/
//1.	Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
//***********************************************************************************************************************/
//var numInput = window.prompt("Enter a positive or negative value: ");
//window.console.log(Math.abs(numInput));

//***********************************************************************************************************************/
//2.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
//***********************************************************************************************************************/
//var numInput = window.prompt("Enter floating point value: ");
//window.console.log(Math.ceil(numInput));

//***********************************************************************************************************************/
//3.	Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
//***********************************************************************************************************************/
//var numInput = window.prompt("Enter floating point value: ");
//window.console.log(Math.floor(numInput));

//***********************************************************************************************************************/
//4.	Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
//***********************************************************************************************************************/
//var y = window.prompt("Enter 5 numbers each followed by a comma as follows (e.g., 1,2,3,4,5): ");
//var num1 = (y.charAt(0));
//var num2 = (y.charAt(2));
//var num3 = (y.charAt(4));
//var num4 = (y.charAt(6));
//var num5 = (y.charAt(8));
//window.console.log("The largest number entered is: " + Math.max(num1, num2, num3, num4, num5));
//window.console.log("The smallest number entered is: " + Math.min(num1, num2, num3, num4, num5));
//
////***********************************************************************************************************************/
////5.	Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
////***********************************************************************************************************************/
//var numInput = window.prompt("Enter a number: ");
//window.console.log(Math.sqrt(numInput));

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 2 - Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/


//***********************************************************************************************************************/
//6.	Create an application that gets the current date. Display that result within the console window.
//***********************************************************************************************************************/
//var d = new Date();
//window.console.log(d.getDate());

//***********************************************************************************************************************/
//7.	Create an application that gets the number of days in a month. Display that result within the console window.
//***********************************************************************************************************************/
//var theMonth = window.prompt("Enter a month number (e.g., valid values 1 - 12): ");
//var theYear = window.prompt(" Enter a year number (e.g., 2015): ");
//// *** Assume user enters theMonth = 1 and theYear = 2015 for year
//// *** Since Month is zero based entering 1 would actually represent Feburay..The 0th day of a month actually represents the 
//// *** last day of the prior month. So by entering 1 and 2015 in combination with getDate function will yied last day of Jan 2015.  
//window.console.log(new Date(theYear, theMonth, 0).getDate());

//***********************************************************************************************************************/
//8.	Create an application that gets the month name from a particular date. Display that result within the console window.
//***********************************************************************************************************************/
//// Note: I consciously augmented requirements to allow user to enter their own date...it's more flexible and facilitates testing;  
//// Note: Month and Day must be exactly two digits long, Year must be 4 digits...didn't include logic to check for date elements with shorter lengths
//var inputDate = window.prompt("Enter a date in the following format MM/DD/YYYY (e.g., 01/04/2015): ");
//if (inputDate !== null && inputDate !== "") {
//    var inputMonth = inputDate.slice(0, 2);
//    var inputDay = inputDate.slice(3, 5);
//    var inputYear = inputDate.slice(-4);
//    var fullDate = inputMonth + "," + inputDay + "," + inputYear;
//    var d =  new Date(fullDate);
//    var theMonth = d.getMonth();
//
//    switch (theMonth) {
//    case 0:
//        window.console.log("January");
//        break;
//    case 1:
//        window.console.log("February");
//        break;
//    case 2:
//        window.console.log("March");
//        break;
//    case 3:
//        window.console.log("April");
//        break;
//    case 4:
//        window.console.log("May");
//        break;
//    case 5:
//        window.console.log("June");
//        break;
//    case 6:
//        window.console.log("July");
//        break;
//    case 7:
//        window.console.log("August");
//        break;
//    case 8:
//        window.console.log("September");
//        break;
//    case 9:
//        window.console.log("October");
//        break;
//    case 10:
//        window.console.log("November");
//        break;
//    case 11:
//        window.console.log("December");
//        break;
//    default:
//        window.console.log("The month entered is not a valid month");
//    }
//} else {
//    window.alert("No date entered...try again");
//}


//***********************************************************************************************************************/
//9.	Create an application that tests whether a date is a weekend. Display that result within the console window.
//***********************************************************************************************************************/
//// Note: I consciously augmented requirements to allow user to enter their own date...it's more flexible and facilitates testing;  
//// Note: Month and Day must be exactly two digits long, Year must be 4 digits...didn't include logic to check for date elements with shorter lengths
//var inputDate = window.prompt("Enter a date in the following format MM/DD/YYYY (e.g., 01/04/2015): ");
//if (inputDate !== null && inputDate !== "") {
//    var inputMonth = inputDate.slice(0, 2);
//    var inputDay = inputDate.slice(3, 5);
//    var inputYear = inputDate.slice(-4);
//    var fullDate = inputMonth + "," + inputDay + "," + inputYear;
//    var d = new Date(fullDate);
//    var theDay = d.getDay();
//    if (theDay === 6 || theDay === 0) {
//        window.console.log("WooHoo ..Party...the date falls on a weekend");
//    } else {
//        window.console.log("The date entered falls on a weekday");
//    }
//} else {
//    window.alert("No date entered...try again");
//}



//***********************************************************************************************************************/
//10.	Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday. 
//***********************************************************************************************************************/
//// Note: I consciously augmented requirements to allow user to enter their own date...it's more flexible and facilitates testing;  
//// Note: Month and Day must be exactly two digits long, Year must be 4 digits...didn't include logic to check for date elements with shorter lengths
//var inputDate = window.prompt("Enter a date in the following format MM/DD/YYYY (e.g., 01/04/2015): ");
//if (inputDate !== null && inputDate !== "") {
//    var inputMonth = inputDate.slice(0, 2);
//    var inputDay = inputDate.slice(3, 5);
//    var inputYear = inputDate.slice(-4);
//    var fullDate = inputMonth + "," + inputDay + "," + inputYear;
//    var d = new Date(fullDate);
//    var theDay = d.getDay();
//    switch (theDay) {
//    case 0:
//        window.console.log("The prior day is Saturday");
//        break;
//    case 1:
//        window.console.log("The prior day is Sunday");
//        break;
//    case 2:
//        window.console.log("The prior day is Monday");
//        break;
//    case 3:
//        window.console.log("The prior day is Tuesday");
//        break;
//    case 4:
//        window.console.log("The prior day is Wednesday");
//        break;
//    case 5:
//        window.console.log("The prior day is Thursday");
//        break;
//    case 6:
//        window.console.log("The prior day is Friday");
//        break;
//    default:
//        window.console.log("The day entered is not a valid day");
//    }
//} else {
//    window.alert("No date entered...try again");
//}

//***********************************************************************************************************************/
//11.	Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
//***********************************************************************************************************************/
//var inputDate = window.prompt("Enter a date in the following format MM/DD/YYYY (e.g., 01/04/2015): ");
//if (inputDate !== null && inputDate !== "") {
//    var inputMonth = inputDate.slice(0, 2);
//    var inputDay = inputDate.slice(3, 5);
//    var inputYear = inputDate.slice(-4);
//    var fullDate = inputMonth + "," + inputDay + "," + inputYear;
//    var d = new Date(fullDate);
//    var theDay = d.getDay();
//    switch (theDay) {
//    case 0:
//    case 6:
//        var firstLetter = "S";
//        break;
//    case 1:
//        firstLetter = "M";
//        break;
//    case 2:
//        firstLetter = "T";
//        break;
//    case 3:
//        firstLetter = "W";
//        break;
//    case 4:
//        firstLetter = "T";
//        break;
//    case 5:
//        firstLetter = "F";
//        break;
//    default:
//        window.console.log("The date entered is not a valid day");
//    }
//    window.console.log(firstLetter);
//} else {
//    window.alert("No date entered...try again");
//}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 3 - Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/

//***********************************************************************************************************************/
//12.	Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
//***********************************************************************************************************************/
//// Note: The specs didn't specify what to do if numbers were equal...so I agumented them so as to print message saying Numbers are equal...see below 
//var input1 = window.prompt("Enter your first number: ");
//var input2 = window.prompt("Enter your second number: ");
//if (input1 > input2) {
//    window.console.log("The larger number entered is: " + input1);
//} else if (input2 > input1) {
//    window.console.log("The larger number entered is: " + input2);
//} else {// Although not part of specs I added this for completeness -->
//    window.console.log("The two numbers are equal");
//}

//***********************************************************************************************************************/
//13.	Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
//***********************************************************************************************************************/
//
//"use strict";
//function calcGrade(score) {
//    var grade;
//    switch (true) {
//    case (score < 60):
//        grade = "F";
//        break;
//    case (score < 70):
//        grade = "D";
//        break;
//    case (score < 80):
//        grade = "C";
//        break;
//    case (score < 90):
//        grade = "B";
//        break;
//    case (score <= 100):
//        grade = "A";
//        break;
//    default:
//        grade = null;
//    }
//    return grade;
//}
//
//var ursulaScore = 80;
//var paulScore = 77;
//var henryScore = 88;
//var tabithaScore = 95;
//var lucyScore = 68;
//
//var ursulaGrade = calcGrade(ursulaScore);
//var paulGrade = calcGrade(paulScore);
//var henryGrade = calcGrade(henryScore);
//var tabithaGrade = calcGrade(tabithaScore);
//var lucyGrade = calcGrade(lucyScore);
//
//window.console.log("Student Name | Score | Grade ");
//window.console.log("Ursula          " + ursulaScore + "       " + ursulaGrade);
//window.console.log("Paul            " + paulScore + "       " + paulGrade);
//window.console.log("Henry           " + henryScore + "       " + henryGrade);
//window.console.log("Tabitha         " + tabithaScore + "       " + tabithaGrade);
//window.console.log("Lucy            " + lucyScore + "       " + lucyGrade);

//// ALTERNATIVE SOLUTION below is more flexible solution: allows the user to enter ANY 5 names and their corresponding score and then logs Name, Score and calculated grade
////window.console.log("Student Name | Score | Grade ");
////var inputName;
////var inputScore;
////var i;
////for (i=1; i<6; i++) {    
////    inputName = window.prompt("Please Enter Person's name: ");
////    inputScore = window.prompt("Please Enter Person's score: "); 
////    window.console.log(inputName + "            " + inputScore + "    " + calcGrade(inputScore));
////}

//***********************************************************************************************************************/
//14.	Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
//***********************************************************************************************************************/

//var i;
//for (i = 1; i <= 15; i += 1) {
//    if (i % 2 === 0) {
//        window.console.log(i + " is an even number");
//    } else {
//        window.console.log(i + " is an odd number");
//    }
//}

//***********************************************************************************************************************/
//15.	Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
//***********************************************************************************************************************/
//var i;
//var divisibleBy3 = false;
//var divisibleBy5 = false;
//for (i = 1; i <= 100; i += 1) {
//    //Set divisibleby flags
//    if (i % 3 === 0) {
//        divisibleBy3 = true;
//    }
//    if (i % 5 === 0) {
//        divisibleBy5 = true;
//    }
//    //Test divisible flags and print console message
//    if (divisibleBy5 || divisibleBy3) {
//        if (divisibleBy3 && divisibleBy5) {
//            window.console.log("FizzBuzz");
//        } else if (divisibleBy3) {
//            window.console.log("Fizz");
//        } else {
//            window.console.log("Buzz");
//        }
//    } else {
//        window.console.log(i);
//    }
//    
//    // Reset divisibleBy flags  -->
//    divisibleBy3 = false;
//    divisibleBy5 = false;
//}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 4 - The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/

//***********************************************************************************************************************/
//1.	Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
//***********************************************************************************************************************/

//var answer = window.confirm("Are you ready to play Hitchiker's Guide to the Galaxy game?");
//if (answer) {
//    window.alert("Awesome, our hero is waiting!");
//} else {
//    window.alert("Too bad, we're going to play anyway because our hero desperately needs your help!");
//}

//***********************************************************************************************************************/
//2.	Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
//***********************************************************************************************************************/
//window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");


//***********************************************************************************************************************/
//3.	Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
//***********************************************************************************************************************/
//var direction = window.prompt("Which direction would you like to head (please enter forward, left, or right).");

//***********************************************************************************************************************/
//4.	Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
//***********************************************************************************************************************/
//switch (direction) {
//case "forward":
//    window.alert("You walk about 100 yards and safely make your way out of the cave.");
//    break;
//case "left":
//    window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//    break;
//case "right":
//    window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//    break;
//}

/**********************************************************************************************************************/
//5.	Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
//***********************************************************************************************************************/
//var rating = window.prompt("Please rate this game on a scale of 1 to 10: ");
//if (rating > 5) {
//    window.alert("Thank you, we will continue to make improvements to the game!");
//} else {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//}


//***********************************************************************************************************************/
//6.	Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
//***********************************************************************************************************************/
//var rating = window.prompt("Please rate this game on a scale of 1 to 10: ");
//if (rating < 1 || rating > 10) {
//    rating = 10;
//}
//if (rating > 5) {
//    window.alert("Thank you, we will continue to make improvements to the game!");
//} else {
//    window.alert("Whatever, you weren’t very good at this game anyway!");
//}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 5 - The “Coin Flip” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/


/**********************************************************************************************************************/
//1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
//2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
//3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails.
//4.	If the result is heads and the user selects heads, display the following message within an alert: 
//The flip was heads and you chose heads...you win!
//5.	If the result is heads and the user selects tails, display the following message within an alert: 
//The flip was heads but you chose tails...you lose!
//6.	If the result is tails and the user selects heads, display the following message within an alert: 
//The flip was tails but you chose heads...you lose!
//7.	If the result is tails and the user selects tails, display the following message within an alert: 
//The flip was tails and you chose tails...you win!

/**********************************************************************************************************************/
// Solution  for steps 1 - 7
/**********************************************************************************************************************/
//var coinFlip = Math.random();
//window.console.log(coinFlip);
//var choice = window.prompt("Please guess whether the value of the coinflip...enter:  Heads or Tails");
//var result;
//window.console.log(choice);
//if (coinFlip <= 0.5) {
//    result = "Heads";
//} else {
//    result = "Tails";
//}
//window.console.log(result);
//switch (result) {
//case ("Heads"):
//    if (choice === "Heads" || choice === "heads") {
//        window.alert("The flip was Heads and you chose heads...you win!");
//    } else {
//        window.alert("The flip was Heads and you chose tails...you lose!");
//    }
//    break;
//case ("Tails"):
//    if (choice === "Tails" || choice === "tails") {
//        window.alert("The flip was Tails and you chose Tails...you win!");
//    } else {
//        window.alert("The flip was Heads and you chose tails...you lose!");
//    }
//    break;
//default:
//    window.alert("Looks like your Heads/Tails selection was incorrect. Make sure you capitalize first letter of Heads or Tails");
//}
/**********************************************************************************************************************/
//8.	Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
/**********************************************************************************************************************/
//var coinFlip = Math.round(Math.random());
//window.console.log(coinFlip);
//var choice = window.prompt("Please guess whether the value of the coinflip...enter:  Heads or Tails");
//window.console.log(choice);
//if (coinFlip) {
//    var result = "Heads";
//} else {
//    var result = "Tails";
//}
//window.console.log(result);
//switch (result) {
//case ("Heads"):
//    if (choice === "Heads" || choice === "heads") {
//        window.alert("The flip was Heads and you chose heads...you win!");
//    } else {
//        window.alert("The flip was Heads and you chose tails...you lose!");
//    }
//    break;
//case ("Tails"):
//    if (choice === "Tails" || choice === "tails") {
//        window.alert("The flip was Tails and you chose Tails...you win!");
//    } else {
//        window.alert("The flip was Heads and you chose tails...you lose!");
//    }
//    break;
//default:
//    window.alert("Looks like your Heads/Tails selection was incorrect. Make sure you capitalize first letter of Heads or Tails");
//}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 6 - The “Coin Flip” Game Redux (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/


/**********************************************************************************************************************/
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a for loop that loops 10 times.
//3.	Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
/**********************************************************************************************************************/
//var coinFlip;
//var i;
//for (i = 1; i < 11; i += 1) {
//    coinFlip = Math.round(Math.random());
//    window.console.log(coinFlip);
//    if (coinFlip) {
//        window.console.log("Tails");
//    } else {
//        window.console.log("Heads");
//    }
//}
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 7 - The “Coin Flip Streak” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/


/**********************************************************************************************************************/
//1.	Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
//2.	Create a do while loop.
//3.	Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
//4.	Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
//5.	Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
/**********************************************************************************************************************/

//var coinFlip;
//do {
//    coinFlip = Math.round(Math.random());
//    window.console.log(coinFlip);
//    if (!coinFlip) {
//        window.console.log("Heads");
//    } else {
//        window.console.log("Tails");
//    }
//} while (!coinFlip);



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 8 – Looping a Triangle (5 points)
//Write a loop that displays the following triangle within a console window:
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//#
//##
//###
//####
//#####
//######
//#######
//var hashTag = "";
//var i;
//for (i = 1; i < 8; i += 1) {
//    hashTag += "#";
//    window.console.log(hashTag);
//}

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/
//Part 9 – Odd or Even? (5 points)
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/

//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//Sample Output:
//
//"0 is even" 
//"1 is odd" 
//"2 is even"
//var i;
//for (i = 0; i < 16; i += 1) {
//    if (i === 0) {
//        window.console.log(i + " is even");
//    } else if (i % 2 === 0) {
//        window.console.log(i + " is even");
//    } else {
//        window.console.log(i + " is odd");
//    }
//}