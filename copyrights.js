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

$(document).ready(function () {
    showCopyRightMessage();
  
});

function showCopyRightMessage() {
    const message = 'Developed with ❤️ by CodingTripura';
    const url = 'https://www.codingtripura.com';

    console.log(`%c ${message}`, consoleStyles);
    console.info(`🌐 Explore our software at ${url} for cutting-edge technology and seamless performance.`);
}






