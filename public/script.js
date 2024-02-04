const sendButton = document.getElementById('enviar')
const messageBox = document.getElementById('texto')
const chat = document.getElementById('mensagens')

const socket = io()

sendButton.addEventListener("click", () => {
    if (messageBox.value !== "") {
        socket.emit("nova mensagem", messageBox.value)
        messageBox.value = ""
    }
})

socket.addEventListener("nova mensagem", msg => {
    const messageElement = document.createElement("li")
    messageElement.textContent = msg
    messageElement.classList.add("mensagem")
    chat.appendChild(messageElement)
})