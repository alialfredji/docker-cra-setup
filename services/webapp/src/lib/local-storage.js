
export const setItem = (key, value) => {
    if (process.env.SSR) {
        return
    }
    localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key) => {
    if (process.env.SSR) {
        return
    }
    return JSON.parse(localStorage.getItem(key))
}

export const removeItem = (key) => {
    if (process.env.SSR) {
        return
    }
    return localStorage.removeItem(key)
}

export default { setItem, getItem, removeItem }
