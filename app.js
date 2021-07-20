// Chap21-25
// Task1
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " +lastName;
// document.write(fullName);

// Task2
// var user = prompt("Enter Your Favorite Mobile Model Number");
// document.write("My favriote phone is: " + user + "<br>"); 
// document.write("Length of string: " + user.length);

// Task3
// var a = "Paksitani"
// document.write("String: " + a + "<br>");
// document.write("Index of 'n':" + a.indexOf("n"));


// Task4
// var b = "Hello World"
// document.write("String: " + b + "<br>");
// document.write("Last index of 'l':" + b.lastIndexOf("l"));

// Task5
// var a = "Paksitani"
// document.write("String: " + a + "<br>");
// document.write("Character at index 3:" + a.indexOf('i'));

// Task6
// var firstName = prompt("Enter Your first Name");
// var lastName = prompt("Enter Your last Name");
// console.log(firstName.concat(' ', lastName))


// Task7
// var city = "Hyderabad";
// console.log("City: " + city + "<br>");
// console.log("After replacement: " + city.replace("Hyder" , "Islam"))



// ---------- q8 --------
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// console.log(message.replaceAll("and" , "&"))



// ========= q9  ========
// var number = 472;
// console.log("Value: " + number);
// console.log("Type: " + number.toString());



// ======= q10 =====
// var user = prompt("Enter Dry fruits");
// document.write(user.toUpperCase());


// ======= q11 ====== 
// var user = prompt("Enter some text");
// console.log(user.slice(0,1).toUpperCase() + user.slice(1).toLowerCase())


// ==== q12 ==== 
// var num = 35.36;
// console.log("Number: " + num)
// console.log("Result: " + num.Math('.' , ""))

// ==== q13 ==== 

// var username = prompt("Enter user name");
// if(username.includes("@")||username.includes(",")||username.includes(".")||username.includes("!")){
//     alert("Please enter a valid user name")
// }
// else{
//     alert("Valid user name")
// }




// ===== q14 ==== 
// var arr = ["Cake" , "Apple pie" , "Cookie" , "Chips" , "paties"]
// var a = prompt("Welcome to ABC Bakery.What do you want to order sir/mam?")

// for (var i = 0; i<arr.length; i++){
//     document.write(arr[i]);
//     if (arr[i] ==a ) {
//         alert("Cookie is available at index 2 in our bakery")
//     }else if (arr[i] == a) {
//         alert("Cake is available at index 0 in our bakery")
//     }
// }

// ===== q15 ==== 
// var userinput = prompt("Enter some text")
// for (i = 0; i < userinput; i++){
// if (i == userinput.length() - 1)
//             cout<<userinput[i];
// }
// console.log(userinput)





// ===== q16 ===== 
// var university = "University of Karachi";

// var arr = university.split("")

// for(var i = 0; i < arr.length; i++){
//     document.write(arr[i] + "<br>")
// }


// ===== q17 ===== 
// var userinput = prompt("Enter a character");
// var res = userinput.charAt(userinput.length - 1);
// console.log(res)


// ===== q18 ==== 
// var str = "The quick brown fox jumps over the lazy dog"
// document.write(str + "<br>");
// var count = (str.match(/The/) || []).length;
// var count1 = (str.match(/The/) || []).length;
// count2 = count+count1;
// document.write("There are " + count2 + " occurence(s) of word 'the'")


// Chap26-30
// === q1 ==== 
// var num = +prompt("Enter a number");
// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));


// ==== q2 ==== 
// var num = -prompt("Enter a number");
// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));


// ==== q3 ==== 
// var num = +prompt("Enter positive or negative number");
// var absoulte = Math.abs(num);
// document.write(num + "=" + absoulte); 



// ==== q4 ==== 
// var dice = Math.floor(Math.random() * 6)+1;
// document.write("random dice value:" + dice + "<br>");
// var dice1 = Math.floor(Math.random() * 6) + 1;
// document.write("random dice value:" + dice1);



// ==== q5 ====
// var head = 0;
// var tail = 0;
// if (Math.random() < 0.5) {
//     document.write("1 <br> Random coin value:Heads")
// }else{
//     document.write("2 <br> Random coin value:Tails")
// }



// ==== q6 ====
// var num = Math.random()
// var dice = (Math.ceil(num * 100))
// document.write("Random number between 1 and 100: " + dice)


// ===== q7 ==== 
// var weight = prompt("Enter your weight in kilograms")
// document.write("The weight of the user is " + weight);



