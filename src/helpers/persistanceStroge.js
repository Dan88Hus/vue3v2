export const getItem = key => {
    try {
        return JSON.parse(localStorage.getItem(key))
    } catch (error) {
        console.log("error in helper function for localStorage ", error)
        return null
    }
}

export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
        console.log("error in helper function for set in localStorage ", error)
        return null
    }
}