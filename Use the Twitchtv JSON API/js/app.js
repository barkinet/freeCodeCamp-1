channels = ["freecodecamp"];

$(document).ready(function () {
    $("#add-btn").on('click', function (e) {
        e.preventDefault();
        addChannel($("#add-box").val());
    });
    $(document).keypress(function (e) {
        if (e.which == 13) {
            addChannel($("#add-box").val());
        }
    });
    channels.forEach(addChannel);
});

function addChannel(channel) {
    $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + channel + "?callback=?", function (data) {
        if (data.stream === null) {
            $.getJSON("https://wind-bow.gomix.me/twitch-api/channels/" + channel + "?callback=?", disconectedChan);
            return;
        }
        createPanel("https://www.twitch.tv/" + data.stream.channel.name, "success", data.stream.channel.logo, data.stream.channel.display_name, data.stream.game, data.stream.preview.medium, data.stream.viewers);
    });
}

function disconectedChan(data) {
    if (data.error !== undefined) {
        createPanel(null, "danger", null, data.message.split("'")[1], data.message, null, null);
    } else {
        createPanel(null, "warning", data.logo, data.display_name, data.status, data.video_banner, data.views);
    }
}

function createPanel(link, type, logosrc, chan, message, pic, views) {
    if (message == null) {
        message = " ";
    }
    if (pic == null) {
        pic = "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg";
    }
    if (link !== null) {
        var lnk = document.createElement('a');
        lnk.setAttribute("href", link);
        lnk.setAttribute("target", "_blank");
    }
    var panel = document.createElement('div');
    panel.setAttribute("class", "panel panel-" + type);
    var header = document.createElement('div');
    header.setAttribute("class", "panel-heading");
    if (logosrc !== null) {
        var logo = document.createElement('img');
        logo.setAttribute("class", "channel-logo");
        logo.setAttribute("src", logosrc);
        logo.setAttribute("alt", "channel logo");
    } else {
        var logo = document.createElement('i');
        logo.setAttribute("class", "glyphicon glyphicon-ban-circle");
    }
    header.appendChild(logo);
    header.appendChild(document.createTextNode(" " + chan));
    panel.appendChild(header);
    var body = document.createElement('div');
    body.setAttribute("class", "panel-body");
    var game = document.createElement('h4');
    game.appendChild(document.createTextNode(message));
    body.appendChild(game);
    var preview = document.createElement('img');
    preview.setAttribute("src", pic);
    preview.setAttribute("alt", "stream preview");
    body.appendChild(preview);
    var viewers = document.createElement('h5');
    var eyecone = document.createElement('i');
    if (views !== null) {
        eyecone.setAttribute("class", "glyphicon glyphicon-eye-open");
    } else {
        eyecone.setAttribute("class", "glyphicon glyphicon-eye-close");
    }
    viewers.appendChild(eyecone);
    if (views !== null) {
        if (link !== null) {
            viewers.appendChild(document.createTextNode(" " + views));
        } else {
            viewers.appendChild(document.createTextNode(" Total views : " + views));
        }
    }
    body.appendChild(viewers);
    panel.appendChild(body);
    if (link !== null) {
        lnk.appendChild(panel);
        $("#results-list").append(lnk);
    } else {
        $("#results-list").append(panel);
    }
}