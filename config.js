const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_10_44_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDY4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA5NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUyLFxuICAgICAgICA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODYsXG4gICAgICAgIDgsXG4gICAgICAgIDYxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ5LFxuICAgICAgICA5NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI0LFxuICAgICAgICA5OSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA2LFxuICAgICAgICA2OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExMCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTMxLFxuICAgICAgICAzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDM1LFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjE4LFxuICAgICAgICA0NixcbiAgICAgICAgMTUsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTczLFxuICAgICAgICA2NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OSxcbiAgICAgICAgNDksXG4gICAgICAgIDc2LFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDEyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDY4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgNyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDc2LFxuICAgICAgICAzMixcbiAgICAgICAgMTI1LFxuICAgICAgICA0MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE3LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDEzM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiV3k0TVdKZTA4bVVRZXd0YkJqYXppWW53Zll5aGVYdnFYNGlBaUVmSnFtUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV2FSZHZQZThTQWlxem05MG1fLXRGd1wiLFxuICBcInBob25lSWRcIjogXCI1MmNjYTM5My1jMWYzLTRiNjktYjY2ZC00NDRkYjA5YzljZjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjksXG4gICAgICAyMzAsXG4gICAgICAyNTEsXG4gICAgICAyLFxuICAgICAgMTk3LFxuICAgICAgMTkzLFxuICAgICAgMTg5LFxuICAgICAgMTIxLFxuICAgICAgNjYsXG4gICAgICAyNTUsXG4gICAgICA0NyxcbiAgICAgIDE4NixcbiAgICAgIDk3LFxuICAgICAgMTIwLFxuICAgICAgOTUsXG4gICAgICA0NixcbiAgICAgIDAsXG4gICAgICAxNDcsXG4gICAgICAyNTIsXG4gICAgICAxNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMyxcbiAgICAgIDU3LFxuICAgICAgMTg0LFxuICAgICAgODksXG4gICAgICAyMixcbiAgICAgIDExMSxcbiAgICAgIDE2NixcbiAgICAgIDU3LFxuICAgICAgNjYsXG4gICAgICAyMjMsXG4gICAgICA5NSxcbiAgICAgIDkwLFxuICAgICAgOTUsXG4gICAgICAxMTgsXG4gICAgICAxNzEsXG4gICAgICAyMjEsXG4gICAgICAyMzgsXG4gICAgICAxMTQsXG4gICAgICAxNDcsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJLTEEzNlhTR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzY4NjQ2MDk2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQ29jb21lbG9uXCIsXG4gICAgXCJsaWRcIjogXCIyMzMzOTMzMjExODk1MzU6MTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU9neDZvR0VKQzRtcnNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJWME5JUzBxSVZNREdaMmNvRWY1WUNEZlZjbzRSNERKZnJuVk9CeWpCSlYwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInQ0b0RWUkFtWDJySWhzYTZwZG1VcGtnbFFUNEsyazdIeW43MDkvdXpLajZEM3hhMFJObWJySXV4bFlrN21mZjZsZnYyM0w5bzFYOTR3ZU1FbVpLb0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9GVnIwdTlkaElCSWwrNURYaWdXc2RlTFJReXRwRHlWZ1d6bS8zNTBNZXV5RVhOZEYxUHVlUXhOYkEzd25YRGI1aTlqUHJHUXJxMnU4ajVaOGlwM2p3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc2ODY0NjA5NjoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDc3Nzg3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUZTU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRlNTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiQzIrUjdERHhPR29IZVB4V084RWExQjF0U0x1YTd3MXlNT3pJTTBSL25oVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjk5ODYwNTQ0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMjgyNDQ1NDI0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
