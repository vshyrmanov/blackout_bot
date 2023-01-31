import TeleBot from "telebot"
// import ping from "ping";
const exec = require('child_process').exec;


const bot = new TeleBot(process.env.TG_TOKEN)
const IP = process.env.IP;



// bot.on('text', msg => msg.reply.text(msg.text))
bot.on('/start', msg => {
	exec("ping -c 3 82.193.102.33", function (err, stdout, stderr) {
		// console.log(stdout);
		return bot.sendMessage(msg.from.id, `${stdout}`);
	});



})
// bot.on('/black', msg => {
// 	const testMsg = test()
// 	return bot.sendMessage(msg.from.id,`${testMsg ? "Svitlo yes" : "Svitlo NOOO"}`);
// })
// bot.on('message',  async (msg) => {
// 	const chatId = msg.from.id;
// 	const text = msg.text;
// 	if (text === '/start') {
// 		await bot.sendMessage(chatId, 'Привіт друже')
// 	}
// 	// if (text === '/black') {
// 	// 	const msg = test()
// 	// 	bot.sendMessage(chatId, `${msg ? "Sun" : "Black"}`)
// 	// }
// })

export default bot
