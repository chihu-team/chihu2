# Android API

- [Android API](#android-api)
	- [注册与登录](#注册与登录)
		- [register](#register)
		- [login](#login)
		- [logout](#logout)
	- [用户属性维护](#用户属性维护)
		- [getUserInfo](#getuserinfo)
		- [getMyInfo](#getmyinfo)
		- [updateMyInfo](#updatemyinfo)
		- [updateMyPassword](#updatemypassword)
		- [updateMyAvatar](#updatemyavatar)
		- [getUserAvatar](#getuseravatar)
		- [getOriginalUserAvatar](#getoriginaluseravatar)
	- [发送消息](#发送消息)
		- [sendSingleTextMessage](#sendsingletextmessage)
		- [sendSingleImageMessage](#sendsingleimagemessage)
		- [sendSingleVoiceMessage](#sendsinglevoicemessage)
		- [sendSingleCustomMessage](#sendsinglecustommessage)
		- [sendSingleLocationMessage](#sendsinglelocationmessage)
		- [sendSingleFileMessage](#sendsinglefilemessage)
		- [sendGroupTextMessage](#sendgrouptextmessage)
		- [sendGroupImageMessage](#sendgroupimagemessage)
		- [sendGroupVoiceMessage](#sendgroupvoicemessage)
		- [sendGroupCustomMessage](#sendgroupcustommessage)
		- [sendGroupLocationMessage](#sendgrouplocationmessage)
		- [sendGroupFileMessage](#sendgroupfilemessage)
	- [获取历史消息](#获取历史消息)
		- [getOfflineMessages](#getofflinemessages)
		- [getLatestMessage](#getlatestmessage)
		- [getHistoryMessages](#gethistorymessages)
		- [getAllMessages](#getallmessages)
		- [getOriginImageInSingleConversation](#getoriginimageinsingleconversation)
		- [getOriginImageInGroupConversation](#getoriginimageingroupconversation)
	- [好友关系](#好友关系)
		- [sendInvitationRequest](#sendinvitationrequest)
		- [acceptInvitation](#acceptinvitation)
		- [declineInvitation](#declineinvitation)
		- [getFriendList](#getfriendlist)
		- [removeFromFriendList](#removefromfriendlist)
		- [updateFriendNoteName](#updatefriendnotename)
		- [updateFriendNoteText](#updatefriendnotetext)
		- [接口定义](#接口定义)
		- [jmessage.onInviteReceived](#jmessageoninvitereceived)
	- [聊天会话](#聊天会话)
		- [isSingleConversationExist](#issingleconversationexist)
		- [isGroupConversationExist](#isgroupconversationexist)
		- [getConversationList](#getconversationlist)
		- [exitConversation](#exitconversation)
		- [单聊](#单聊)
			- [enterSingleConversation](#entersingleconversation)
			- [getSingleConversation](#getsingleconversation)
			- [getAllSingleConversation](#getallsingleconversation)
			- [deleteSingleConversation](#deletesingleconversation)
			- [setSingleConversationUnreadMessageCount](#setsingleconversationunreadmessagecount)
		- [群聊](#群聊)
			- [enterGroupConversation](#entergroupconversation)
			- [getGroupConversation](#getgroupconversation)
			- [getAllGroupConversation](#getallgroupconversation)
			- [deleteGroupConversation](#deletegroupconversation)
			- [setGroupConversationUnreadMessageCount](#setgroupconversationunreadmessagecount)
	- [群组](#群组)
		- [createGroup](#creategroup)
		- [getGroupIDList](#getgroupidlist)
		- [getGroupInfo](#getgroupinfo)
		- [updateGroupName](#updategroupname)
		- [updateGroupDescription](#updategroupdescription)
		- [addGroupMembers](#addgroupmembers)
		- [removeGroupMembers](#removegroupmembers)
		- [exitGroup](#exitgroup)
		- [getGroupMembers](#getgroupmembers)
	- [黑名单](#黑名单)
		- [addUsersToBlacklist](#adduserstoblacklist)
		- [delUsersFromBlacklist](#delusersfromblacklist)
		- [getBlacklist](#getblacklist)
	- [事件处理](#事件处理)
		- [消息事件](#消息事件)
			- [消息对象的 JSON 数据格式](#消息对象的-json-数据格式)
			- [jmessage.onSyncOfflineMessage（同时适用于 iOS）](#jmessageonsyncofflinemessage同时适用于-ios)
			- [jmessage.onOpenMessage](#jmessageonopenmessage)
			- [jmessage.onReceiveMessage](#jmessageonreceivemessage)
			- [jmessage.onReceiveTextMessage](#jmessageonreceivetextmessage)
			- [jmessage.onReceiveImageMessage](#jmessageonreceiveimagemessage)
			- [jmessage.onReceiveVoiceMessage](#jmessageonreceivevoicemessage)
			- [jmessage.onReceiveCustomMessage](#jmessageonreceivecustommessage)
		- [用户状态变更事件](#用户状态变更事件)
			- [jmessage.onUserPasswordChanged](#jmessageonuserpasswordchanged)
			- [jmessage.onUserLogout](#jmessageonuserlogout)
			- [jmessage.onUserDeleted](#jmessageonuserdeleted)
		- [群组事件](#群组事件)
			- [jmessage.onGroupMemberAdded](#jmessageongroupmemberadded)
			- [jmessage.onGroupMemberRemoved](#jmessageongroupmemberremoved)
			- [jmessage.onGroupMemberExit](#jmessageongroupmemberexit)
		- [好友事件](#好友事件)
			- [jmessage.onInviteReceived](#jmessageoninvitereceived)
			- [jmessage.onInviteAccepted](#jmessageoninviteaccepted)
			- [jmessage.onInviteDeclined](#jmessageoninvitedeclined)
			- [jmessage.onContactDeleted](#jmessageoncontactdeleted)

## 注册与登录
### register
用户注册。

#### 接口定义

	window.JMessage.register(username, password, successCallback, errorCallback)

#### 参数定义
- username：用户名。
- password：密码。
- successCallback：注册成功的回调函数，无返回信息。
- errorCallback：注册失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.register('username', 'password',
		function() {
			// 注册成功。
		}, function(errorStr) {
			console.log(errorStr);	// 输出错误信息。
		});

### login
用户登录。

#### 接口定义

	window.JMessage.login(username, password, successCallback, errorCallback)

#### 参数定义
- username：用户名。
- password：密码。
- successCallback：登录成功的回调函数，无返回信息。
- errorCallback：登录失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.login('username', 'password',
		function() {
			//  登录成功。
		}, function(errorStr) {
			console.log(errorStr);	// 输出错误信息。
		});

### logout
用户登出。

#### 接口定义

	window.JMessage.logout(successCallback, errorCallback)

#### 参数定义
- successCallback：登出成功的回调函数，无返回信息。
- errorCallback：登出失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.logout(function() {
			// 登出成功。
		}, function(errorStr) {
			console.log(errorStr);	// 输出错误信息。
		});


## 用户属性维护
### getUserInfo
获取用户信息。

#### 接口定义

	window.JMessage.getUserInfo(username, appKey, successCallback, errorCallback)

#### 参数说明
- username：用户名。
- appKey：目标用户所属应用的 AppKey，可以使用此参数获取不同应用下的用户信息。如果为空，默认获取当前应用下的用户信息。
- successCallback：获取成功的回调函数，返回用户信息对象的 JSON 字符串。
- errorCallback：获取失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.getUserInfo('username', null,
		function(response) {
			var userInfo = JSON.parse(response);
		}, function(errorStr) {
			console.log(errorStr);	// 输出错误信息。
		});

### getMyInfo
获取当前用户的信息。

#### 接口定义

	window.JMessage.getMyInfo(successCallback, errorCallback)

#### 参数说明
- successCallback：获取成功的回调函数，返回当前用户信息对象的 JSON 字符串。
- errorCallback：获取失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.getMyInfo(function(response) {
		var myInfo = JSON.parse(response);
	}, function(errorStr) {
		console.log(errorStr);	// 输出错误信息。
	});

### updateMyInfo
更新当前用户信息。

#### 接口定义

	window.JMessage.updateMyInfo(userInfoField, value, successCallback, errorCallback)

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

#### 代码示例

	window.JMessage.updateMyInfo('nickname', 'yourNickname',
		function() {
			// 更新成功。
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### updateMyPassword
更新当前用户密码。

#### 接口定义

	window.JMessage.updateMyPassword(oldPassword, newPassword, successCallback, errorCallback)

#### 参数说明
- oldPassword：更新前的密码。
- newPassword：更新后的密码。
- successCallback：更新成功的回调函数，无返回值。
- errorCallback：更新失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.updateMyPassword('oldPassword', 'newPassword',
		function() {
			// 更新成功。
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### updateMyAvatar
更新当前用户头像。

#### 接口定义

	window.JMessage.updateMyAvatar(avatarFileUrl, successCallback, errorCallback)

#### 参数说明
- avatarFileUrl：头像文件的 URL。
- successCallback：更新成功的回调函数，无返回值。
- errorCallback：更新失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.updateMyAvatar('avatarFileUrl', function() {
		// 更新成功。
	}, function(errorMsg) {
		console.log(errorMsg);
	});

### getUserAvatar
获取指定用户的头像缩略图。

#### 接口定义

    window.JMessage.getUserAvatar(username, successCallback, errorCallback)

#### 参数说明
- username：指定用户的用户名，如果为空，默认就为当前用户。
- successCallback：以参数形式返回图片路径。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.getUserAvatar('targetUsername', function (path) {
      // Success callback.
    }, function (response) {
      // Error callback.
    })

### getOriginalUserAvatar
获取指定用户的头像原图，如果在上传用户头像时没有做约束，调用该方法可能会导致 OOM。

#### 接口定义

    window.JMessage.getOriginalUserAvatar(username, successCallback, errorCallback)

#### 参数说明
- username：指定用户的用户名，如果为空，默认就为当前用户。
- successCallback：以参数形式返回图片路径。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.getOriginalUserAvatar('targetUsername', function (path) {
      // Success callback.
    }, function (response) {
      // Error callback.
    })

## 发送消息
### sendSingleTextMessage
发送一条单聊文本消息。

#### 接口定义

	window.JMessage.sendSingleTextMessage(username, text, appKey, successCallback, errorCallback)

#### 参数说明
- username：用户名。
- text：文本内容。
- appKey：目标用户所属应用的 AppKey。如果为空，默认发送给本应用下对应的用户。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendSingleTextMessage('username', 'content', null,
		function(response) {
			var message = JSON.parse(response)
		}, function(errorMsg) {
			console.log(errorMsg)	// 输出错误信息。
		})

### sendSingleImageMessage
发送一条单聊图片消息。

#### 接口定义

	window.JMessage.sendSingleImageMessage(username, imageUrl, appKey, successCallback, errorCallback)

#### 参数说明
- username：用户名。
- imageUrl：图片文件的 URL。
- appKey：目标用户所属应用的 AppKey。如果为空，默认发送给本应用下的用户。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendSingleImageMessage('username', 'imageUrl', null,
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendSingleVoiceMessage
发送一条单聊语音消息。

#### 接口定义

	window.JMessage.sendSingleVoiceMessage(username, voiceFileUrl, appKey, successCallback, errorCallback)

#### 参数说明
- username：用户名。
- voiceFileUrl：语音文件的 URL。
- appKey：目标用户所属应用的 AppKey。如果为空，默认发送给本应用下的用户。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendSingleVoiceMessage('username', 'voiceFileUrl', null,
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendSingleCustomMessage
发送一条单聊自定义消息。

#### 接口定义

	window.JMessage.sendSingleCustomMessage(username, jsonStr, appKey, successCallback, errorCallback)

#### 参数说明
- username：用户名。
- jsonStr：自定义消息要携带的数据的 JSON 字符串。
- appKey：目标用户所属应用的 AppKey。如果为空，默认发送给本应用下的用户。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendSingleCustomMessage('username', 'yourJsonStr', null,
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendSingleLocationMessage
发送一条单聊地址消息（可同时用于 iOS）。

#### 接口定义

    window.JMessage.sendSingleLocationMessage(username, appKey, latitude, longtitude, scale, address,
        successCallback, errorCallback)

#### 参数说明
- username：String，用户名。
- appKey：String，目标用户所属应用的 AppKey。如果为空，默认发送给本应用下的用户。
- latitude：double，纬度信息。
- longtitude：double，经度信息。
- scale：int，地图缩放比例。
- address：String，详细地址。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

### sendSingleFileMessage
发送一条单聊文件消息。

#### 接口定义

    window.JMessage.sendSingleFileMessage(username, appKey, filePath, fileName, successCallback, errorCallback)

#### 参数定义
- username：String，用户名。
- appKey：String，目标用户所属应用的 AppKey。如果为空，默认发送给本应用下的用户。
- filePath：String，文件路径。
- fileName：String，文件名称，如果为空，则默认使用文件原名称。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

### sendGroupTextMessage
发送一条群聊文本消息。

#### 接口定义

	window.JMessage.sendGroupTextMessage(groupId, text, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID，数值类型。
- text：文本内容。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendSingleTextMessage(5124132141, 'content',
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendGroupImageMessage
发送一条群聊图片消息。

#### 接口定义

	window.JMessage.sendGroupTextMessage(groupId, imageUrl, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID，数值类型。
- imageUrl：图片文件的 URL。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendGroupImageMessage(512412412, 'imageUrl',
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendGroupVoiceMessage
发送一条群聊语音消息。

#### 接口定义

	window.JMessage.sendGroupVoiceMessage(groupId, voiceFileUrl, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID，数值类型。
- voiceFileUrl：语音文件的 URL。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendGroupVoiceMessage(151231231, 'voiceFileUrl',
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendGroupCustomMessage
发送一条群聊自定义消息。

#### 接口定义

	window.JMessage.sendGroupCustomMessage(groupId, jsonStr, successCallback, errorCallback)

#### 参数说明
- groupId：long，群组 ID。
- jsonStr：自定义消息要携带的数据的 JSON 字符串。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.sendGroupCustomMessage(151231231, 'yourJsonStr',
		function(response) {
			var message = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### sendGroupLocationMessage
发送一条群聊地址消息（可同时用于 iOS）。

#### 接口定义

    window.JMessage.sendSingleLocationMessage(groupId, latitude, longtitude, scale, address,
        successCallback, errorCallback)

#### 参数说明
- groupId：long，群组 ID。
- latitude：double，纬度信息。
- longtitude：double，经度信息。
- scale：int，地图缩放比例。
- address：String，详细地址。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

### sendGroupFileMessage
发送一条群聊文件消息。

#### 接口定义

    window.JMessage.sendSingleFileMessage(groupId, filePath, fileName, successCallback, errorCallback)

#### 参数定义
- groupId：long，群组 ID。
- filePath：String，文件路径。
- fileName：String，文件名称，如果为空，则默认使用文件原名称。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

## 获取历史消息
### getOfflineMessages
获取上次离线期间收到的离线消息。

#### 接口定义

	window.JMessage.getOfflineMessages(successCallback, errorCallback)

#### 参数说明
- successCallback: 成功回调。以参数形式返回离线消息的 JSONArray。
- errorCallback：失败回调。以参数形式返回错误信息。

#### 代码示例
```javascript
window.JMessage.getOfflineMessages(function (msgArr) {
	var content = msgArr[0].content.text	// 文本消息内容
}, function (errMsg) {
	console.log(errMsg)
})
```

### getLatestMessage
获取指定会话中最近的消息。

#### 接口定义

	window.JMessage.getLatestMessage(conversationType, value, appKey, successCallback, errorCallback)

#### 参数说明
- conversationType：会话类型。有"single", "group"两种。
- value：确定指定会话的参数。如果 conversationType 为 single，即为 username；如果为 group，则为 groupId。
- appKey：当 conversationType 为 single 时，目标用户所属应用的 AppKey。如果为空，默认获得本应用下的会话消息。
- successCallback：发送成功的回调函数，以参数形式返回消息对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.getLatestMessage('single', 'targetUsername', 'targetAppKey',
		function(response) {
			var msg = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

	window.JMessage.getLatestMessage('group', 'targetGroupId', null,
		function(response) {
			var msg = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### getHistoryMessages
获取指定会话中从新到旧的部分历史消息。

#### 接口定义

	window.JMessage.getHistoryMessages(conversationType, value, appKey, from, limit, successCallback, errorCallback)

#### 参数说明
- conversationType：会话类型。有"single"，"group"两种。
- value：确定指定会话的参数。当会话类型为 single 时，为 username；会话类型为 group 时，则为 groupId。
- appKey：当 conversationType 为 single 时，目标会话用户所属应用的 AppKey。如果为空，默认获取本应用下的会话消息。
- from：从第几条开始获取历史消息。
- limit：要获取的历史消息数量。
- successCallback：发送成功的回调函数，以参数形式返回消息数组对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	// 获取从最新消息开始的 50 条历史消息。
	window.JMessage.getHistoryMessages('single', 'targetUsername', 'targetAppKey', 0, 50,
		function(response) {
			var messages = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

	window.JMessage.getHistoryMessages('group', 'targetGroupId', null, 0, 50,
		function(response) {
			var messages = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

### getAllMessages
获取指定会话中的所有消息。

#### 接口定义

	window.JMessage.getAllMessages(conversationType, value, appKey, successCallback, errorCallback)

#### 参数说明
- conversationType：String，会话类型。有"single"，"group"两种。
- value：String，确定指定会话的参数。当会话类型为 single 时，为 username；会话类型为 group 时，则为 groupId。
- appKey：String，当 conversationType 为 single 时，目标会话用户所属应用的 AppKey。如果为空，默认获取本应用下的会话消息。
- successCallback：发送成功的回调函数，以参数形式返回消息数组对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.getAllMessages('single', 'targetUsername', 'targetAppKey',
		function(response) {
			var messages = JSON.parse(response)
		}, function(errorMsg) {
			console.log(errorMsg)	// 输出错误信息。
		})

	window.JMessage.getAllMessages('group', 'targetGroupId', null,
		function(response) {
			var messages = JSON.parse(response)
		}, function(errorMsg) {
			console.log(errorMsg)	// 输出错误信息。
		})

### getOriginImageInSingleConversation
获取指定单聊会话中的指定图片消息原图，第一次调用时会从网络下载原图到本地。

#### 接口定义

    window.JMessage.getOriginImageInSingleConversation(username, serverMessageId, successCallback, errorCallback)

#### 参数说明
- username：指定会话的对方用户名。
- serverMessageId：图片消息的 serverMessageId。
- successCallback：以参数形式返回图片地址。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.getOriginImageInSingleConversation('username', 83708669, function (path) {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### getOriginImageInGroupConversation
获取指定群聊会话中的指定图片消息原图，第一次调用时会从网络下载原图到本地。

#### 接口定义

    window.JMessage.getOriginImageInGroupConversation(groupId, serverMessageId, successCallback, errorCallback)

#### 参数说明
- groupId：指定群聊会话的 Group ID。
- serverMessageId：图片消息的 serverMessageId。
- successCallback：以参数形式返回图片地址。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.getOriginImageInGroupConversation(151231241, 83708669, function (path) {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

## 好友关系
### sendInvitationRequest
发送添加好友请求。

#### 接口定义

    window.JMessage.sendInvitationReques(targetUsername, targetUserAppkey, reason, successCallback, errorCallback)

#### 参数说明
- targetUsername：String，目标用户的用户名。
- targetUserAppkey：String，目标用户的 AppKey，如果为空则默认为本应用下的用户。
- reason：申请理由。
- successCallback：成功回调。
- errorCallback：错误回调，以参数形式返回错误信息。

### acceptInvitation
接受好友请求。

#### 接口定义

    window.JMessage.acceptInvitation(targetUsername, targetUserAppkey, successCallback, errorCallback)

#### 参数说明
- targetUsername：String，目标用户的用户名。
- targetUserAppkey：String，目标用户的 AppKey，如果为空则默认为本应用下的用户。
- successCallback：成功回调。
- errorCallback：错误回调，以参数形式返回错误信息。

### declineInvitation
拒绝好友请求。

#### 接口定义

    window.JMessage.declineInvitation(targetUsername, targetUserAppkey, reason, successCallback, errorCallback)

#### 参数说明
- targetUsername：String，目标用户的用户名。
- targetUserAppkey：String，目标用户的 AppKey，如果为空则默认为本应用下的用户。
- reason：String，拒绝理由。
- successCallback：成功回调。
- errorCallback：错误回调，以参数形式返回错误信息。

### getFriendList
获取当前登录用户的好友列表。

#### 接口定义

    window.JMessage.getFriendList(successCallback, errorCallback)

#### 参数说明
- successCallback：成功回调，以参数形式返回好友信息数组的 JSON 字符串。
- errorCallback：错误回调，以参数形式返回错误信息。

### removeFromFriendList
删除好友，调用后对方会触发 onContactDeleted 事件。

#### 接口定义

    window.JMessage.removeFromFriendList(targetUsername, targetUserAppkey, successCallback, errorCallback)

#### 参数说明
- targetUsername：String，目标用户的用户名。
- targetUserAppkey：String，目标用户的 AppKey，如果为空则默认为本应用下的用户。
- successCallback：成功回调。
- errorCallback：错误回调，以参数形式返回错误信息。

### updateFriendNoteName
更新当前登录用户好友的备注名。

#### 接口定义

    window.JMessage.updateFriendNoteName(friendName, friendAppKey, noteName, successCallback, errorCallback)

#### 参数说明
- friendName：String，好友的用户名。
- friendAppKey：String，好友的 AppKey，如果为空，则默认为当前应用。
- noteName：String，要设置的备注名。
- successCallback：成功回调。
- errorCallback：错误回调，以参数形式返回错误信息。

### updateFriendNoteText
更新当前登录用户好友的备注信息。

### 接口定义

    window.JMessage.updateFriendNoteText(friendName, friendAppKey, noteText, successCallback, errorCallback)

#### 参数说明
- friendName：String，好友的用户名。
- friendAppKey：String，好友的 AppKey，如果为空，则默认为当前应用。
- noteName：String，要设置的备注名。
- successCallback：成功回调。
- errorCallback：错误回调，以参数形式返回错误信息。

### jmessage.onInviteReceived
收到好友邀请时触发。

#### 参数说明
回调函数的参数为一个 JSON 数据字符串。其格式为：

    {
        reason：'',         // 事件发生的理由，该字段由对方发起请求时所填，对方如果未填则将返回默认字符串
        fromUsername: '',   // 事件发送者的 username
        fromAppKey: ''      // 事件发送者的 AppKey
    }


## 聊天会话
### isSingleConversationExist
判断指定单聊会话是否存在。

#### 接口定义

	window.JMessage.isSingleConversationExist(username, appKey, successCallback, errorCallback)

#### 参数说明
- username：对方用户的用户名，字符串类型。
- appKey：对方用户所在应用的 AppKey，若为空则默认为当前应用。
- successCallback：以参数形式返回结果。0: 不存在；1：存在。
- errorCallback：以参数形式返回错误信息。

### isGroupConversationExist
判断指定群聊会话是否存在。

#### 接口定义

	window.JMessage.isGroupConversationExist(groupId, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID，数值类型。
- successCallback：以参数形式返回结果。0: 不存在；1：存在。
- errorCallback：以参数形式返回错误信息。

### getConversationList
获取当前用户的所有会话列表。从本地数据库获得，同步返回。

#### 接口定义

	window.JMessage.getConversationList(successCallback, errorCallback)

#### 参数说明
- successCallback：发送成功的回调函数，以参数形式返回会话数组对象的 JSON 字符串。

        [
          {
            "id": "56740fc3-25e0-468d-a490-d644470d63d2", // Conversation ID
            "latestType": "最近一条消息的类型",
            "latestText": "最近一条消息的内容",
            "targetId": "目标用户的用户名",
            "title": "会话标题",
            "type": "会话类型（single / group）",
            "unReadMsgCnt": 0,  // 未读消息数
            "lastMsgDate": 1468983461848  // 最近消息的收到时间，单位为 ms
          }
        ]

- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.getConversationList(function(response) {
		var conversations = JSON.parse(response);
	}, function(errorMsg) {
		console.log(errorMsg);	// 输出错误信息。
	});

### exitConversation
退出当前会话。在退出会话界面时需要调用该函数，与 enterSingleConversation / enterGroupConversation 函数配套使用。

#### 接口定义

	window.JMessage.exitConversation(successCallback, errorCallback)

#### 参数说明
- successCallback：发送成功的回调函数，无返回值。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.exitConversation(function() {
		// 退出成功。
	}, function(errorMsg) {
		console.log(errorMsg);	// 输出错误信息。
	});

### 单聊
#### enterSingleConversation
进入单聊会话，调用后在收到指定会话消息时不会再弹出通知。

##### 接口定义

	window.JMessage.enterSingleConversation(username, appKey, successCallback, errorCallback)

##### 参数说明
- username：目标用户的用户名。
- appKey：目标用户所属应用的 AppKey。如果为空，默认得到本应用下特定用户的单聊会话。
- successCallback：进入成功的回调函数，无返回值。
- errorCallback：进入失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.enterSingleConversation('targetUsername', 'targetAppKey',
		function() {
			// 进入会话成功。
		}, function(errorMsg) {
			console.log(errorMsg);
		});


#### getSingleConversation
获取和特定目标用户的单聊会话。

##### 接口定义

	window.JMessage.getSingleConversation(username, appKey, successCallback, errorCallback)

##### 参数说明
- username：目标用户的用户名。
- appKey：目标用户所属应用的 AppKey。如果为空，默认得到本应用下特定用户的单聊会话。
- successCallback：发送成功的回调函数，以参数形式返回会话数组对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.getSingleConversation('targetUsername', 'targetAppKey',
		function(response) {
			 var singleConversation = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});


#### getAllSingleConversation
获取当前用户的所有单聊会话。

##### 接口定义

	window.JMessage.getAllSingleConversation(successCallback, errorCallback)

##### 参数说明
- successCallback：发送成功的回调函数，以参数形式返回会话列表的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.getAllSingleConversation(function() {
		function(response) {
			 var singleConversations = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

#### deleteSingleConversation
删除特定单聊会话。

##### 接口定义

	window.JMessage.deleteSingleConversation(username, appKey, successCallback, errorCallback)

##### 参数说明
- username：目标用户名。
- appKey：目标用户所属应用的 AppKey，可以使用此参数获取和不同应用下用户的单聊会话。如果为空，默认删除和当前应用下的用户单聊会话。
- successCallback：获取成功的回调函数，无返回值。
- errorCallback：获取失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.deleteSingleConversation('targetUsername', null,
		function() {
			// 删除成功
		}, function(errorMsg) {
			console.log(errorMsg);
		});

#### setSingleConversationUnreadMessageCount
设置指定单聊会话的未读消息数。

##### 接口定义

	window.JMessage.setSingleConversationUnreadMessageCount(username, appKey, unreadCount, successCallback, errorCallback)

##### 参数说明
- username：目标用户名。
- appKey：目标用户所属应用的 AppKey，可以使用此参数获取和不同应用下用户的单聊会话。如果为空，默认删除和当前应用下的用户单聊会话。
- unreadCount：未读消息数。
- successCallback：设置成功的回调函数，无返回值。
- errorCallback：设置失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.setSingleConversationUnreadMessageCount('targetUsername', 'targetAppKey', 10,
		function() {
			// 设置成功。
		}, function(errorMsg) {
			console.log(errorMsg);
		});


### 群聊
#### enterGroupConversation
进入特定群聊会话，调用后收到指定会话消息时不会再弹出通知。

##### 接口定义

	window.JMessage.enterGroupConversation(groupId, successCallback, errorCallback)

##### 参数说明
- groupId：目标群组 ID。
- successCallback：获取成功的回调函数，无返回值。
- errorCallback：获取失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.enterGroupConversation('targetGroupId',
		function() {
			// 进入会话成功。
		}, function(errorMsg) {
			console.log(errorMsg)
		})

#### getGroupConversation
获取和特定群组的群聊会话。

##### 接口定义

	window.JMessage.getGroupConversation(groupId, successCallback, errorCallback)

##### 参数说明
- groupId：群组 ID。
- successCallback：发送成功的回调函数，以参数形式返回会话对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.getGroupConversation('targetGroupId',
		function(response) {
			var groupConversation = JSON.parse(reponse);
		}, function(errorMsg) {
			console.log(errorMsg);	// 输出错误信息。
		});

#### getAllGroupConversation
获取当前用户所有的群聊会话。

##### 接口定义

	window.JMessage.getAllGroupConversation(successCallback, errorCallback)

##### 参数说明
- successCallback：发送成功的回调函数，以参数形式返回会话列表对象的 JSON 字符串。
- errorCallback：发送失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.getAllGroupConversation(function(response) {
		var groupConversations = JSON.parse(response);
	}, function(errorMsg) {
		console.log(errorMsg);
	});

#### deleteGroupConversation
删除指定的群聊会话。

##### 接口定义

	window.JMessage.deleteGroupConversation(groupId, successCallback, errorCallback)

##### 参数说明
- groupId：群组 ID。
- successCallback：删除成功的回调函数，无返回值。
- errorCallback：删除失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.deleteGroupConversation('targetGroupId',
		function() {

		}, function(errorMsg) {
			console.log(errorMsg);
		});

#### setGroupConversationUnreadMessageCount
设置指定单聊会话的未读消息数。

##### 接口定义

	window.JMessage.setGroupConversationUnreadMessageCount(groupId, unreadCount, successCallback, errorCallback)

##### 参数说明
- groupId：群组 ID。
- unreadCount：未读消息数。
- successCallback：设置成功的回调函数，无返回值。
- errorCallback：设置失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

##### 代码示例

	window.JMessage.setGroupConversationUnreadMessageCount('targetGroupId', 10,
		function() {
			// 设置成功。
		}, function(errorMsg) {
			console.log(errorMsg);
		});

## 群组
### createGroup
创建群组。

#### 接口定义

    window.JMessage.createGroup(groupName, groupDesc, successCallback, errorCallback)

#### 参数说明
- groupName：群组名。
- groupDesc：群组描述。
- successCallback：以参数形式返回 group ID。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.createGroup('groupName', 'groupDesc', function (groupId) {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### getGroupIDList
得到当前用户加入的所有 Group ID。

#### 接口定义

    window.JMessage.getGroupIDList(successCallback, errorCallback)

#### 参数说明
- successCallback：以参数形式返回所有 Group ID 的 JSON 字符串。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.getGroupIDList(function (json) {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### getGroupInfo
获取群组信息。

#### 接口定义

    window.JMessage.getGroupInfo(groupId, successCallback, errorCallback)

#### 参数说明
- groupId：目标群组的 ID。
- successCallback：以参数形式返回群组信息的 JSON 字符串。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.getGroupInfo(1512314121, function (json) {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### updateGroupName
更新群组名称。

#### 接口定义

    window.JMessage.updateGroupName(groupId, groupNewName, successCallback, errorCallback)

#### 参数说明
- groupId：long，群组 ID。
- groupNewName：String，群组新名称。
- successCallback：无返回值。
- errorCallback：以参数形式返回错误信息。

#### 代码示例

    window.JMessage.updateGroupName(14123123, 'newName', function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### updateGroupDescription
更新群组说明。

#### 接口定义

    window.JMessage.updateGroupDescription(groupId, groupNewDesc, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID。
- groupNewDesc：群组描述。
- successCallback：无返回值。
- errorCallback：以参数形式返回错误码。

#### 代码示例

    window.JMessage.updateGroupDescription(115123121, 'newDesc', function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### addGroupMembers
向群组中添加用户。

#### 接口定义

    window.JMessage.addGroupMembers(groupId, usernameStr, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID。
- usernameStr：要添加的用户名字符串，形如：'username1,username2'。
- successCallback：无返回值。
- errorCallback：以参数形式返回错误码。

#### 代码示例

    window.JMessage.addGroupMembers(15131231, 'username1,username2', function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### removeGroupMembers
从群组中删除指定用户。

#### 接口定义

    window.JMessage.removeGroupMembers(groupId, usernameStr, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID。
- usernameStr：要删除的用户名字符串，形如：'username1,username2'。
- successCallback：无返回值。
- errorCallback：以参数形式返回错误码。

#### 代码示例

    window.JMessage.addGroupMembers(15131231, 'username1,username2', function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### exitGroup
退出指定群组。

#### 接口定义

    window.JMessage.exitGroup(groupId, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID。
- successCallback：无返回值。
- errorCallback：以参数形式返回错误码。

#### 代码示例

    window.JMessage.addGroupMembers(15131231, function () {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })

### getGroupMembers
获取指定群组中的所有用户信息。

#### 接口定义

    window.JMessage.getGroupMembers(groupId, successCallback, errorCallback)

#### 参数说明
- groupId：群组 ID。
- successCallback：以参数形式返回用户信息的 JSON 字符串。
- errorCallback：以参数形式返回错误码。

#### 代码示例

    window.JMessage.getGroupMembers(15131231, function (json) {
      // Success callback.
    }, function (errorMsg) {
      // Error callback.
    })


## 黑名单
### addUsersToBlacklist
将用户添加进黑名单。

#### 接口定义

	window.JMessage.addUsersToBlacklist(usernamesStr, successCallback, errorCallback)

#### 参数说明
- usernamesStr：用户名字符串。形如："username1, username2"。
- successCallback：添加成功的回调函数，无返回值。
- errorCallback：添加失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.addUsersToBlacklist('username1, username2',
		function() {
			// 添加成功。
		}, function(errorMsg) {
			console.log(errorMsg);
		});

### delUsersFromBlacklist
从当前用户的黑名单中删除部分用户。

#### 接口定义

	window.JMessage.delUsersFromBlacklist(usernamesStr, successCallback, errorCallback)

#### 参数说明
- usernamesStr：用户名字符串。形如："username1, username2"。
- successCallback：删除成功的回调函数，无返回值。
- errorCallback：删除失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.delUsersFromBlacklist('username1, username2',
		function() {
			// 删除成功。
		}, function(errorMsg) {
			console.log(errorMsg);
		});

### getBlacklist
获取当前用户的黑名单。

#### 接口定义

	window.JMessage.getBlacklist(successCallback, errorCallback)

#### 参数说明
- successCallback：操作成功的回调函数，以参数形式返回黑名单用户信息列表的 JSON 格式字符串。
- errorCallback：操作失败的回调函数，以参数形式返回错误信息。如果为 null，默认打印失败信息日志。

#### 代码示例

	window.JMessage.getBlacklist(function(response) {
			var userInfos = JSON.parse(response);
		}, function(errorMsg) {
			console.log(errorMsg);
		});

## 事件处理
### 消息事件
#### 消息对象的 JSON 数据格式

	{
	    "content": {
	        "text": "content",
	        "booleanExtras": { },
	        "contentType": "text",
	        "extras": {
	            "a": { }
	        },
	        "numExtras": { },
	        "stringExtras": {	// 附加字段。
						"key1": "value1",
						"key2": "value2"
					}
	    },
	    "contentType": "text",
	    "createTimeInSeconds": 1466496463,
	    "direct": "receive",
	    "fromAppkey": "fromUserAppKey",
	    "fromType": "user",
	    "fromUser": {
	        "address": "",
	        "appkey": "yourAppKey",
	        "birthday": "",
	        "gender": "0",
	        "mGender": "male",
	        "nickname": "targetNickname",
	        "noteText": "",
	        "notename": "",
	        "region": "",
	        "signature": "",
	        "userName": "testUsername",
	        "userID": testUserID,
	        "blacklist": 0,
	        "noDisturb": 0,
	        "star": 0,
					"avatarPath": "/data/user/0/io.cordova.hellocordova/files/images/small-avatar/avatarName"  // 发送用户的头像缩略图。
	    },
	    "from_platform": "a",
	    "msgTypeString": "text",
	    "serverMessageId": 73511240,
	    "status": "receive_success",
	    "targetAppkey": "targetAppkey",
	    "targetInfo": {
	        "address": "",
	        "appkey": "targetAppKey",
	        "birthday": "",
	        "gender": "0",
	        "mGender": "female",
	        "nickname": "testNickname",
	        "noteText": "",
	        "notename": "",
	        "region": "",
	        "signature": "",
	        "userName": "testUsername",
	        "userID": testUserID,
	        "blacklist": 0,
	        "noDisturb": 0,
	        "star": 0,
          "avatarPath": "/data/user/0/io.cordova.hellocordova/files/images/small-avatar/avatarName"  // 接收用户的头像缩略图。
	    },
	    "targetName": "",
	    "targetType": "single",
	    "version": 1,
	    "_id": 7,
	    "createTimeInMillis": 1466496463000
	}

#### jmessage.onSyncOfflineMessage（同时适用于 iOS）
当在上次离线期间收到消息时触发。

##### 代码示例
```javascript
document.addEventListener('jmessage.onSyncOfflineMessage', function (evnet) {
	var conversation = event.conversation	// 会话对象
	var messageArr = event.messageList		// 离线消息数组
}, false)
```

#### jmessage.onOpenMessage
点击通知栏中的消息通知时触发。

##### 代码示例

	document.addEventListener('jmessage.onOpenMessage', function(msg) {

	}, false);

#### jmessage.onReceiveMessage
收到消息时触发。

##### 代码示例

	document.addEventListener('jmessage.onReceiveMessage', function(msg) {

	}, false);

#### jmessage.onReceiveTextMessage
收到文本消息触发。

##### 代码示例

	document.addEventListener('jmessage.onReceiveTextMessage', function(msg) {

	}, false);

#### jmessage.onReceiveImageMessage
收到图片消息触发。

##### 代码示例

	document.addEventListener('jmessage.onReceiveImageMessage', function(msg) {

	}, false);

#### jmessage.onReceiveVoiceMessage
收到语音消息触发。

##### 代码示例

	document.addEventListener('jmessage.onReceiveVoicetMessage', function(msg) {

	}, false);

#### jmessage.onReceiveCustomMessage
收到自定义消息触发。

##### 代码示例

	document.addEventListener('jmessage.onReceiveCustomMessage', function(msg) {

	}, false);

### 用户状态变更事件
#### jmessage.onUserPasswordChanged
当用户密码在服务器端被修改时触发。

##### 代码示例

	document.addEventListener('jmessage.onUserPasswordChanged', yourFunction, false);

#### jmessage.onUserLogout
当用户换设备登录时触发。

##### 代码示例

	document.addEventListener('jmessage.onUserLogout', yourFunction, false);

#### jmessage.onUserDeleted
当用户被删除时触发。

##### 代码示例

	document.addEventListener('jmessage.onUserDeleted', yourFunction, false);

### 群组事件
#### jmessage.onGroupMemberAdded
群成员加群时触发。

##### 代码示例

	document.addEventListener('jmessage.onGroupMemberAdded', yourFunction, false);

#### jmessage.onGroupMemberRemoved
群成员被踢时触发。

##### 代码示例

	document.addEventListener('jmessage.onGroupMemberRemoved', yourFunction, false);

#### jmessage.onGroupMemberExit
群成员退群时触发。

##### 代码示例

	document.addEventListener('jmessage.onGroupMemberExit', yourFunction, false);

### 好友事件
#### jmessage.onInviteReceived
当收到添加好友申请。

#### jmessage.onInviteAccepted
当前用户发送的好友请求被接受。

#### jmessage.onInviteDeclined
当前用户发送的好友请求被拒绝。

#### jmessage.onContactDeleted
当对方将你从好友列表中删除。
