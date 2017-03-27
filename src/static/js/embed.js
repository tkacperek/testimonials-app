/*eslint-disable*/

// callback for REST API call
// data: collection of testimonials
// function name is ugly to protect host-site namespace
function callback_2HMXE2k6fav4bVuX(data) {
    // console.log(data);
    // header
    var p = document.createElement('p');
    p.appendChild(document.createTextNode('Slider contents'));

    // carousel with testimonials
    var carousel = document.createElement('div');
    carousel.className = 'carousel';
    // carousel.setAttribute('data-flickity', '{ "wrapAround": true, "autoPlay": true }');

    for (var key in data) {
        var cell = document.createElement('div');
        cell.className = 'carousel-cell';

        var p1 = document.createElement('div');
        p1.className = 'carousel-text';
        p1.appendChild(
            document.createTextNode(data[key].text)
        );

        var p2 = document.createElement('div');
        p2.className = 'carousel-author';
        p2.appendChild(
            document.createTextNode(' - ' + data[key].author)
        );

        cell.appendChild(p1);
        cell.appendChild(p2);
        carousel.appendChild(cell);
    }

    // apply new elements
    var embed = document.getElementById('embed');
    while (embed.firstChild) {
        embed.removeChild(embed.firstChild);
    }
    embed.appendChild(p);
    embed.appendChild(carousel);

    var elem = document.querySelector('.carousel');
    var flkty = new Flickity( elem, {
        // options
        wrapAround: true,
        autoPlay: true,
    });
}

// protect namespace
(function(){

    // convention: companyName is in plaintext in div#embed
    var companyName = document.getElementById('embed').innerHTML;
    var limit = 5;
    var currentScript = document.currentScript

    // inject flickity script
    var flickity_script_id = "fs-2HMXE2k6fav4bVuX";
    if (!document.getElementById(flickity_script_id)) {
        var flickity_script = document.createElement('script');
        flickity_script.id = flickity_script_id;
        flickity_script.async = true;
        flickity_script.defer = true;
        flickity_script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
        currentScript.parentNode.insertBefore(flickity_script, currentScript);
    }

    // inject flickity link
    var flickity_link_id = "fl-2HMXE2k6fav4bVuX";
    if (!document.getElementById(flickity_link_id)) {
        var flickity_link = document.createElement('link');
        flickity_link.id = flickity_link_id;
        flickity_link.rel = 'stylesheet';
        flickity_link.href = 'https://unpkg.com/flickity@2/dist/flickity.min.css';
        document.head.appendChild(flickity_link);
    }

    // inject stylesheet
    var style_id = "s-2HMXE2k6fav4bVuX";
    if (!document.getElementById(style_id)) {
        var stylesheet = document.createElement('style');
        stylesheet.id = style_id;
        stylesheet.appendChild(
            document.createTextNode("\
                .carousel-cell {\
                    width: 66%;\
                    height: 200px;\
                    margin-right: 10px;\
                    background: #8C8;\
                    border-radius: 5px;\
                    counter-increment: carousel-cell;\
                    text-align: center;\
                    font-family: arial;\
                }\
                .carousel-text {\
                    font-size: 200%;\
                    margin: 1em;\
                }\
                .carousel-author {\
                    font-size: 120%;\
                }\
            ")
        );
        document.head.appendChild(stylesheet);
    }


    // inject embed script
    var tag = document.createElement('script');
    tag.async = true;
    tag.defer = true;
    tag.src = 'https://testimonials-f86d1.firebaseio.com/testimonials/' + companyName + '.json?orderBy=%22$key%22&limitToLast=' + limit + '&callback=callback_2HMXE2k6fav4bVuX';
    document.currentScript.parentNode.insertBefore(tag, document.currentScript);


})()
