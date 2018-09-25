import program from 'yargs'
import newCommand from '../commands/new'
import serveCommand from '../commands/serve'
import buildCommand from '../commands/build'
import testCommand from '../commands/test'
import deployCommand from '../commands/deploy'
import logoutCommand from '../commands/logout'
import emulatorCommand from '../commands/emulator'
import json from '../../package.json'

program
    .command('new <name>', 'create a new project', () => {}, newCommand)
    .argv

program
    .command('serve', 'start the server', () => {}, serveCommand)
    .option('p', { alias: 'port', describe: 'Listen on port (3000 by default)' })
    .option('n', { alias: 'ngrok', describe: 'Start Ngrok' })
    .help( "?" )
	.alias( "?", "help" )
    .example( "$0 serve -p 5000", "Change port to 5000" )
    .argv

program
    .command('build', 'build your chatbot skills', () => {}, buildCommand)
    .argv

program
    .command('test', 'Run units tests', () => {}, testCommand)
    .argv

program
    .command('emulator', 'Run the console emulator', () => {}, emulatorCommand)
    .option('s', { alias: 'source', describe: 'Simulate platform [messenger, line, slack, telegram, viber]' })
    .argv

program
    .command('deploy', 'Deploy your chatbot to NewBot Cloud', () => {}, deployCommand)
    .argv

program
    .command('logout', 'Logout to NewBot Cloud', () => {}, logoutCommand)
    .argv

process.on('unhandledRejection', (err) => {
    console.log(err)
})

process.on('uncaughtException', function (err) {
    console.log(err)
})