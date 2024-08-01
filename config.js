const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://hndrxx333:hndrxx@hndrxx.vkqrre8.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2348143313810";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "15408162617";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_17_10_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDM1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMDksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMixcbiAgICAgICAgMjUyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDY2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDksXG4gICAgICAgIDk5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA4MixcbiAgICAgICAgMTczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA5MCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU3LFxuICAgICAgICA5NyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTczLFxuICAgICAgICAxOTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQsXG4gICAgICAgIDUzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTkzLFxuICAgICAgICA3MixcbiAgICAgICAgMixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIyLFxuICAgICAgICA3NixcbiAgICAgICAgMTI3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDM3LFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMixcbiAgICAgICAgMjMzLFxuICAgICAgICA1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2LFxuICAgICAgICA0MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDUsXG4gICAgICAgIDE3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODcsXG4gICAgICAgIDYzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgMTcyLFxuICAgICAgICA1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDY5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid2xuSXNpM0RSelRjR2Y2dnp2YzdOalNCTFJhbzZlRkJuVjZaek5sejJxMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIxNTQwODE2MjYxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0ExRUUxQUFFQzY1NDZDNDlENkVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyNTMyMjEzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMTU0MDgxNjI2MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBNDQxMkVFNDY4MjdFRkQ0MjY3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjUzMjIxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjE1NDA4MTYyNjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUU4MEM1MjU5QzI3OUMzNEM3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI1MzIyMThcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwieUR6R1pHWTdUZkdrdEgtVXpZY254d1wiLFxuICBcInBob25lSWRcIjogXCJjMTI5MzU3NC03OWZkLTRlZDEtOGEyNC0zMWMzZDhjZWIwYTRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMwLFxuICAgICAgNjYsXG4gICAgICA5NSxcbiAgICAgIDE4NCxcbiAgICAgIDIsXG4gICAgICAxMzUsXG4gICAgICAzMSxcbiAgICAgIDIyOSxcbiAgICAgIDE0MSxcbiAgICAgIDExNyxcbiAgICAgIDI0MSxcbiAgICAgIDE3MixcbiAgICAgIDEwNixcbiAgICAgIDYyLFxuICAgICAgMTg1LFxuICAgICAgNSxcbiAgICAgIDQ3LFxuICAgICAgMTEyLFxuICAgICAgMjUyLFxuICAgICAgMTk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDEwOSxcbiAgICAgIDksXG4gICAgICAxODcsXG4gICAgICAyNTUsXG4gICAgICAxOTQsXG4gICAgICAxNjYsXG4gICAgICAyMDcsXG4gICAgICAyNDUsXG4gICAgICAxNzQsXG4gICAgICA2MyxcbiAgICAgIDEzNCxcbiAgICAgIDQzLFxuICAgICAgMjAxLFxuICAgICAgODEsXG4gICAgICAzLFxuICAgICAgMjUxLFxuICAgICAgMTE5LFxuICAgICAgMTA5LFxuICAgICAgMTU3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlM1OUQ5VDJDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxNTQwODE2MjYxNzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNDA4MjM1MTQwMzE5NToxQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIktrXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTG1YZ1BRSUVQR0NyN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJTcW1LVlNWSTV3UEVQL3NIaDJnQlA1U0FwTG9sVHVLaGpRQlNvck91WFVVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIno5bWgzY2txSk9YMEJHb1M0MVl1WksvOStvc1kzMmJlZklBd1FFNW5GOTRpRFpWWU4wM0RRS25mR2VuUFprVnRjNHp3eVdFRFUvdUN3UzBnMXJmdmhnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRSOHlqbkllN1l3SnRyRmMrWFJKemw1UkVIK0o3YytseVVoa1hVUWVURWtWQ0IvQUp5eXFWNXZpNUpFZk90YmZ3TXNlOThtSUJwektLUmRtS0ZxbmhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjE1NDA4MTYyNjE3OjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNTMyMjEyLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0xWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHTFYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxWkdzWWlvN0ZEemIxS29EdVBKcW1jSGVRcFIxZDRmTFFZRC9ray9ORitBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIzOTA3NTYyODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMjUzMjIxMzAzOVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Haywhy-Md",
  ownername:process.env.OWNER_NAME|| "Haywhy",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