// ===== q8 ====
// var user = +prompt("Enter a number");
// var screct = (Math.ceil(Math.random() * 10));
// if (user == screct){
//     alert("Congratulation");
// }else{
//     alert("Not Matched")
// }



// Chapter31-34
// ==== q1 ===
// var date = new Date();
// document.write(date);


// ==== q2 ==== 
// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(4,7);
// if (c === "Jan"){
//     document.write("Current month: January")
// }else if(c === "Feb"){
//     document.write("Current month: February")
// }else if(c === "Mar"){
//     document.write("Current month: March")
// }else if(c === "Apr"){
//     document.write("Current month: April")
// }else if(c === "May"){
//     document.write("Current month: May")
// }else if(c === "Jun"){
//     document.write("Current month: June")
// }else if(c === "Jul"){
//     document.write("Current month: July")
// }else if(c === "Aug"){
//     document.write("Current month: August")
// }else if(c === "Sep"){
//     document.write("Current month: September")
// }else if(c === "Oct"){
//     document.write("Current month: October")
// }else if(c === "Nov"){
//     document.write("Current month: November")
// }else if(c === "Dec"){
//     document.write("Current month: December")
// }


// ==== q3 ==== 
// var date = new Date;
// if(date.getDay() == 0)
//     {
//         alert('Current Month is: Sunday');
//     }
// else if(date.getDay() == 1)
//     {
//         alert('Current Month is: Monday');
//     }
// else if(date.getDay() == 2)
// {
//     alert('Current Month is: Tuesday');
// }
// else if(date.getDay() == 3)
// {
//     alert('Current Month is: Wednesday');
// }
// else if(date.getDay() == 4)
// {
//     alert('Current Month is: Thursday');
// }
// else if(date.getDay() == 5)
// {
//     alert('Current Month is: Friday');
// }
// else if(date.getDay() == 6)
// {
//     alert('Current Month is: Saturday');
// }


// ==== q4 ==== 
// var date = new Date;
// if(date.getDay() == 6 || date.getDay() == 0){
//     alert('Its a Fun day');
// }
// else{
//     alert('Its a Work day');
// }


// ===== q5 ===== 
// var date = new Date;
// if (date.getDate()<16)
//     {
//         alert('First fifteen days of the month');
//     }
// else{
//     alert('Last days of the month');
// }

// ===== q6 ======
// var date = new Date;
// var mint = date.getTime();
// alert(mint);


// ====== q7 ====== 
// var d = new Date;
// var n = d.getUTCHours();
// var m = d.getUTCMinutes();
// var s = d.getUTCSeconds();
// if(n <= 12 && m == 0 && s == 00)
// {
//     alert('its AM');
// }
// else{
//     alert('its PM');
// }


// ==== q8 ==== 
// var laterDate = new Date('Dec 31, 2021');
// alert('Later date is: '+ laterDate);


// ===== q9 ===== 
// var date = new Date();
// var pastdate = new Date("June 30, 2015");
// numOfDays=Math.round((date - pastdate) / (1000 * 60 * 60 * 24));
// alert(numOfDays + ' days have passed since 1st Ramadan, 2015');


// ==== q10 ==== 
// var date = new Date();
// var pastdate = new Date("Jan 01, 2015");
// numOfDays=Math.round((date - pastdate));
// alert('On Refrence date '+pastdate + ' , ' + numOfDays +' second has passed since beginning of 2015');


// ==== q11 ==== 
// var date = new Date();
// document.write("Current Date : " + date);
// date.setHours(date.getHours()-1);
// document.write("<br> 1 hour ago, it was:" + d);


// ===== q12 ===== 
// var date = new Date();
// alert("Current Date :" + date);
// date.setFullYear(date.getFullYear() - 100);
// alert("100 years back, it was:" + date);


// ==== q13 ==== 
// var dateOfBirth = prompt("Enter Your Age");
// var d = new Date();
// d.setFullYear(d.getFullYear()-dateOfBirth);
// var n = d;
// var c = n.getFullYear();
// document.write("Your Age is :" + dateOfBirth + "<br> Your Birth Year is :" + c);


