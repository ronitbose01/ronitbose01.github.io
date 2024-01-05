const consoleStyles = `
    font-family: 'Helvetica Neue', sans-serif;
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(to right, #3498db, #6dd5fa);
    color: #fff;
    padding: 10px 20px;
    border-radius: 5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

let clientIp = "";

$(document).ready(function () {
    showCopyRightMessage();
    getClientIP(function () {
        checkVisitorOnLocationStorage();
    });
});

function getClientIP(callback) {
    try {
        $.getJSON("https://api.ipify.org?format=json", function (ip_res) {
            clientIp = ip_res.ip;
            if (callback) {
                callback();
            }
        });
    } catch (e) {
        clientIp = "unknown";
        if (callback) {
            callback();
        }
    }
}
function checkVisitorOnLocationStorage() {

    if (localStorage.getItem('unique_visitor')) {
        createServerLogs("normal_visitor");
    } else {
        createServerLogs("normal_visitor");
        createServerLogs("unique_visitor");
    }

}
function createServerLogs(createType) {
    try {
        const API_BASE_URL = 'http://127.0.0.1/copyrightjs/logs.php';
        const clientHost = window.location.hostname;
        $.ajax({
            type: "GET",
            url: API_BASE_URL + '?host=' + clientHost + '&type=' + createType + '&client_ip=' + clientIp,
            dataType: "json",
            success: function (res) {
                if (res.type === 'unique_visitor') {
                    localStorage.setItem('unique_visitor', 'true');
                }
            }
        });
    } catch (e) {
        console.error(e);
    }
}

function showCopyRightMessage() {
    const message = 'Developed with ❤️ by CodingTripura';
    const url = 'https://www.codingtripura.com';

    console.log(`%c ${message}`, consoleStyles);
    console.info(`🌐 Explore our software at ${url} for cutting-edge technology and seamless performance.`);
}






