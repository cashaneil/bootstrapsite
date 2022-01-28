document.body.onload = function () {
    //injecting code for header and footer on load
    $("header").load("header.html");
    $("footer").load("footer.html");
};

//On click of an 'a' link prevent refresh, change url to that of 'a' link and load page according to that URL
$(document).on('click', 'a.nav-link', function (e) {
    //prevent a link from redirecting
    e.preventDefault();
    //getting new url
    var newPageURL = domain+$(this).attr('href');
    //change current url to new url
    history.pushState(null, '', newPageURL);
    //scroll to top
    window.scrollTo(0, 0);

    //only load #page-content div from new page into current page's #page-content div
    // $("div#page-content").load(newPageURL + " #page-content");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var newPageDoc = new DOMParser().parseFromString(this.responseText, "text/html");
        var newContent = newPageDoc.getElementById("page-content");
        document.getElementById("page-content").innerHTML = newContent.innerHTML;
    }
    xhttp.open("GET", newPageURL);
    xhttp.send();

    //start load progress bar function
    progressStroke(newPageURL);

    //find new doc title, remove <title> & </title> tags, and change current doc title to new one
    // $.ajax({
    //     url: newPageURL,
    //     async: true,
    //     success: function (data) {
    //         var matches = data.match(/<title>(.*?)<\/title>/);
    //         var newTitle = matches[0].replace('<title>','');
    //         newTitle = newTitle.replace('</title>','');
    //         document.getElementsByTagName("title")[0].innerHTML = newTitle;
    //     }
    // });
});

//On detect of change of location history(URL), do same process
window.addEventListener('popstate', function () {
    //only load #page-content div from new page into current page's #page-content div
    // $("div#page-content").load(newPageURL + " #page-content");
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        var newPageDoc = new DOMParser().parseFromString(this.responseText, "text/html");
        var newContent = newPageDoc.getElementById("page-content");
        document.getElementById("page-content").innerHTML = newContent.innerHTML;
    }
    xhttp.open("GET", window.location.href);
    xhttp.send();

    //start load progress bar function
    progressStroke(window.location.href);
});
