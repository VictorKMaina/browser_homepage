import backgroundImages from "../backgroundImages/backgroundImages"
import { ImageCollection } from "../backgroundImages/image"

const imageForm = document.querySelector<HTMLFormElement>("form.imageForm")

function submitForm(e: Event, imageCollection: ImageCollection): void {
    e.preventDefault()
    const submittedForm = e.target as HTMLFormElement & ImageForm
    const { imageUrl, description } = submittedForm

    try {
        const image = imageCollection.createImage(imageUrl.value, description.value)
        console.log(image)
    } catch(error) {
        console.error(error)
    }
}

if (imageForm) {
    imageForm.addEventListener("submit", (e) => submitForm(e, backgroundImages))
}

interface ImageForm {
    imageUrl: { value: string }
    decsription: { value: string }
}
