import TeleBot from "telebot"
import ping from "ping";

const bot = new TeleBot(process.env.TG_TOKEN)
// const IP = process.env.IP;

const test = async () => {
	let res = await ping.promise.probe("google.com");
	return res.alive
}

// bot.on('text', msg => msg.reply.text(msg.text))
bot.on('/start', msg => {
	return bot.sendMessage(msg.from.id, "Privet druzhe");
})
bot.on('/black', msg => {
	const testMsg = test()
	return bot.sendMessage(msg.from.id,`${testMsg ? "Svitlo yes" : "Svitlo NOOO"}`);
})
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
