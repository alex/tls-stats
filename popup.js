function sortByValue(data) {
    var values = [];
    for (var key in data) {
        values.push([key, data[key]]);
    }
    values.sort(function(a, b) {
        return b[1] - a[1];
    });
    return values;
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.local.get(null, function(values) {
        var html = "<table>";
        var data = sortByValue(values);
        for (var val in data.slice(0, 20)) {
            html += "<tr><td>" + data[val][0].slice(5) + "</td><td>" +
                data[val][1] + "</td></tr>";
        }
        html += "</table>";
        document.getElementById("stats").innerHTML = html;
    });
});
