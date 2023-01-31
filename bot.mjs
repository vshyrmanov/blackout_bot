import TeleBot from "telebot"

const bot = new TeleBot(process.env.TG_TOKEN)

bot.on('text', msg => msg.reply.text(msg.text))

export default bot
