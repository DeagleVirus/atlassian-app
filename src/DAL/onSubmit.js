export const onSubmit = (data, url, method) => {
    return new Promise((resolve, reject) => {
        AP.request({
            url: url,
            type: method || 'GET',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function (responseText) {
                resolve(responseText)
            },
            error: function (xhr, statusText, message) {
                reject(message)
            },
        })
    })
}