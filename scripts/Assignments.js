import { getPets, getWalkers } from "./database.js"
// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()

// Function whose responsibility is to find the walker assigned to a pet
const findWalkers = (pets, allWalkers) => {
    let petWalkers = null

    for (const walker of allWalkers) {
        if (walker.id === pets.walkerId) {
            petWalkers = walkers
            return petWalkers = walkers
        }
    }

    
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML += "<ul>"

    for (const currentPet of pets) {
         const currentPetWalker = findWalkers (currentPet,walkers)
        assignmentsHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${currentPetWalker.city}
            </li>
        `
    }
    
    assignmentsHTML += "</ol>"
   
    return assignmentsHTML
}

