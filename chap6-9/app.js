           // ----------- Chapter 6-9 MATH EXPRESSIONS ----------

        "QUESTION NO:01"
// 1.Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// let a = +prompt("Input a number");
// document.write("Result: " + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("..............................................." + "<br>");
// document.write("<br>");

// Pre-Increment
// document.write("The value of ++a is: " + ++a + "<br>");
// document.write("Now the value of a is: " + a);
// document.write("<br>");
// document.write("<br>");

// Post- Increment
// document.write("The value of a++ is: " + a++ + "<br>");
// document.write("Now the value of a is: " + a);
// document.write("<br>");
// document.write("<br>");

// Pre-Decrement
// document.write("The value of --a is: " + --a + "<br>");
// document.write("Now the value of a is: " + a);
// document.write("<br>");
// document.write("<br>");

// Post-Decrement
// document.write("The value of a-- is: " + a-- + "<br>");
// document.write("Now the value of a is: " + a);


        "QUESTION NO:02"
// 2.What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// let a=2;
// let b=1;
// document.write("<h3>" + "Solving Complex Equation" + "</h3>");
// document.write('The value of a is :'+ a+'<br>');
// document.write('The value of b is :'+ b+'<br>');
// let result=  --a - --b + ++b + b--;
// document.write('The result is '+result+'<br>'+'<br>');
// document.write("<b>" + "Explainatory Solution" + "</b>" + "<br/>" );
// document.write("a = 2, b = 1" + "<br/>");
// document.write("--a  -  --b  +  ++b  +  b--"  + "<br/>");
// document.write('--2 - --1 + ++1 + 1-- '+'<br>');
// document.write('1 - 0 + 1 + 1 '+'<br>');
// document.write('1+1+1'+'<br>');
// document.write('The result is 3');
       
        //  OR

// let a = 2;
// let b = 1;
// var result = --a - --b + ++b + b--;
// document.write("a is: " + a+"<br>");
// document.write("b is: " + b+"<br>");
// document.write("result is: " + result+"<br>");


        "QUESTION NO:03"
// 3. Write a program that takes input a name from user & greet the user.

// let username=prompt("Enter your name ");
// alert("Hello "+ username)

          
        "QUESTION NO:05"
// 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number, multiplication table of 5 should be displayed by default.

// let tableNum=+prompt("Enter a number");
// if(tableNum==0){
//     for(var i=1;i<=10;i++){
//     document.write(5+ " X "+i+"="+5*i+"<br>" )
// }
// }
// else{
//     for(var i=1;i<=10;i++) {
//         document.write(tableNum+ " X "+i+"="+tableNum*i+"<br>" )
//     }
// }


        "QUESTION NO:06"
// 6. Take:

// document.write("<h3>"+"Marksheet"+"</h3>")
// a) Take three subjects name from user and store them in 3 different variables.
// let sub1= prompt("Enter first subject name");
// let sub2= prompt("Enter second subject name");
// let sub3= prompt("Enter third subject name");

// b) Total marks for each subject is 100, store it in another variable.
// let totalmarks=300;

// c) Take obtained marks for first subject from user and stored it in different variable.
// let obtainedSub1=+prompt("Enter your first subject marks")

// d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// let obtainedSub2=+prompt("Enter your second subject marks")
// let obtainedSub3=+prompt("Enter your third subject marks")

// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// let obtainedMarks=obtainedSub1+obtainedSub2+obtainedSub3;
// let percentage=(obtainedMarks/totalmarks)*100;
// percentage=percentage.toFixed(2);
// let percentage1=(obtainedSub1/100)*100;
// percentage1=percentage1.toFixed(2);
// let percentage2=(obtainedSub2/100)*100;
// percentage2=percentage2.toFixed(2);
// let percentage3=(obtainedSub3/100)*100;
// percentage3=percentage3.toFixed(2);

// document.write("<Table>")
// document.write("<tr>");
// document.write("<th>"+"Subjects "+"</th>")
// document.write("<th>"+" Total"+"</th>")
// document.write("<th>"+" Obtained Marks "+"</th>")
// document.write("<th>"+" Percentage "+"</th>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub1+"</td>")
// document.write("<td>"+100+"</td>")
// document.write("<td>"+obtainedSub1+"</td>")
// document.write("<td>"+percentage1+"%"+"</td>")
// document.write("</tr>");


// document.write("<tr>");
// document.write("<td>"+sub2+"</td>")
// document.write("<td>"+100+"</td>")
// document.write("<td>"+obtainedSub2+"</td>")
// document.write("<td>"+percentage2+"%"+"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub3+"</td>")
// document.write("<td>"+100+"</td>")
// document.write("<td>"+obtainedSub3+"</td>")
// document.write("<td>"+percentage3+"%"+"</td>")
// document.write("</tr>");

// document.write("<tr>");
// document.write("<th>" + "</th>");
// document.write("<th>"+totalmarks+"</th>");
// document.write("<th>"+obtainedMarks+"</th>");
// document.write("<th>"+percentage+"%"+"</th>");
// document.write("</tr>");
// document.write("</Table>")


             // ----------- End of Chapter 6-9 ----------