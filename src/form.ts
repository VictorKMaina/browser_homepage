export function toggleForm(formElement: HTMLFormElement) {
    const checkFormHiddenElement = formElement.querySelector<HTMLInputElement>(
        'input#imageFormHidden[type="radio"]'
    )

    if (checkFormHiddenElement) {
        if (checkFormHiddenElement.checked === true) {
            formElement.classList.remove("hidden")
            checkFormHiddenElement.checked = false
            
        } else {
            formElement.classList.add("hidden")
            checkFormHiddenElement.checked = true
        }
    }
}