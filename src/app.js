import {notifyer} from "./notifyer.js"
import {timer} from "./timer.js"
import {emitter} from "./emitter.js"

const app = {
    async start() {
        try { 
            await notifyer.init()

            emitter.on('countdown-start', () => {
                notifyer.notify({
                    title: "Hora da pausa",
                    body: "Aproveite para relaxar, ir ao banheiro e comer algo!"
                })
            })

            timer.init()

        }   catch (error) {
            console.log(error.message)
        }
    }
}

export {app}