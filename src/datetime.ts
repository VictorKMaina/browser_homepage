import { TimeType, DateType } from "./types"

function getCurrentTime(): TimeType {
    const datetime = new Date()
    const hours = datetime.getHours()

    let hoursStr = `${hours > 12 ? hours - 12 : hours}`
    hoursStr = hoursStr.length === 1 ? `0${hoursStr}` : hoursStr

    let minutesStr = datetime.getMinutes().toString()
    minutesStr = minutesStr.length === 1 ? `0${minutesStr}` : minutesStr

    return {
        hours: hoursStr,
        minutes: minutesStr,
        amPM: hours >= 12 ? "PM" : "AM",
    }
}

export function renderTime(): void {
    const { hours, minutes, amPM } = getCurrentTime()

    const timeElement = document.querySelector("#time")
    const hoursMinElement = document.createElement("div")
    const amPMElement = document.createElement("div")

    if (timeElement) {
        hoursMinElement.innerHTML = `${hours}:${minutes}`
        amPMElement.innerHTML = amPM

        timeElement.innerHTML = ""
        timeElement.append(hoursMinElement, amPMElement)

        setInterval(() => {
            const { hours, minutes, amPM } = getCurrentTime()
            hoursMinElement.innerHTML = `${hours}:${minutes}`
            amPMElement.innerHTML = amPM
        }, 2000)
    }
}

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
]

function getCurrentDate(): DateType {
    const datetime = new Date()

    let date = datetime.getDate().toString()
    date = date.length === 1 ? `0${date}` : date

    const day = weekdays[datetime.getDay()]
    const month = months[datetime.getMonth()]
    const year = datetime.getFullYear()

    return { day, date, month, year }
}

export function renderDate(): void {
    const { day, date, month, year } = getCurrentDate()
    const dateParentElement = document.querySelector("div#date")

    const dayElement = document.createElement("div")
    const dateMonthElement = document.createElement("div")
    const yearElement = document.createElement("div")

    const createSeparator = () => {
        const separator = document.createElement("div")
        separator.classList.add("separator")
        return separator
    }

    if (dateParentElement) {
        dayElement.innerHTML = day
        dateMonthElement.innerHTML = `${date} ${month}`
        yearElement.innerHTML = year.toString()

        dateParentElement.innerHTML = ""
        dateParentElement.append(
            dayElement,
            createSeparator(),
            dateMonthElement,
            createSeparator(),
            yearElement
        )

        setInterval(() => {
            const { day, date, month, year } = getCurrentDate()
            dayElement.innerHTML = day
            dateMonthElement.innerHTML = `${date} ${month}`
            yearElement.innerHTML = year.toString()
        }, 2000)
    }
}