// ==== q14 ==== 
// document.write("<h1>K-Electric Bill</h1>")
// document.write("Customer Name : <strong> XYZ Customer </strong>")
// var nw = new Date();
// var month = "Januray";
// var nameofCurrentMonth = month;
// document.write("<br> Month :" + "<b>" + nameofCurrentMonth + "<b>");
// var units = prompt("Enter Number of Units");
// var charges = 16;
// document.write("<br> Number of Units: " + "<b>" + units + "<b>" + "<br> Charges per Unit :" + "<b>" + charges + "<b>" + "<br>" );
// var NetAmount = units * charges;
// document.write("<br> Net Amount Payable (within Due Date):" + "<b>" + NetAmount + "<b>");
// var lateCharge = 350;
// document.write("<br> Late Payment Charges :" + lateCharge);
// var totalAmount = NetAmount + lateCharge;
// document.write("<br> Total Amount Payable (after Due Date):" + totalAmount); 







// Chapter35-38
// ==== q1 ===
// var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.write(today + date);

// ==== q2 =====
// function greet(firstName , LastName){
//     console.log("Welcome " + firstName + " " + lastName)
// }
// firstName = prompt("Enter first Name");
// lastName = prompt("Enter last Name");
// greet(firstName,lastName)


// ==== q3 ====
// function calc(num1,num2,operator){
//     var num1 = +prompt("enter first number");
//     var num2 = +prompt("enter second number");
//     var operator = prompt("enter operator");
    
//     result = eval(num1 + operator + num2)
//     return result
    
//     }
//     console.log(calc())



// ==== q4 ====
// function calc(num1,num2,operator){
//     var num1 = +prompt("enter first number");
//     var num2 = +prompt("enter second number");
//     var operator = prompt("enter operator");
    
//     result = eval(num1 + operator + num2)
//     return result
    
//     }
//     console.log(calc())


// ===== q5 ====
// function sumOfSquares(num) {
//     var i;

//     for (i=0; i<=num; i++){
//         var sum=0;
//         var i = i*i;
//         sum = i;
// }
//      document.write("The sum of squares for numbers up to and including " +num+ "is " +sum) ;
// }
// var num = parseInt(prompt("Enter a number:"));
// sumOfSquares(num);


// ==== q6 === 
// var num;
// var i = 1;
// var fact;
// function myFactor (num){
//     fact = num * i;
//     for (i; i<num; i++){
//         fact = fact * i;
//     }
//     return fact

// }
// var x = myFactor (prompt("Enter factorial"))
// console.log(x);

// ===== q7 ====
// function sum()
// {
//     var FirstNumber = 1;
//     var SecondNumber = document.getElementById('txtSecondNumber').value;
//     alert(parseInt(FirstNumber) + parseInt(SecondNumber));
// }   



// ==== q8 ==== 
// function hypothensis(num1,num2){
//     return((num1*num1) + (num2*num2))
// }
// num3 = +prompt("Enter Base");
// num4 = +prompt("Enter Perpendicular");

// document.write(hypothensis(num3,num4));


// ==== q9 === 
// function rect(height,width){
//     return height*width
// }
// var height = prompt("Enter Height");
// var width = prompt("Enter width");
// console.log(rect(height,width));


// ==== q10 ==== 
// var A = ""
// var a = prompt('enter a string')
// var b = a.split("");
// for(i=b.length-1; i>= 0; i--){
//     A=A+b[i]
// }
// if(a==A){
//     console.log("It's a Palindrome")
// }
// else{
//     console.log("It is not Palindrome")
// }


// ==== q11 ==== 
// function Small(words){
//     var wordsSmall = word.toLowerCase();
//     var chaCap = wordsSmall.charAt(0);
//     chaCap = chaCap.toUpperCase();
//     var oct = wordsSmall.split("");
//     oct[0]= chaCap
//     wordsSmall = oct.join("");
//     return wordsSmall
// }

// function Cap(inp){
//     var pro = "";
//     var wordsSmall = words.toLowerCase()
//     var SP = wordsSmall.split("");
//     for(var i = 0; SP.length; i++){
//         pro = pro+Small(SP[i]) + ""
//     }
//     return pro 
// }
// var words = prompt("Enter String")
// console.log(Cap(words));


// === q12 === 

// function hec(seen,cha){
//     var str = seen.split("");
//     num = 0;
//     for(var i = 0; i < str.length; i++){
//         if(str[i] == cha){
//             num = num + 1
//         }
//     }
//     return num
// }
// var san = prompt("Enter Sentence");
// var sh = prompt("Enter Character")
// consloe.log(hec(san,sh));


// === q13 ===
// function cal(r){
//     return "The cicrumference is " + (2*3.14*r)
// }
// var num = +prompt("Enter the radius");
// console.log(cal(num));
// function cicrumference(raduis){
//     return "The area is " + (3.14*r*raduis)
// }
// console.log(cicrumference(num));







