import { notifyer } from "./notifyer.js"

const app = {
    async start() {
        try { 
            await notifyer.init()
            notifyer.notify({
                title: "Hora da pausa",
                body: "Aproveite para relaxar, ir ao banheiro e comer algo!"
            })

        }   catch (error) {
            console.log(error.message)
        }
    }
}

export {app}