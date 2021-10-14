import { getWalkers } from "./database.js"
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    window.alert(`${walker.name} services ${walker.city}`)
                }
            }
        }
    }
)

const walkers = getWalkers()


export const Walkers = () => {
    let walkersHTML = "<ol>"

    for (const walker of walkers) {
        walkersHTML += `<li id="walker--${walker.id}">${walker.name}
        </li>`

    }

    walkersHTML += "</ol>"

    return walkersHTML
}

