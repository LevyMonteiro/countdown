const emitter = {
    events: {},

    on(event, cb) {
        emitter.events[event] = emitter.events[event] || []
        emitter.events[event].push(cb)
    },

    emit(event, ...rest) {
        if(event in emitter.events === false)
        return;
        
        emitter.events[event].forEach((e) => {
            e(...rest)
        })
    }
}

emitter.on('click', () => console.log('cliquei'))
emitter.on('click', () => console.log('cliquei 2'))

emitter.emit('click')

export {emitter}