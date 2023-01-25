import "./styles/index.scss"
import { getTime } from "./clock"

const app = document.querySelector<HTMLDivElement>("div#app")
const clockElement = app?.querySelector<HTMLDivElement>("div#clock")

if (clockElement) {
    const hours = "08"
    const minutes = "35"
    clockElement.innerHTML = `${hours}:${minutes}`
}
