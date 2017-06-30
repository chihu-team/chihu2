## iOS API 说明
JPush 推送功能相关 API 说明可参照 [JPush Phonegap Plugin iOS API doc](https://github.com/jpush/jpush-phonegap-plugin/blob/master/doc/iOS_API.md)。

API 统一说明：

- iOS 中跨应用接口均以 `cross_` 开头，需要传有效的 `appkey`，其余方法的 `appkey` 参数一律传 `null`
- 参数 `successCallback`、`errorCallback` 分别为成功、失败回调
- 参数名为 `xxxArray` 则传数组，其余无特殊说明传字符串
- 调用示例：`window.JMessage.funcName(args, successCallback, errorCallback);`


目录：

- [用户操作](#user)
- [发送消息](#message)
- [会话操作](#conversation)
- [群组操作](#group)
- [跨应用接口](#cross-app-method)
- [好友管理](#friendmanager)
- [免打扰](#disturb)
- [监听事件](#documentevent)


## User

### API - register
新用户注册
#### 接口定义
	window.JMessage.register(username, password, successCallback, errorCallback);


### API - login

用户登录
#### 接口定义
	window.JMessage.login(username, password, successCallback, errorCallback);


### API - logout

当前用户退出登录
#### 接口定义
	window.JMessage.logout(successCallback, errorCallback);


### API - getMyInfo

获取我的信息（当前登录用户）
#### 接口定义
	window.JMessage.getMyInfo(successCallback, errorCallback);


### API - getUserInfo

获取某用户的信息
#### 接口定义
	window.JMessage.getUserInfo(username,successCallback, errorCallback);


### API - getUserInfoArray

获取用户详情（批量接口）
#### 接口定义
	window.JMessage.getUserInfoArray(usernameArray, successCallback, errorCallback);


### API - updateMyPassword

更新密码（当前登录用户）
#### 接口定义
	window.JMessage.updateMyPassword(oldPwd, newPwd, errorCallback);


### API - updateMyInfo（与 Android 通用）

获取我的信息（当前登录用户）
#### 接口定义
	window.JMessage.updateMyInfo(field, value, successCallback, errorCallback);
#### 参数说明
- userInfoField：需要更新的用户信息字段。包括：
	- nickname：昵称。
	- birthday：生日。
	- signature：个性签名。
	- gender：性别。
	- region：地区。
	- avatar : 头像。
- value：更新的值，当更新头像时，为图片路径。
- successCallback：获取成功的回调函数，无返回值。
- errorCallback：更新失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。


### API - updateNoteName

修改好友备注名

#### 接口定义

```
window.JMessage.updateFriendNoteName(username, appKey, noteName, successCallback, errorCallback);
```



### API - updateNoteText

修改好友备注信息

```
window.JMessage.updateFriendNoteText(username, appKey, noteText, successCallback, errorCallback);
```


## Message

### API - sendSingleTextMessage
发送单聊文本消息
#### 接口定义
	window.JMessage.sendSingleTextMessage(username, text, appKey, successCallback, errorCallback);

### API - sendSingleVoiceMessage
发送单聊语音消息
#### 接口定义
	window.JMessage.sendSingleVoiceMessage(username, text, appKey, successCallback, errorCallback);

### API - sendSingleImageMessage
发送单聊图片消息
#### 接口定义
	window.JMessage.sendSingleImageMessage(username, imageUrl, appKey, successCallback, errorCallback);

### API - sendGroupTextMessage
发送群聊文本消息
#### 接口定义
	window.JMessage.sendGroupTextMessage(groupId, text, successCallback, errorCallback);

### API - sendGroupVoiceMessage
发送群聊语音消息
#### 接口定义
	window.JMessage.sendGroupVoiceMessage (groupId, fileUrl, successCallback, errorCallback);

### API - sendGroupImageMessage
发送群聊图片消息
#### 接口定义
	window.JMessage.sendGroupImageMessage (groupId, imageUrl, successCallback, errorCallback);


## Conversation

### API - getSingleConversationHistoryMessage
获取多条单聊消息（同步接口）
#### 接口定义
	window.JMessage.getSingleConversationHistoryMessage(username, from, limit, successCallback, errorCallback);
#### 参数说明
- offset：开始的位置，null 表示从最初开始
- limit：获取的数量，null 表示不限
- 例：
  - offset = nil, limit = nil，表示获取全部。相当于 allMessages
  - offset = nil, limit = 100，表示从最新开始取 100 条记录
  - offset = 100, limit = nil，表示从最新第 100 条开始，获取余下所有记录

### API - getAllSingleConversation
获取全部单聊会话信息
#### 接口定义
	window.JMessage.getAllSingleConversation(successCallback, errorCallback);

### API - deleteSingleConversation
删除单聊会话。除了删除会话本身，还会删除该会话下所有的聊天消息。
#### 接口定义
	window.JMessage.deleteSingleConversation(username, appKey, successCallback, errorCallback);

### API - getGroupConversationHistoryMessage
获取多条群聊消息（同步接口）。参数同 [获取多条单聊消息](#api---getsingleconversationhistorymessage)
#### 接口定义
	window.JMessage.getGroupConversationHistoryMessage(groupId, from, limit, successCallback, errorCallback);

### API - getAllGroupConversation
获取全部群聊会话信息
#### 接口定义
	window.JMessage.getAllGroupConversation(successCallback, errorCallback);

### API - deleteGroupConversation
删除群聊会话
#### 接口定义
	window.JMessage.deleteGroupConversation(groupId, successCallback, errorCallback);

### API - getAllConversation
获取全部单聊、群里会话信息
#### 接口定义
	window.JMessage.getAllConversation(successCallback, errorCallback);
###  API - getAllUnreadCount

获取当前所有会话的未读消息的总数

#### 接口定义

```
window.JMessage.getAllUnreadCount(successCallback, errorCallback);
```

### API - clearSingleUnreadCount

清除单聊会话未读数
#### 接口定义
	window.JMessage.clearSingleUnreadCount(username, successCallback, errorCallback);

### API - clearGroupUnreadCount
清除群聊会话未读数
#### 接口定义
	window.JMessage.clearGroupUnreadCount(groupId, successCallback, errorCallback);


### API - sendFileMessage 

发送单聊、群聊文件消息

#### 接口定义

```
window.JMessage.sendFileMessage(name, appKey, single, filePath, fileName, successCallback, errorCallback);
```

#### 参数说明

- name：用户名或 groupId
- appkey：对方的 appkey
- single：string，单聊 "1"，群聊 "0"
- filePath：文件路径，/ 开头，不要添加 file: 等额外字符
- fileName：文件名



### API - sendLocationMessage

发送地理位置消息

#### 接口定义

```
window.JMessage.sendLocationMessage(name, appKey, single, latitude, longitude, scale, address, successCallback, errorCallback);
```

#### 参数说明

- name：用户名或 groupId
- appkey：对方的 appkey
- single：string，单聊 "1"，群聊 "0"
- latitude：string，纬度
- longitude：string，经度
- scale：缩放比例
- address：详细地址



## Group

### API - createGroupIniOS
创建群组
#### 接口定义
	window.JMessage.createGroupIniOS(name, desc, memebersArray, successCallback, errorCallback);

### API - updateGroupInfo
修改群组信息
#### 接口定义
	window.JMessage.updateGroupInfo(groupId, name, desc, successCallback, errorCallback);
#### 参数说明
- name：新名称
- desc：新描述

### API - getGroupInfo
获取群组详情（不包含群组成员）
#### 接口定义
	window.JMessage.getGroupInfo(groupId, successCallback, errorCallback);

### API - myGroupArray
获取我的群组列表
#### 接口定义
	window.JMessage.myGroupArray(successCallback, errorCallback);

### API - memberArray
获取当前群组成员列表
#### 接口定义
	window.JMessage.memberArray(groupId, successCallback, errorCallback);

### API - addMembers
添加群组成员
#### 接口定义
	window.JMessage.addMembers(groupId, memberArray, successCallback, errorCallback) ;

### API - removeMembers
删除群组成员
#### 接口定义
	window.JMessage.removeMembers(groupId, memberArray, successCallback, errorCallback);

### API - exitGroup
退出群组（当前用户）
#### 接口定义
	window.JMessage.exitGroup(groupId, successCallback, errorCallback);


## Cross App method

### API - cross_sendSingleTextMessage
发送跨应用单聊文本消息
#### 接口定义
	window.JMessage.cross_sendSingleTextMessage = function (username, appKey, text, successCallback, errorCallback);

### API - cross_sendSingleVoiceMessage
发送跨应用单聊语音消息
#### 接口定义
	window.JMessage.cross_sendSingleVoiceMessage = function (username, appKey, fileUrl, successCallback, errorCallback);

### API - cross_sendSingleImageMessage
发送跨应用单聊图片消息
#### 接口定义
	window.JMessage.cross_sendSingleImageMessage = function (username, appKey, imageUrl, successCallback, errorCallback);

### API - cross_getSingleConversationHistoryMessage
获取跨应用单聊历史消息（多条），参数同 [获取多条单聊消息](#api---getsingleconversationhistorymessage)。
#### 接口定义
	window.JMessage.cross_getSingleConversationHistoryMessage = function (username, appKey, from, limit, successCallback, errorCallback);

### API - cross_deleteSingleConversation
删除跨应用单聊会话
#### 接口定义
	window.JMessage.cross_deleteSingleConversation = function (username, appKey, successCallback, errorCallback);

### API - cross_clearSingleUnreadCount
清除跨应用单聊会话未读数
#### 接口定义
	window.JMessage.cross_clearSingleUnreadCount(username, appkey, successCallback, errorCallback);

### API - cross_getUserInfoArray
批量获取跨应用用户信息
#### 接口定义
	window.JMessage.cross_getUserInfoArray(nameArray, appKey, successCallback, errorCallback);


## FriendManager

### API - getFriendList

获取好友列表

#### 接口定义

	window.JMessage.getFriendList(successCallback, errorCallback);


#### 参数说明

- username：对方用户名
- appkey：对方所在应用appkey，不传则默认是本应用
- reason：添加好友时的备注，可不填





### API - sendInvitationRequest

发送添加好友请求

#### 接口定义

```
window.JMessage.sendInvitationRequest(username, appkey, reason, successCallback, errorCallback);
```



### API - acceptInvitation

接受好友邀请

### 接口定义

```
window.JMessage.acceptInvitation(username, appkey, successCallback, errorCallback);
```



### API - rejectInvitation

拒绝好友请求

#### 接口定义

```
window.JMessage.declineInvitation(username, appkey, reason, successCallback, errorCallback);
```



### API - removeFriend

删除好友

#### 接口定义

```
window.JMessage.removeFromFriendList(username, appkey, successCallback, errorCallback);
```



## Disturb

注：用户&群组的免打扰状态、群主 appkey、群最大成员数量在 API - getUserInfo/getGroupInfo 获取。



### API - noDisturbList 

用户免打扰列表 设置全局免打扰标识

#### 接口定义

```
window.JMessage.getNoDisturblist(successCallback, errorCallback);
```



### API - isSetGlobalNoDisturb 

获取全局免打扰状态

#### 接口定义

```
window.JMessage.getNoDisturbGlobal(successCallback, errorCallback);
```



### API - setIsGlobalNoDisturb 

设置是否全局免打扰

#### 接口定义

```
window.JMessage.setNoDisturbGlobal(isGlobalNoDisturb, successCallback, errorCallback);
```

#### 参数说明

isGlobalNoDisturb：1 是/0 否



### API - blackList 

获取黑名单列表

#### 接口定义

```
window.JMessage.getBlacklist(successCallback, errorCallback);
```



### API - userSetIsNoDisturb 

设置用户免打扰（支持跨应用设置）

#### 接口定义

```
window.JMessage.setUserNoDisturb(username, appkey, isNoDisturb, successCallback, errorCallback);
```



### API - isInBlacklist 

获取黑名单状态

#### 接口定义

```
window.JMessage.isInBlacklist(username, appkey, successCallback, errorCallback);
```



### API - addUsersToBlacklist 

添加黑名单

#### 接口定义

```
window.JMessage.addUsersToBlacklist_ios(usernamesArray, successCallback, errorCallback);
```



### API - delUsersFromBlacklist 

删除黑名单

#### 接口定义

```
window.JMessage.delUsersFromBlacklist_ios(usernamesArray, successCallback, errorCallback);
```



### API - cross_addUsersToBlacklist 

跨应用添加黑名单

#### 接口定义

```
window.JMessage.cross_addUsersToBlacklist(usernamesArray, appkey, successCallback, errorCallback);
```



### API - cross_delUsersFromBlacklist 

跨应用删除黑名单

#### 接口定义

```
window.JMessage.cross_delUsersFromBlacklist(usernamesArray, appkey, successCallback, errorCallback);
```



### API - groupSetIsNoDisturb 

设置群组消息免打扰

#### 接口定义

```
window.JMessage.groupSetIsNoDisturb(groupId, isNoDisturb, successCallback, errorCallback);
```



## DocumentEvent

##### jmessage.onConversationChanged

会话信息变更通知

收到此通知后, 建议处理: 如果 App 当前在会话列表页，刷新整个列表；如果在聊天界面，刷新聊天标题。



##### jmessage.onUnreadChanged

全局未读数变更



##### jmessage.onGroupInfoChanged

群消息变更



##### jmessage.loginUserKicked

登录被踢，已过时，改用 jmessage.onReceiveNotificationEvent



##### jmessage.onReceiveMessage

收到消息


##### jmessage.onSendMessage

发送消息

##### jmessage.onReceiveImageData

收到图片消息

##### jmessage.onReceiveVoiceData

收到声音消息

##### jmessage.onReceiveFileData

收到文件消息

##### jmessage.onReceiveLocation

收到地理信息消息

##### jmessage.onReceiveNotificationEvent

通知事件

// 用户登录状态变更事件

/// 事件类型: 登录被踢

kJMSGEventNotificationLoginKicked = 1,

/// 事件类型: 非客户端修改密码强制登出事件

kJMSGEventNotificationServerAlterPassword = 2,

/// 事件类型：用户登录状态异常事件（需要重新登录）

kJMSGEventNotificationUserLoginStatusUnexpected = 70,



/// 事件类型：当前登录用户信息变更通知事件(非客户端修改)

kJMSGEventNotificationCurrentUserInfoChange = 40,




// 免打扰事件

/// 事件类型: 免打扰变更

kJMSGEventNotificationNoDisturbChange = 37,

/// 事件类型: 黑名单变更

kJMSGEventNotificationBlacklistChange = 38,




// 好友相关事件

/// 事件类型: 好友邀请相关

kJMSGEventNotificationFriendInvitation = 5,

/// 事件类型: 收到好友邀请

kJMSGEventNotificationReceiveFriendInvitation = 51,

/// 事件类型: 对方接受了你的好友邀请

kJMSGEventNotificationAcceptedFriendInvitation = 52,

/// 事件类型: 对方拒绝了你的好友邀请

kJMSGEventNotificationDeclinedFriendInvitation = 53,

/// 事件类型: 对方将你从好友中删除

kJMSGEventNotificationDeletedFriend = 6,

/// 事件类型：非客户端修改好友关系收到好友更新事件

kJMSGEventNotificationReceiveServerFriendUpdate = 7,

// 消息事件

/// 事件类型: 群组被创建

kJMSGEventNotificationCreateGroup = 8,

/// 事件类型: 退出群组

kJMSGEventNotificationExitGroup = 9,

/// 事件类型: 群组添加新成员

kJMSGEventNotificationAddGroupMembers = 10,

/// 事件类型: 群组成员被踢出

kJMSGEventNotificationRemoveGroupMembers = 11,

/// 事件类型: 群信息更新

kJMSGEventNotificationUpdateGroupInfo = 12