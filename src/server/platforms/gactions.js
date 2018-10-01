import * as gactions  from 'actions-on-google'
import Session from 'newbot-formats/session/gactions'

export default (app) => {
    const action = gactions.actionssdk()

    const handle = (conv, input) => {
        const { userId } = conv.user
        const session = new Session(gactions, conv)
        return global.converse.exec(input, userId, {
            output(str, next) {
                session.send(str)
                next()
            },
            data: {
                session
            }
        })
    }
    
    action.intent('actions.intent.MAIN', handle)
    action.intent('actions.intent.TEXT', handle);

    app.post('/emulator/gactions', action)
}