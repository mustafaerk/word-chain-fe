export const storageItem = (key, value) => {
    const object = { value, timestamp: new Date().getTime() }
    localStorage.setItem(key, JSON.stringify(object))
}

export const getStoragedItem = ({ key }) => {
    const saved = localStorage.getItem(key);
    if (saved) {
        const { timestamp } = JSON.parse(saved);
        const count = Date.now() - timestamp;
        if (count < 3600000)
            return JSON.parse(saved);
        else return '';
    }
    return '';
}