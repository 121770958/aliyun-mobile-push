const getSign = require('../util/getSignature').sign,
    querystring = require('querystring'),
    request = require('request');

class AliyunMobilePush {
    constructor (appid, secret) {
        this.appid = appid;
        this.secret = secret;
        this.paramters = {
            Format: 'JSON',
            RegionId: 'cn-hangzhou',
            Version: '2016-08-01',
            AccessKeyId: this.appid,
            SignatureMethod: 'HMAC-SHA1',
            Timestamp: new Date().toISOString(),
            SignatureVersion: '1.0',
            SignatureNonce: Date.now()
        }
    }

    action (params) {
        let url = 'http://cloudpush.aliyuncs.com/?';

        for (let key in params) {
            if (params[key] || params[key] !== undefined) this.paramters[key] = params[key]
        }

        this.paramters.Signature = getSign(this.secret, this.paramters);

        let options = {
            method: 'get',
            url: url + querystring.stringify(this.paramters)
        };

        return new Promise((resolve, reject) => {
            request(options, (err, res, body) => {
                if (res) {
                    resolve(body)
                } else {
                    reject(err)
                }
            })
        })
    }
}

module.exports = AliyunMobilePush;
