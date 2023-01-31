import TeleBot from "telebot"
import Ping from "ping";

const bot = new TeleBot(process.env.TG_TOKEN)
const IP = process.env.IP;

const test = async () => {
	let res = await Ping.promise.probe(IP);
	return res.alive
}

// bot.on('text', msg => msg.reply.text(msg.text))
bot.on('message', async (msg) => {
	const chatId = msg.chat.id;
	const text = msg.text;
	if (text === '/start') {
		await bot.sendMessage(chatId, 'Привіт друже')
	}
	if (text === '/black') {
		const msg = await test()
		await bot.sendMessage(chatId, `${msg ? "Sun" : "Black"}`)
	}
})

export default bot
