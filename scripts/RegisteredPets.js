import { getPets } from "./database.js"

const pets = getPets()

export const RegisteredPets = () => {
    let petHTML = "<ul>"
    
    for (const pet of pets) {
        petsHTML += `<li>${pet.name}</li>`
    }

    petsHTML += "</ol>"

  return petsHTML
}