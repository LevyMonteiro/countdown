import {notifyer} from "./notifyer.js"
import {timer} from "./timer.js"
import {emitter} from "./emitter.js"

const app = {
    async start() {
        try { 
            timer.init()
            // await notifyer.init()
            // notifyer.notify({
            //     title: "Hora da pausa",
            //     body: "Aproveite para relaxar, ir ao banheiro e comer algo!"
            // })

        }   catch (error) {
            console.log(error.message)
        }
    }
}

export {app}