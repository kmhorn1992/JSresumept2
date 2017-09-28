/*Arrays*/
var friends = ['Monte', 'Nic', 'Miata', 'Bradley', 'Kendia'];

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded');




    /*Variables*/
    var btn = document.getElementById('mybtn');




    /*Functions*/

    mybtn.addEventListener('click', function () {
        for (k = 0; k < friends.length; k++) {
            var fransDiv = document.createElement('div');
            fransDiv.className = 'friend';
            document.body.appendChild(fransDiv);
            var fransHeading = document.createElement('h3');
            fransDiv.appendChild(fransHeading);
            var fransName = document.createTextNode(friends[k]);
            fransHeading.appendChild(fransName);

            for (var l = 99; l > 0; l--) {
                var para = document.createElement('p');
                if (l === 2) {
                    var lyrics = document.createTextNode(l + ' lines of code in the file, ' + l + ' lines of code; ' + friends[k] + ' strikes one out, clears it all out ' + (l - 1) + ' lines of code in the file');
                } else if (l === 1) {
                    var lyrics = document.createTextNode(l + ' line of code in the file,' + ' line of code;' + friends[k] + ' strikes it out, cleared it all out, no more lines of code in the file');
                } else {
                    var lyrics = document.createTextNode(l + ' lines of code in the file, ' + l + ' lines of code; ' + friends[k] + ' strikes one out, clears it all out ' + (l - 1) + ' lines of code in the file');

                    para.appendChild(lyrics);
                    fransDiv.appendChild(para);



                }
            }
        }

    });
});
