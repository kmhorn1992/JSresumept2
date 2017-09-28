

/*Arrays*/
var friends = ['Monte', 'Nic', 'Miata','Bradley','Kendia'];

/*Variables*/

/*Functions*/
for (k = 0; k < friends.length; k++){
    console.log(friends[k] + ':');
    for (var l = 99; l > 0; l--) { 
        console.log(l + ' lines of code in the file, ' + l + ' lines of code; ' + friends[k] + ' strikes one out, clears it all out ' + (l-1) + ' lines of code in the file');
        if (l < 2) {
            console.log(l + ' line of code in the file,' + ' line of code;'  + friends[k] + ' strikes it out, cleared it all out, no more lines of code in the file');
       

        }
    }

}

