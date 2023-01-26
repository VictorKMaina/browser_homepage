const imageForm = document.querySelector("form.imageForm")
const errorField = imageForm?.querySelector<HTMLDivElement>("div.error")

// Toggle image form
const imgFormToggles = document.querySelectorAll(".toggleImageForm")
const imgFormButtonToggle = imgFormToggles[1] as HTMLButtonElement | null

imgFormToggles.forEach((el) => {
    el.addEventListener("click", () => {
        if (imgFormButtonToggle) toggleImageForm(imgFormButtonToggle)
    })
})

export function toggleImageForm(buttonToggle: HTMLButtonElement): void {
    if (imageForm) {
        const isHidden = imageForm.classList.contains("hidden")

        const buttonToggleAnimation = buttonToggle.animate(
            buttonToggleKeyframes,
            buttonToggleKeyframeOptions
        )
        buttonToggleAnimation.pause()

        const formAnimation = imageForm.animate(
            formKeyframes,
            formKeyframeOptions
        )
        formAnimation.pause()


        if (isHidden) {
            imageForm.classList.remove("hidden")
            buttonToggleAnimation.play()
            formAnimation.play()
        } else {
            buttonToggleAnimation.reverse()
            formAnimation.reverse()
            formAnimation.finished.then(() => {
                imageForm.classList.add("hidden")
                errorField?.setAttribute('hidden', 'hidden')
            })

        }
    }
}

// Set details for button animation
const buttonToggleKeyframes: PropertyIndexedKeyframes = {
    transform: ["translateY(0)", "translateY(100%)"],
    opacity: [1, 0],
}
const buttonToggleKeyframeOptions: KeyframeEffectOptions = {
    duration: 200,
    easing: "ease-in-out",
    fill: "both",
    endDelay: 300,
}

// Set details for form animation
const formKeyframes: PropertyIndexedKeyframes = {
    transform: ["translateY(-40%)", "translateY(0)"],
    opacity: [0, 1],
}
const formKeyframeOptions: KeyframeEffectOptions = {
    duration: 500,
    easing: "cubic-bezier(.46,.31,.03,1)",
    fill: "both",
    delay: 100,
}
