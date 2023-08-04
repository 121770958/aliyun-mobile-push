# aliyun-mobile-push
阿里云移动推送SDK

### Usage
```bash
npm i aliyun-mobile-push -S
```

```javascript
const AliyunMobilePush = require('index')

const aliyunMobilePush = new AliyunMobilePush(AccessKeyId, AccessKeySecret)

aliyunMobilePush.action(opt)

opt = {
    Action: 'Push',
    AppKey: 'appkey',
    Target: 'ALL',
    TargetValue: 'All',
    PushType: 'NOTICE',
    DeviceType: 'ALL',
    Title: 'test',
    AndroidNotificationChannel: 'test',
    Body: 'test',
    AndroidPopupTitle: 'test',
    AndroidPopupBody: 'test',
    StoreOffline: true,
    AndroidOpenType: 'ACTIVITY',
    AndroidPopupActivity: 'ThirdPartMessageActivity'
}


以安卓群推送为例子
action
可以传入不同的动作，其他参数按照自己需要配置

aliyunMobilePush.action({
    Action: 'Push',
    AppKey: 'appkey',
    Target: 'ALL',
    TargetValue: 'All',
    PushType: 'NOTICE',
    DeviceType: 'ALL',
    Title: 'test',
    AndroidNotificationChannel: 'test',
    Body: 'test',
    AndroidPopupTitle: 'test',
    AndroidPopupBody: 'test',
    StoreOffline: true,
    AndroidOpenType: 'ACTIVITY',
    AndroidPopupActivity: 'ThirdPartMessageActivity'
}).then((err, res) => {
    console.log(err, res)
});
```

### new AliyunMobilePush(AccessKeyId,AccessKeySecret)

  - `AccessKeyId` \<string\> 必填，阿里云颁发给用户的访问服务所用的密钥ID。
  - `AccessKeySecret` \<string\> 必填，AccessKeySecret

构造方法，传入配置对象。

```javascript
const AliyunMobilePush = require('aliyun-mobile-push')

const aliyunMobilePush = new AliyunMobilePush(AccessKeyId, AccessKeySecret)
```



