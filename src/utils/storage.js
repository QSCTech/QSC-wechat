const prefix = "zjuqsc.dev."

const set = (key, value) => {
    return wx.setStorageSync(prefix + key, value)
}

const get = (key) => {
    return wx.getStorageSync(prefix + key)
}

export default { set, get }