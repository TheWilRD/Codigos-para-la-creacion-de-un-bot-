const { CommandClient } = require('eris')

// bot creation
async function init(token) {
    const RepDMcraftBot = new CommandClient(`Bot ${token}`, { intents: ['guilds'], maxShards: 'auto',restMode: true })
    // Register the command
    RepDMcraftBot.on('ready', async () => {
        await RepDMcraftBot.bulkEditCommands([{
            name: 'lol',
            description: 'I hate discord so much you cannot believe it',
            type: 1,
        }])
        console.log(`Paste the URL below into your browser to invite your bot!\nhttps://discord.com/oauth2/authorize?client_id=${RepDMcraftBot.user.id}&scope=applications.commands%20bot&permissions=3072`)
    })
    // interaction creation event
    RepDMcraftBot.on('interactionCreate', async (interaction) => {
        if (interaction?.data?.name === 'lol') {
            await interaction.createMessage({
                content: 'Hola, My Creador me esta Desarrollando para poderte ser util.'
            })
            console.log('Self destructing...')
            process.exit(0)
        }
    })
    RepDMcraftBot.connect();
}

const tokenFromStupidCommand = process.argv[2]
init(tokenFromStupidCommand);
