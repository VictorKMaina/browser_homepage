import backgroundImages from "../backgroundImages/backgroundImages"
import { ImageError } from "../backgroundImages/error"
import { ImageCollection } from "../backgroundImages/image"
import { toggleImageForm } from "./toggleForm"

const imageForm = document.querySelector<HTMLFormElement>("form.imageForm")
const imgFormButtonToggle = document.querySelector<HTMLButtonElement>(
    "button.toggleImageForm"
)
const errorField = imageForm?.querySelector<HTMLDivElement>("div.error")

interface ImageForm {
    imageUrl: { value: string }
    decsription: { value: string }
}

function submitForm(e: Event, imageCollection: ImageCollection): void {
    e.preventDefault()
    const submittedForm = e.target as HTMLFormElement & ImageForm
    const { imageUrl, description } = submittedForm

    try {
        const image = imageCollection.createImage(
            imageUrl.value,
            description.value
        )

        console.log(image)

        imageUrl.value = ""
        description.value = ""

        if (imgFormButtonToggle) toggleImageForm(imgFormButtonToggle)
        showSuccessMessage()
    } catch (error) {
        if (errorField) {
            errorField.removeAttribute("hidden")
            errorField.innerHTML = (error as ImageError).message
        }
        console.error(error)
    }
}

const successKeyframes: PropertyIndexedKeyframes = {
    opacity: [0, 1],
    transform: ["translateY(-100%)", "translateY(0)"],
}

const successKeyframeOptions: KeyframeEffectOptions = {
    duration: 400,
    easing: "cubic-bezier(.72,.05,.29,.88)",
    fill: "forwards",
    endDelay: 2000,
    delay: 500,
}

function showSuccessMessage(): void {
    const successElement = document.querySelector("div.imageSubmitSuccess")

    if (successElement) {
        const successAnimation = successElement.animate(
            successKeyframes,
            successKeyframeOptions
        )
        successAnimation.play()

        successAnimation.finished.then(animation => {
            animation.reverse()
        })
    }
}

// showSuccessMessage()

if (imageForm) {
    imageForm.addEventListener("submit", (e) => submitForm(e, backgroundImages))
}
