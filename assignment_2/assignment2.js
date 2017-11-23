/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/
for (var i = 1; i < 101; i++){
    console.log(i);
}


/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (var triangle = "#"; triangle.length < 8; triangle += "#"){
    console.log(triangle);
}

/*
Further Exercises
Hands On Challenges Below
*/

//Exercise 1

{
    for (var i = 1; i < 101; i++)
    if (i % 5 == 0 && i % 3 != 0){
        console.log("buzz");
    }
    else if (i % 3 == 0 && i % 5 != 0){
        console.log("fizz");
    }
    else if (i % 5 == 0 && i % 3 == 0){
        console.log("fizzbuzz");
    }
    else { console.log(i);
    } 
};