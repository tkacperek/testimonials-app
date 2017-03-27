/*eslint-disable*/

// callback for REST API call
// data: collection of testimonials
function callback(data) {
    // header
    var p = document.createElement('p');
    p.appendChild(document.createTextNode('Slider contents'));

    // list of testimonials
    var ul = document.createElement('ul');
    for (var key in data) {
        var li = document.createElement('li');
        li.appendChild(
            document.createTextNode(data[key].author + ' - ' + data[key].text)
        );
        ul.appendChild(li);
    }

    // apply new elements
    var embed = document.getElementById('embed');
    while (embed.firstChild) {
        embed.removeChild(embed.firstChild);
    }
    embed.appendChild(p);
    embed.appendChild(ul);
}

// protect namespace
(function(){

    // convention: companyName is in plaintext in div#embed
    var companyName = document.getElementById('embed').innerHTML;
    var limit = 5;

    // script 'injection'
    var tag = document.createElement('script');
    tag.async = true;
    tag.defer = true;
    tag.src = 'https://testimonials-f86d1.firebaseio.com/testimonials/' + companyName + '.json?orderBy=%22$key%22&limitToLast=' + limit + '&callback=callback';
    document.currentScript.parentNode.insertBefore(tag, document.currentScript);

})()
