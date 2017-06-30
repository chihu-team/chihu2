# JMessage PhoneGap / Cordova Plugin

[![release](https://img.shields.io/badge/release-2.4.9-blue.svg)](https://github.com/jpush/jmessage-phonegap-plugin/releases)
[![platforms](https://img.shields.io/badge/platforms-iOS%7CAndroid-lightgrey.svg)](https://github.com/jpush/jmessage-phonegap-plugin)
[![QQ Group](https://img.shields.io/badge/QQ%20Group-413602425-red.svg)](https://github.com/jpush/jmessage-phonegap-plugin)
[![weibo](https://img.shields.io/badge/weibo-JPush-blue.svg)](http://weibo.com/jpush?refer_flag=1001030101_&is_all=1)

JMessage PhoneGap / Cordova Plugin 是基于[极光 IM](https://docs.jiguang.cn/jmessage/guideline/jmessage_guide/) 的 Cordova 插件，目前支持 iOS 和 Android 平台。

> 注：2.3.0 版本以后仅支持 IM 功能，需要消息推送功能需要单独集成 [JPush PhoneGap Plugin](https://github.com/jpush/jpush-phonegap-plugin) 插件。2.3.0 版本以前的插件包含了 JPush PhoneGap Plugin 的全部功能，不需要单独集成。

该插件是直接基于原生 SDK，以 JPush 技术为基础，共享 JPush 的网络长连接，在保留了 JPush 全部功能的基础上增加了 IM 功能。集成 JMessage 服务的应用，从客户端 SDK，到服务端 REST API，Web 控制台，都具备并且兼容 JPush 的全部功能。JPush 用户可以直接集成 JMessage SDK，平滑升级到极光IM，让应用具备聊天功能，并且支持后台挂起，无需担心一般 Web IM SDK 在应用退到后台后就无法收到聊天消息的问题。

若只是需要简单的聊天功能，可优先考虑使用 [JMessage Web SDK](https://docs.jiguang.cn/jmessage/client/im_sdk_js_v2/)。

## 集成步骤
- 在线安装

  ```
  cordova plugin add jmessage-phonegap-plugin --variable APP_KEY=your_app_key
  ```

  或

  ```
  cordova plugin add https://github.com/jpush/jmessage-phonegap-plugin.git --variable APP_KEY=your_app_key
  ```
- 本地安装

  ```
  cordova plugin add <Plugin Path> --variable APP_KEY=your_app_key
  ```

## API
- [Android](/doc/Android_API.md)
- [iOS](/doc/iOS_API.md)

## Demo
插件项目中的 */example* 目录下包含一个简单的示例，如果想参考可以将目录下的所有文件拷贝到具体 Cordova 项目的 */assets/www/* 目录下。

## 常见问题
若要使用 CLI 来编译项目，注意应使用 *cordova compile* 而不是 *cordova build* 命令，因为 *cordova build* 可能会清除对插件文件中 AndroidManifest.xml 文件的修改。
具体的 Cordova CLI 用法可参考 [Cordova CLI 官方文档](https://cordova.apache.org/docs/en/latest/reference/cordova-cli/index.html)。

### Android
- Eclipse 中 import PhoneGap 工程之后出现：*Type CallbackContext cannot be resolved to a type*。

  解决方案：Eclipse 中右键单击工程名，Build Path -> Config Build Path -> Projects -> 选中工程名称 -> CordovaLib -> 点击 add。

### iOS
- 收不到推送：请首先按照正确方式再次配置证书、描述文件，可参考 [iOS 证书设置指南](https://docs.jiguang.cn/jpush/client/iOS/ios_cer_guide/)。
- 设置 PushConfig.plist:
- APP_KEY：应用标识
- CHANNEL：渠道标识
- IsProduction：是否为生产环境
- IsIDFA：是否使用 IDFA 启动 SDK

## 更多
- QQ 群：413602425
- [极光官网文档](http://docs.jiguang.cn/guideline/jmessage_guide/)
- 有问题可访问[极光社区](http://community.jiguang.cn/)搜索和提问
