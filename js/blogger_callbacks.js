function sortByTitle(x,y) {
    return ((x.title.$t == y.title.$t) ? 0 : ((x.title.$t> y.title.$t) ? 1 : -1 ));
}

function sortByUpdatedDate(x,y) {
    return ((x.updated.$t == y.updated.$t) ? 0 : ((x.updated.$t> y.updated.$t) ? 1 : -1 ));
}

function listPosts(jsondata) {
    jsondata.feed.entry.sort(sortByTitle);
    document.write('<ul>');
    for (var i = 0; i < jsondata.feed.entry.length; i++) {
        for (var j = 0; j < jsondata.feed.entry[i].link.length; j++) {
            if (jsondata.feed.entry[i].link[j].rel == 'alternate') {
                break;
            }
        }
        var entryUrl = "'" + jsondata.feed.entry[i].link[j].href + "'";
        var entryTitle = jsondata.feed.entry[i].title.$t;
        var item = '<li>' + '<a href=' + entryUrl + '>' + entryTitle + '</a> </li>';
        document.write(item);
    }
    document.write('</ul>');
}

function listPostsNumbered(jsondata) {
    jsondata.feed.entry.sort(sortByTitle);
    document.write('<ol>');
    for (var i = 0; i < jsondata.feed.entry.length; i++) {
        for (var j = 0; j < jsondata.feed.entry[i].link.length; j++) {
            if (jsondata.feed.entry[i].link[j].rel == 'alternate') {
                break;
            }
        }
        var entryUrl = "'" + jsondata.feed.entry[i].link[j].href + "'";
        var entryTitle = jsondata.feed.entry[i].title.$t;
        var item = '<li>' + '<a href=' + entryUrl + '>' + entryTitle + '</a> </li>';
        document.write(item);
    }
    document.write('</ol>');
}

function listSummaries(jsondata) {
    jsondata.feed.entry.sort(sortByUpdatedDate);
    for (var i = 0; i < jsondata.feed.entry.length; i++) {
        for (var j = 0; j < jsondata.feed.entry[i].link.length; j++) {
            if (jsondata.feed.entry[i].link[j].rel == 'alternate') {
                break;
            }
        }
        var entryUrl = "'" + jsondata.feed.entry[i].link[j].href + "'";
        var entryTitle = jsondata.feed.entry[i].title.$t;
        var entrySummary = jsondata.feed.entry[i].summary.$t;
        var item = '<h3>' + '<a href=' + entryUrl + '>' + 
            entryTitle + '</a> </h3><p>' + entrySummary +
            '... <a href=' + entryUrl + '>തുടര്‍ന്നു വായിക്കുക</a></p>';
        document.write('<div>');
        document.write(item);
        document.write('</div>');
    }
}
