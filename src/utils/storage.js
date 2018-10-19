const prefix = "zjuqsc.dev."

const set = (key, value) => {
    return wx.setStorageSync(prefix + key, value)
}

const get = (key) => {
    return wx.getStorageSync(prefix + key)
}

const setAsync = (key, value) => {
    return wx.setStorage({
        key: prefix + key,
        data: value
    })
}

export { set, get, setAsync }