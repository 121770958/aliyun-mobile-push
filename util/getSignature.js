const crypto = require('crypto');
exports.sign = (accessKeySecret, param) => {
    let query = []

    for (let key in param) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(param[key]))
    }

    query.sort();

    let str = query.join('&');

    let stringToSign = 'GET&%2F&' + encodeURIComponent(str);

    let signature = crypto
        .createHmac('sha1', accessKeySecret + '&')
        .update(stringToSign)
        .digest('base64');

    return signature
}

