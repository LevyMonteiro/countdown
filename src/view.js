const view = {
    render({minutes, seconds}) {
        document.body.innerHTML =  `
        <p>Próxima pausa em:</p>
        <span>${minutes}:${seconds}</span>
        `;
    }
}

export {view}