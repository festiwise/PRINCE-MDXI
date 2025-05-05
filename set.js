
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;



 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MDX~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0RxVHQrMEJVZWxKeVhvRUppSG9zRHh2OHlhM3VHZHpEVDQxRVpSbzdFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0s2elNLMmxscDdqSWdUMnl2ajlDWEFSTTQ5Uk02Rkd6cHJEejMzdVB5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzQm05VnNsNUlENjZWMVNHSExsZU1DQzlSeFAvQkFLbWxGeFBhN2RtUG1rPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZTlExWUpaZTdGOXpwWjgzclIwSVpXdjZFRytXanJjZXBIWkNHRGZNOVE4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PTGk1Ly9aUm1SMmdISUdJWmFNcmJ1dHRxVXkxTkdwVDVNa1pEVk1DVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpTbHpLZUs3QmFLTS9WeUNPbmNzem5XWStBR2lPSDJZZUcyVlJpQ2psM3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0Y3d0pnZWQwQTE0OXlDMHBtMFN3Qmo3RURCUFdBZUIwajZkUjlnSncxVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1o2VWFwQkJ1TldsdGJsVzF2MUVvdVh5WXFxekpmSXhCM1ZoWlRDNlUzbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndzdUY3QUxFdzdXSzQ3ZG90ek94ZlkydUpxOFRsZHN5SUJ1SGIwbWM1ZHc2VnFycG9BUXE4MTFUMS82a2MwaTRFUjZCTm1YSWdRMVVrRDdRL1ZiRkF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJ6aDVGSitMbXZkd1dQNnIxclE3cXBCYWZHdkVaSU0rbXdJRk5tMjZFSVFJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtOHBFREh1dlRBdTMyX09NR0tOZUd3IiwicGhvbmVJZCI6Ijk0YTJiY2JjLWRmYWEtNDFjMy1hZDg4LWVmMDA2ZjJjNmMzZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1VStJUFlRbUpOdTJXR1VQbHhyaWw2cTY0a1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiazdqNElSYkw1S1RxS3YycFppUmR3SEsyYU5zPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlkxUTZETUNMIiwibWUiOnsiaWQiOiIyMzM1NTA5Mjg3OTU6NDFAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09pNnowVVE3cW5nd0FZWUR5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlROdTR6WjRlQzVUVnpsWWVybzF3c3Z6RDdGTEtqM2hrWnVUTzY3djZtMWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkFzS0tXbWtZcHVQYjM2OU1xQ2wycGJPalJjWm82RS9uQTFFM0lqTDlsb01LZUd1aXpQN3dNZDA0ZlEzREhUbnQ4d2pnanExUVVud1ZkQzFxb0VvUEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIva004enJTMXZvSlhBK08vOTdFdFh4Q1FPNGNPNjh0cWtXcThiV2k0SUR4Q1J1Smo0MXB1aEdqWjNRejBIT3hJNGZ2aDl3cGc4YTlYQjM5clBzWWlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzU1MDkyODc5NTo0MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJVemJ1TTJlSGd1VTFjNVdIcTZOY0xMOHcreFN5bzk0Wkdia3p1dTcrcHRZIn19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY0MDg2OTksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQWRQIn0=", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "233550928795", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "false",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "private", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "233550928795", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "STEEZ", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || "@",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 Auto Call Reject Mode Active. 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "STEEZ 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://cdn.giftedtech.web.id/file/MrbYl.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || " powered by prince",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
