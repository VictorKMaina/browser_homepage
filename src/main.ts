import "./styles/index.scss"
import { toggleForm } from "./form"
import { renderDate, renderTime } from "./datetime"

// Handle image form events
const imageForm = document.querySelector<HTMLFormElement>("form.addImageForm")
const imageFormCancel = imageForm?.querySelector<HTMLAnchorElement>("a.cancel")

if (imageForm) {
    imageForm.addEventListener("submit", (e) => {
        e.preventDefault()
        toggleForm(imageForm)
    })

    imageFormCancel?.addEventListener("click", () => {
        toggleForm(imageForm)
    })
}

// Set datetime on page
window.onload = () => {
    renderTime()
    renderDate()
}