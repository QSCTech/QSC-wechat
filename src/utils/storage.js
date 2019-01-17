const prefix = "zjuqsc.prod."

const set = (key, value) => {
    return wx.setStorageSync(prefix + key, value)
}

const get = (key) => {
    return wx.getStorageSync(prefix + key)
}

const setAsync = (key, value) => {
    return new Promise((resolve, reject) => {
        wx.setStorage({
            key: prefix + key,
            data: value,
            success(res) {
                resolve(res)
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

const getAsync = (key) => {
    return new Promise((resolve, reject) => {
        wx.getStorage({
            key: prefix + key,
            success(res) {
                resolve(res.data)
            },
            fail(err) {
                reject(err)
            }
        })
    })
}

export { set, get, setAsync, getAsync }