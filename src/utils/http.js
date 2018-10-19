const prefix_dev = 'http://localhost:3000'
const prefix_prod = 'https://www.qsc.zju.edu.cn'

import * as storage from './storage'

export const http = ({ method, url, data }) => {
    return new Promise((resolve, reject) => {
        method = method.toUpperCase()
        wx.request({
            url,
            method,
            header: {
                'Authorization': `Bearer ${storage.get("token")}` || ''
            },
            data,
            dataType: 'json',
            success: (res) => {
                try {
                    const json = JSON.parse(res.data)
                    res.data = json
                    resolve(res)
                } catch (error) {
                    resolve(res)
                }
            },
            fail: (err) => { reject(err) }
        })
    })
}