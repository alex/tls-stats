function sortByValue(data) {
    var values = [];
    var count = 0;
    for (var key in data) {
        if (key.startsWith("http:")) {
            count += data[key];
            values.push([key, data[key]]);
        }
    }
    values.sort(function(a, b) {
        return b[1] - a[1];
    });
    return {values: values, total: count};
}

document.addEventListener("DOMContentLoaded", function() {
    chrome.storage.local.get(null, function(values) {
        var html = "";
        var data = sortByValue(values);
        for (var value in data.values.slice(0, 25)) {
            var val = data.values[value];
            var host = val[0].slice(5);
            var lastSeen = (values["last-seen:" + host] || "");
            html += "<tr><td><code>" + host + "</code></td><td>" +
                val[1].toLocaleString() + "</td><td>" +
                (Math.round(10 * 100 * val[1] / data.total) / 10) + "%</td>" +
                "<td>" + lastSeen + "</td></tr>";
        }
        document.getElementById("stats-body").innerHTML = html;
    });
});
