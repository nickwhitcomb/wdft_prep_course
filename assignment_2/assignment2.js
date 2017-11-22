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
