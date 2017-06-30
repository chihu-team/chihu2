var exec = require('cordova/exec')

var JMessagePlugin = function () {
  const NOTI_MODE_DEFAULT = 0
  const NOTI_MODE_NO_SOUND = 1
  const NOTI_MODE_NO_VIBRATE = 2
  const NOTI_MODE_SILENCE = 3
  const NOTI_MODE_NO_NOTIFICATION = 4

  this.username = ''
  this.nickname = ''
  this.gender = ''
  this.avatarUrl = ''

  this.message = {}
  this.openedMessage = {}
  this.textMessage = {}
  this.imageMessage = {}
  this.voiceMessage = {}
  this.customMessage = {}
}

function isAndroid () {
  if (device.platform === 'Android') {
    return true
  }
  return false
}

JMessagePlugin.prototype.init = function () {}

JMessagePlugin.prototype.errorCallback = function (msg) {
  console.log('JMessagePlugin callback error:' + msg)
}

JMessagePlugin.prototype.callNative = function (name, args, sCallback, eCallback) {
  if (eCallback == null) {
    exec(sCallback, this.errorCallback, 'JMessagePlugin', name, args)
  } else {
    exec(sCallback, eCallback, 'JMessagePlugin', name, args)
  }
}

// Common API start
// Login and register API.
JMessagePlugin.prototype.register = function (username, password, sCallback, eCallback) {
  this.callNative('userRegister', [username, password], sCallback, eCallback)
}

JMessagePlugin.prototype.login = function (username, password, sCallback, eCallback) {
  this.callNative('userLogin', [username, password], sCallback, eCallback)
}

JMessagePlugin.prototype.logout = function (sCallback, eCallback) {
  this.callNative('userLogout', [], sCallback, eCallback)
}

JMessagePlugin.prototype.getMyInfo = function (sCallback, eCallback) {
  this.callNative('getMyInfo', [], sCallback, eCallback)
}

// 如果 appKey 为空，获取当前 AppKey 下的用户信息。
JMessagePlugin.prototype.getUserInfo = function (username, appKey, sCallback, eCallback) {
  this.callNative('getUserInfo', [username, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.updateMyPassword = function (oldPwd, newPwd, sCallback, eCallback) {
  this.callNative('updateMyPassword', [oldPwd, newPwd], sCallback, eCallback)
}

// 注意在更新用户头像时，Android 与 iOS 的文件路径不同，需要分别调用该方法。
JMessagePlugin.prototype.updateMyInfo = function (field, value, sCallback, eCallback) {
  if (isAndroid()) {
    if (field === 'avatar') {
      JMessagePlugin.updateMyAvatar(value, sCallback, eCallback)
    } else {
      this.callNative('updateMyInfo', [field, value], sCallback, eCallback)
    }
  } else {
    var iosField
    switch (field) {
      case 'nickname':
        iosField = 0
        break
      case 'birthday':
        iosField = 1
        break
      case 'signature':
        iosField = 2
        break
      case 'gender':
        iosField = 3
        break
      case 'region':
        iosField = 4
        break
      case 'avatar':
        iosField = 5
        break
      default:
        throw new Error('Error field.')
    }
    this.callNative('updateMyInfo', [iosField, value], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendSingleTextMessage = function (username, text, appKey, sCallback, eCallback) {
  if (appKey && !isAndroid()) {
    JMessagePlugin.cross_sendSingleTextMessage(username, appKey, text, sCallback, eCallback)
    return
  }
  this.callNative('sendSingleTextMessage', [username, text, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.sendSingleImageMessage = function (username, imageUrl, appKey, sCallback, eCallback) {
  if (appKey && !isAndroid()) {
    JMessagePlugin.cross_sendSingleImageMessage(username, appKey, imageUrl, sCallback, eCallback)
    return
  }
  this.callNative('sendSingleImageMessage', [username, imageUrl, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.sendSingleVoiceMessage = function (username, fileUrl, appKey, sCallback, eCallback) {
  if (appKey && !isAndroid()) {
    JMessagePlugin.cross_sendSingleVoiceMessage(username, appKey, fileUrl, sCallback, eCallback)
    return
  }
  this.callNative('sendSingleVoiceMessage', [username, fileUrl, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.sendSingleCustomMessage = function (username, jsonStr, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendSingleCustomMessage', [username, jsonStr, appKey], sCallback, eCallback)
  } else {
    if (appKey) {
      JMessagePlugin.cross_sendSingleCustomMessage_ios(username, appKey, '', jsonStr, sCallback, eCallback)
    } else {
      JMessagePlugin.sendSingleCustomMessage_ios(username, '', jsonStr, sCallback, eCallback)
    }
  }
}

JMessagePlugin.prototype.sendSingleLocationMessage = function (username, appKey, latitude, longitude, scale, address,
    sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendSingleLocationMessage', [username, appKey, latitude, longitude, scale, address],
            sCallback, eCallback)
  } else {
    this.callNative('sendLocationMessage', [username, appKey, '1', latitude, longitude, scale, address],
            sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendSingleFileMessage = function (username, appKey, filePath, fileName, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendSingleFileMessage', [username, appKey, filePath, fileName], sCallback, eCallback)
  } else {
    JMessagePlugin.sendFileMessage(username, appKey, '1', filePath, fileName, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendGroupTextMessage = function (groupId, text, sCallback, eCallback) {
  this.callNative('sendGroupTextMessage', [groupId, text], sCallback, eCallback)
}

JMessagePlugin.prototype.sendGroupImageMessage = function (groupId, imageUrl, sCallback, eCallback) {
  this.callNative('sendGroupImageMessage', [groupId, imageUrl], sCallback, eCallback)
}

JMessagePlugin.prototype.sendGroupVoiceMessage = function (groupId, fileUrl, sCallback, eCallback) {
  this.callNative('sendGroupVoiceMessage', [groupId, fileUrl], sCallback, eCallback)
}

JMessagePlugin.prototype.sendGroupCustomMessage = function (groupId, jsonStr, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendGroupCustomMessage', [groupId, jsonStr], sCallback, eCallback)
  } else {
    JMessagePlugin.sendGroupCustomMessage_ios(groupId, '', jsonStr, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendGroupLocationMessage = function (groupId, latitude, longitude, scale, address,
    sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendGroupLocationMessage', [groupId, latitude, longitude, scale, address],
            sCallback, eCallback)
  } else {
    JMessagePlugin.sendLocationMessage(groupId, '', '0', latitude, longitude, scale, address, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendGroupFileMessage = function (groupId, filePath, fileName, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendGroupFileMessage', [groupId, filePath, fileName], sCallback, eCallback)
    return
  }
  JMessagePlugin.sendFileMessage(groupId, '', '0', filePath, fileName, sCallback, eCallback)
}

JMessagePlugin.prototype.sendSingleTextMessageWithExtras = function (username, text, json, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendSingleTextMessageWithExtras', [username, text, json, appKey], sCallback, eCallback)
  } else {
    if (appKey) {
      JMessagePlugin.cross_sendSingleCustomMessage_ios(username, appKey, text, json, sCallback, eCallback)
    } else {
      JMessagePlugin.sendSingleCustomMessage_ios(username, text, json, sCallback, eCallback)
    }
  }
}

JMessagePlugin.prototype.sendGroupTextMessageWithExtras = function (groupId, text, extrasJson, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendGroupTextMessageWithExtras', [groupId, text, extrasJson], sCallback, eCallback)
    return
  }
  JMessagePlugin.sendGroupCustomMessage_ios(groupId, text, jsonStr, sCallback, eCallback)
}

// 获取指定 Conversation 的部分历史消息。conversationType: 'single' or 'group'
// value: username if conversation type is 'single' or groupId if conversation type is 'group'.
JMessagePlugin.prototype.getHistoryMessages = function (conversationType, value, appKey, from, limit, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getHistoryMessages', [conversationType, value, appKey, from, limit], sCallback, eCallback)
  } else {
    if (conversationType === 'single') {
      if (appKey) {
        JMessagePlugin.prototype.cross_getSingleConversationHistoryMessage(value, appKey, from, limit, sCallback, eCallback)
      } else {
        JMessagePlugin.prototype.getSingleConversationHistoryMessage(value, from, limit, sCallback, eCallback)
      }
    } else if (conversationType === 'group') {
      JMessagePlugin.getGroupConversationHistoryMessage(value, from, limit, sCallback, eCallback)
    }
  }
}

JMessagePlugin.prototype.getAllMessages = function (conversationType, value, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getAllMessages', [conversationType, value, appKey], sCallback, eCallback)
  } else {
    if (conversationType === 'single') {
      if (appKey) {
        JMessagePlugin.cross_getSingleConversationHistoryMessage(value, appKey, null, null, sCallback, eCallback)
      } else {
        JMessagePlugin.getSingleConversationHistoryMessage(value, null, null, sCallback, eCallback)
      }
    } else if (conversationType === 'group') {
      JMessagePlugin.getGroupConversationHistoryMessage(value, null, null, sCallback, eCallback)
    }
  }
}

// 发送添加好友请求
JMessagePlugin.prototype.sendInvitationRequest = function (targetUsername, targetUserAppkey, reason, sCallback, eCallback) {
  this.callNative('sendInvitationRequest', [targetUsername, targetUserAppkey, reason], sCallback, eCallback)
}

JMessagePlugin.prototype.acceptInvitation = function (targetUsername, targetUserAppkey, sCallback, eCallback) {
  this.callNative('acceptInvitation', [targetUsername, targetUserAppkey], sCallback, eCallback)
}

JMessagePlugin.prototype.declineInvitation = function (targetUsername, targetUserAppkey, reason, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('declineInvitation', [targetUsername, targetUserAppkey, reason], sCallback, eCallback)
  } else {
    this.callNative('rejectInvitation', [targetUsername, targetUserAppkey, reason], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.removeFromFriendList = function (targetUsername, targetUserAppkey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('removeFromFriendList', [targetUsername, targetUserAppkey], sCallback, eCallback)
  } else {
    this.callNative('removeFriend', [targetUsername, targetUserAppkey], sCallback, eCallback)
  }
}

// 修改当前用户好友的备注名
JMessagePlugin.prototype.updateFriendNoteName = function (friendName, friendAppKey, noteName, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('updateFriendNoteName', [friendName, friendAppKey, noteName], sCallback, eCallback)
  } else {
    this.callNative('updateNoteName', [friendName, friendAppKey, noteName], sCallback, eCallback)
  }
}

// 修改当前用户好友的备注信息
JMessagePlugin.prototype.updateFriendNoteText = function (friendName, friendAppKey, noteText, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('updateFriendNoteText', [friendName, friendAppKey, noteText], sCallback, eCallback)
  } else {
    this.callNative('updateNoteText', [friendName, friendAppKey, noteText], sCallback, eCallback)
  }
}

// 获取当前登录用户的好友列表
JMessagePlugin.prototype.getFriendList = function (sCallback, eCallback) {
  this.callNative('getFriendList', [], sCallback, eCallback)
}

JMessagePlugin.prototype.getConversationList = function (sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getConversationList', [], sCallback, eCallback)
  } else {
    JMessagePlugin.prototype.getAllConversation(sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getAllSingleConversation = function (sCallback, eCallback) {
  this.callNative('getAllSingleConversation', [], sCallback, eCallback)
}

JMessagePlugin.prototype.getAllGroupConversation = function (sCallback, eCallback) {
  this.callNative('getAllGroupConversation', [], sCallback, eCallback)
}

JMessagePlugin.prototype.deleteSingleConversation = function (username, appKey, sCallback, eCallback) {
  this.callNative('deleteSingleConversation', [username, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.deleteGroupConversation = function (groupId, sCallback, eCallback) {
  this.callNative('deleteGroupConversation', [groupId], sCallback, eCallback)
}

// sCallback：以参数形式返回 Group ID，创建成功后，创建者默认会包含在群成员中。
JMessagePlugin.prototype.createGroup = function (name, desc, usernameArr, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('createGroup', [name, desc, usernameArr.toString()], sCallback, eCallback)
  } else {
    JMessagePlugin.createGroupIniOS(name, desc, usernameArr, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getGroupIds = function (sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getGroupIDList', [], sCallback, eCallback)
  } else {
    JMessagePlugin.myGroupArray(sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getGroupInfo = function (groupId, sCallback, eCallback) {
  this.callNative('getGroupInfo', [groupId], sCallback, eCallback)
}

JMessagePlugin.prototype.updateGroupName = function (groupId, newName, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('updateGroupName', [groupId, newName], sCallback, eCallback)
  } else {
    JMessagePlugin.updateGroupInfo(groupId, newName, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.updateGroupDescription = function (groupId, newDesc, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('updateGroupDescription', [groupId, newDesc], sCallback, eCallback)
  } else {
    JMessagePlugin.updateGroupInfo(groupId, null, newDesc, sCallback, eCallback)
  }
}

// usernameArr: 用户名数组。
JMessagePlugin.prototype.addGroupMembers = function (groupId, usernameArr, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('addGroupMembers', [groupId, usernameArr.toString()], sCallback, eCallback)
  } else {
    JMessagePlugin.addMembers(groupId, usernameArr, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.removeGroupMembers = function (groupId, usernameArr, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('removeGroupMembers', [groupId, usernameArr.toString()], sCallback, eCallback)
  } else {
    JMessagePlugin.removeMembers(groupId, usernameArr, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.exitGroup = function (groupId, sCallback, eCallback) {
  this.callNative('exitGroup', [groupId], sCallback, eCallback)
}

JMessagePlugin.prototype.getGroupMembers = function (groupId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getGroupMembers', [groupId], sCallback, eCallback)
  } else {
    JMessagePlugin.memberArray(groupId, sCallback, eCallback)
  }
}

JMessagePlugin.prototype.addUsersToBlacklist = function (usernameArr, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('addUsersToBlacklist', [usernameArr.toString(), appKey], sCallback, eCallback)
  } else {
    if (appKey) {
      this.callNative('cross_addUsersToBlacklist', [usernameArr, appKey], sCallback, eCallback)
    } else {
      this.callNative('addUsersToBlacklist', [usernameArr], sCallback, eCallback)
    }
  }
}

JMessagePlugin.prototype.delUsersFromBlacklist = function (usernameArr, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('delUsersFromBlacklist', [usernameArr.toString(), appKey], sCallback, eCallback)
  } else {
    if (appKey) {
      this.callNative('cross_delUsersFromBlacklist', [usernameArr, appKey], sCallback, eCallback)
    } else {
      this.callNative('delUsersFromBlacklist', [usernameArr], sCallback, eCallback)
    }
  }
}

JMessagePlugin.prototype.getBlacklist = function (sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getBlacklist', [], sCallback, eCallback)
  } else {
    this.callNative('blackList', [], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.isInBlacklist = function (username, appkey, sCallback, eCallback) {
  this.callNative('isInBlacklist', [username, appkey], sCallback, eCallback)
}

// 设置对某个用户免打扰。isNoDisturb: 0 - 普通状态，1 - 免打扰状态。
JMessagePlugin.prototype.setUserNoDisturb = function (username, isNoDisturb, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('setUserNoDisturb', [username, isNoDisturb], sCallback, eCallback)
  } else {
    this.callNative('userSetIsNoDisturb', [username, isNoDisturb], sCallback, eCallback)
  }
}

// 获取免打扰列表，结果包含 "userList": 免打扰用户，"groupList": 免打扰群组。
JMessagePlugin.prototype.getNoDisturblist = function (sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getNoDisturblist', [], sCallback, eCallback)
  } else {
    this.callNative('noDisturblist', [], sCallback, eCallback)
  }
}

// 设置是否全局免打扰，isNoDisturb: 0 - 普通状态, 1 - 免打扰。
JMessagePlugin.prototype.setNoDisturbGlobal = function (isNoDisturb, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('setNoDisturbGlobal', [isNoDisturb], sCallback, eCallback)
  } else {
    this.callNative('setIsGlobalNoDisturb', [isNoDisturb], sCallback, eCallback)
  }
}

// 判断当前是否是全局免打扰。
JMessagePlugin.prototype.getNoDisturbGlobal = function (sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getNoDisturbGlobal', [], sCallback, eCallback)
  } else {
    this.callNative('isSetGlobalNoDisturb', [], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.setGroupNoDisturb = function (groupId, isNoDisturb, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('setGroupNoDisturb', [groupId, isNoDisturb], sCallback, eCallback)
  } else {
    this.callNative('groupSetIsNoDisturb', [groupId, isNoDisturb], sCallback, eCallback)
  }
}
// Common API end

// Android only start.
// 用于 Android 6.0 以上动态申请权限。
JMessagePlugin.prototype.requestAndroidPermission = function (permission, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('requestPermission', [permission], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.updateMyAvatar = function (avatarFileUrl, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('updateMyAvatar', [avatarFileUrl], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.updateMyAvatarByPath = function (avatarFilePath, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('updateMyAvatarByPath', [avatarFilePath], sCallback, eCallback)
  }
}

// 取得用户头像的缩略图地址，如果 username 为空，默认取得当前登录用户的头像缩略图地址。
JMessagePlugin.prototype.getUserAvatar = function (username, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getUserAvatar', [username], sCallback, eCallback)
  }
}

// 下载用户头像大图，如果 username 为空，默认为当前用户。
JMessagePlugin.prototype.getOriginalUserAvatar = function (username, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getOriginalUserAvatar', [username], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendSingleImageMessageWithExtras = function (username, imageUrl, json, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendSingleImageMessageWithExtras', [username, imageUrl, json, appKey],
            sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendSingleVoiceMessageWithExtras = function (username, fileUrl, json, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendSingleVoiceMessageWithExtras', [username, fileUrl, json, appKey],
            sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendGroupImageMessageWithExtras = function (groupId, imageUrl, extrasJson, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendGroupImageMessageWithExtras', [groupId, imageUrl, extrasJson], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.sendGroupVoiceMessageWithExtras = function (groupId, fileUrl, extrasJson, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('sendGroupVoiceMessageWithExtras', [groupId, fileUrl, extrasJson], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getLatestMessage = function (conversationType, value, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getLatestMessage', [conversationType, value, appKey], sCallback, eCallback)
  }
}

// 获取指定单聊会话中指定图片消息的原图。
JMessagePlugin.prototype.getOriginImageInSingleConversation = function (username, msgServerId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getOriginImageInSingleConversation', [username, msgServerId], sCallback, eCallback)
  }
}

// 获取指定群聊会话中指定图片消息的原图。
JMessagePlugin.prototype.getOriginImageInGroupConversation = function (groupId, msgServerId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getOriginImageInGroupConversation', [groupId, msgServerId], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.createSingleConversation = function (username, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('createSingleConversation', [username, appKey], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.createGroupConversation = function (groupId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('createGroupConversation', [groupId], sCallback, eCallback)
  }
}

// 判断单聊会话是否存在。返回值：0 - 不存在；1 - 存在。
JMessagePlugin.prototype.isSingleConversationExist = function (username, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('isSingleConversationExist', [username, appKey], sCallback, eCallback)
  }
}

// 判断群聊会话是否存在。返回值：0 - 不存在；1 - 存在。
JMessagePlugin.prototype.isGroupConversationExist = function (groupId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('isGroupConversationExist', [groupId], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getSingleConversation = function (username, appKey, sCallback, eCallback) {
  this.callNative('getSingleConversation', [username, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.setSingleConversationUnreadMessageCount = function (username, appKey, unreadMessageCount,
    sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('setSingleConversationUnreadMessageCount', [username, appKey, unreadMessageCount], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getGroupConversation = function (groupId, sCallback, eCallback) {
    this.callNative('getGroupConversation', [groupId], sCallback, eCallback)
}

JMessagePlugin.prototype.setGroupConversationUnreadMessageCount = function (groupId, unreadMessageCount,
    sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('setGroupConversationUnreadMessageCount', [groupId, unreadMessageCount], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.enterSingleConversation = function (username, appKey, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('enterSingleConversation', [username, appKey], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.enterGroupConversation = function (groupId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('enterGroupConversation', [groupId], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.exitConversation = function (sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('exitConversation', [], sCallback, eCallback)
  }
}

// 向群组中添加成员, 通过指定 AppKey 可以实现跨应用添加其他 AppKey 下用户进群组。
JMessagePlugin.prototype.addGroupMembersCrossApp = function (groupId, appKey, usernameList, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('addGroupMembersCrossApp', [groupId, appKey, usernameList], sCallback, eCallback)
  }
}

// 跨应用踢出群成员
JMessagePlugin.prototype.removeGroupMembersCrossApp = function (groupId, appKey, usernameList, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('removeGroupMembersCrossApp', [groupId, appKey, usernameList], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.getGroupMemberInfo = function (groupId, appKey, username, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getGroupMemberInfo', [groupId, appKey, username], sCallback, eCallback)
  }
}


// 获取对特定用户的免打扰状态。0 - 普通状态，1 - 免打扰状态。
JMessagePlugin.prototype.getUserNoDisturb = function (username, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getUserNoDisturb', [username], sCallback, eCallback)
  }
}

// 获取对特定群组的免打扰状态。0 - 普通状态，1 - 免打扰状态。
JMessagePlugin.prototype.getGroupNoDisturb = function (groupId, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('getGroupNoDisturb', [groupId], sCallback, eCallback)
  }
}

JMessagePlugin.prototype.setNotificationMode = function (mode, sCallback, eCallback) {
  if (isAndroid()) {
    this.callNative('setNotificationMode', [mode], sCallback, eCallback)
  }
}
// Android only end.

// Event.
JMessagePlugin.prototype.onOpenMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  this.openedMessage = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onOpenMessage', this.openedMessage)
}

JMessagePlugin.prototype.onReceiveMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  this.message = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onReceiveMessage', this.message)
}

JMessagePlugin.prototype.onReceiveTextMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  this.textMessage = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onReceiveTextMessage', this.textMessage)
}

JMessagePlugin.prototype.onReceiveImageMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  this.imageMessage = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onReceiveImageMessage', this.imageMessage)
}

JMessagePlugin.prototype.onReceiveVoiceMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  this.voiceMessage = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onReceiveVoiceMessage', this.voiceMessage)
}

JMessagePlugin.prototype.onReceiveCustomMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  this.customMessage = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onReceiveCustomMessage', this.customMessage)
}

JMessagePlugin.prototype.onSyncOfflineMessage = function (jsonStr) {
  if (isAndroid()) {
    jsonStr = JSON.stringify(jsonStr)
    var obj = JSON.parse(jsonStr)    
    cordova.fireDocumentEvent('jmessage.onSyncOfflineMessage', obj)
  } else {
    var obj = JSON.parse(jsonStr)
    cordova.fireDocumentEvent('jmessage.onSyncOfflineMessage', obj)
  }
}

JMessagePlugin.prototype.onSyncRoamingMessage = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onSyncRoamingMessage', obj)
}

JMessagePlugin.prototype.onUserPasswordChanged = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onUserPasswordChanged', obj)
}

JMessagePlugin.prototype.onUserLogout = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onUserLogout', obj)
}

JMessagePlugin.prototype.onUserDeleted = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onUserDeleted', obj)
}

JMessagePlugin.prototype.onGroupMemberAdded = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onGroupMemberAdded', obj)
}

JMessagePlugin.prototype.onGroupMemberRemoved = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onGroupMemberRemoved', obj)
}

JMessagePlugin.prototype.onGroupMemberExit = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onGroupMemberExit', obj)
}

// 当收到好友邀请
JMessagePlugin.prototype.onInviteReceived = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onInviteReceived', obj)
}

// 当发送的好友请求被接受
JMessagePlugin.prototype.onInviteAccepted = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onInviteAccepted', obj)
}

// 当对方拒绝了你的好友请求
JMessagePlugin.prototype.onInviteDeclined = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onInviteDeclined', obj)
}

// 当对方将你从好友列表中删除
JMessagePlugin.prototype.onContactDeleted = function (jsonStr) {
  jsonStr = JSON.stringify(jsonStr)
  var obj = JSON.parse(jsonStr)
  cordova.fireDocumentEvent('jmessage.onContactDeleted', obj)
}

// ---------- iOS only ----------//
/*
JPush 推送功能相关 API 说明可参照 https:## github.com/jpush/jpush-phonegap-plugin/blob/master/doc/iOS_API.md

API 统一说明：
    iOS 中跨应用接口均以 `cross_` 开头，需要传有效的 `appkey`，其余方法的 `appkey` 参数一律传 `null`
    参数 `sCallback`、`eCallback` 分别为成功、失败回调
    参数名为 `xxxArray` 则传数组，其余无特殊说明传字符串
    调用示例：`window.JMessage.funcName(args, sCallback, eCallback)`
*/

// User
JMessagePlugin.prototype.getUserInfoArray = function (usernameArray, sCallback, eCallback) {
  this.callNative('getUserInfoArray', [usernameArray], sCallback, eCallback)
}

// Conversation
JMessagePlugin.prototype.getSingleConversationHistoryMessage = function (username, from, limit, sCallback, eCallback) {
  this.callNative('getSingleConversationHistoryMessage', [username, from, limit], sCallback, eCallback)
}

JMessagePlugin.prototype.getGroupConversationHistoryMessage = function (groupId, from, limit, sCallback, eCallback) {
  this.callNative('getGroupConversationHistoryMessage', [groupId, from, limit], sCallback, eCallback)
}

JMessagePlugin.prototype.getAllConversation = function (sCallback, eCallback) {
  this.callNative('getAllConversation', [], sCallback, eCallback)
}

JMessagePlugin.prototype.getAllUnreadCount = function (sCallback, eCallback) {
  this.callNative('getAllUnreadCount', [], sCallback, eCallback)
}

JMessagePlugin.prototype.clearSingleUnreadCount = function (username, sCallback, eCallback) {
  this.callNative('clearSingleUnreadCount', [username], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_clearSingleUnreadCount = function (username, appkey, sCallback, eCallback) {
  this.callNative('cross_clearSingleUnreadCount', [username, appkey], sCallback, eCallback)
}

JMessagePlugin.prototype.clearGroupUnreadCount = function (groupId, sCallback, eCallback) {
  this.callNative('clearGroupUnreadCount', [groupId], sCallback, eCallback)
}

JMessagePlugin.prototype.sendFileMessage = function (name, appKey, single, filePath, fileName, sCallback, eCallback) {
  this.callNative('sendFileMessage', [name, appKey, single, filePath, fileName], sCallback, eCallback)
}

JMessagePlugin.prototype.sendLocationMessage = function (name, appKey, single, latitude, longitude, scale, address, sCallback, eCallback) {
  this.callNative('sendLocationMessage', [name, appKey, single, latitude, longitude, scale, address], sCallback, eCallback)
}

// Group
JMessagePlugin.prototype.createGroupIniOS = function (name, desc, memebersArray, sCallback, eCallback) {
  this.callNative('createGroupIniOS', [name, desc, memebersArray], sCallback, eCallback)
}

JMessagePlugin.prototype.updateGroupInfo = function (groupId, name, desc, sCallback, eCallback) {
  this.callNative('updateGroupInfo', [groupId, name, desc], sCallback, eCallback)
}

JMessagePlugin.prototype.myGroupArray = function (sCallback, eCallback) {
  this.callNative('myGroupArray', [], sCallback, eCallback)
}

JMessagePlugin.prototype.memberArray = function (groupId, sCallback, eCallback) {
  this.callNative('memberArray', [groupId], sCallback, eCallback)
}

JMessagePlugin.prototype.addMembers = function (groupId, memberArray, sCallback, eCallback) {
  this.callNative('addMembers', [groupId, memberArray], sCallback, eCallback)
}

JMessagePlugin.prototype.removeMembers = function (groupId, memberArray, sCallback, eCallback) {
  this.callNative('removeMembers', [groupId, memberArray], sCallback, eCallback)
}

JMessagePlugin.prototype.sendSingleCustomMessage_ios = function (username, text, extra, sCallback, eCallback) {
  this.callNative('sendSingleCustomMessage', [username, text, extra], sCallback, eCallback)
}

JMessagePlugin.prototype.sendGroupCustomMessage_ios = function (gid, text, extra, sCallback, eCallback) {
  this.callNative('sendGroupCustomMessage', [gid, text, extra], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_sendSingleCustomMessage_ios = function (username, appkey, text, extra, sCallback, eCallback) {
  this.callNative('cross_sendSingleCustomMessage', [username, appkey, text, extra], sCallback, eCallback)
}

// Cross App

JMessagePlugin.prototype.cross_sendSingleTextMessage = function (username, appKey, text, sCallback, eCallback) {
  this.callNative('cross_sendSingleTextMessage', [username, appKey, text], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_sendSingleImageMessage = function (username, appKey, imageUrl, sCallback, eCallback) {
  this.callNative('cross_sendSingleImageMessage', [username, imageUrl, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_sendSingleVoiceMessage = function (username, appKey, fileUrl, sCallback, eCallback) {
  this.callNative('cross_sendSingleVoiceMessage', [username, fileUrl, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_getSingleConversationHistoryMessage = function (username, appKey, from, limit, sCallback, eCallback) {
  this.callNative('cross_getSingleConversationHistoryMessage', [username, appKey, from, limit],
        sCallback, eCallback)
}

JMessagePlugin.prototype.cross_deleteSingleConversation = function (username, appKey, sCallback, eCallback) {
  this.callNative('cross_deleteSingleConversation', [username, appKey], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_getUserInfoArray = function (username, appkey, sCallback, eCallback) {
  this.callNative('cross_getUserInfoArray', [username, appkey], sCallback, eCallback)
}

JMessagePlugin.prototype.cross_getUserInfoArray = function (nameArray, appKey, sCallback, eCallback) {
  this.callNative('cross_getUserInfoArray', [nameArray, appKey], sCallback, eCallback)
}

// iOS handle event

JMessagePlugin.prototype.onConversationChanged = function (data) {
  try {
    var bToObj = JSON.parse(data)

    cordova.fireDocumentEvent('jmessage.onConversationChanged', bToObj)
  } catch (exception) {
    console.log('onConversationChanged ' + exception)
  }
}

JMessagePlugin.prototype.onUnreadChanged = function (data) {
  try {
    var bToObj = JSON.parse(data)
    cordova.fireDocumentEvent('jmessage.onUnreadChanged', bToObj)
  } catch (exception) {
    console.log('onUnreadChanged ' + exception)
  }
}

JMessagePlugin.prototype.onGroupInfoChanged = function (data) {
  try {
    var bToObj = JSON.parse(data)
    cordova.fireDocumentEvent('jmessage.onGroupInfoChanged', bToObj)
  } catch (exception) {
    console.log('onGroupInfoChanged ' + exception)
  }
}

JMessagePlugin.prototype.loginUserKicked = function (data) {
  try {
    var bToObj = JSON.parse(data)
    if (isAndroid()) {
      cordova.fireDocumentEvent('jmessage.loginUserKicked', bToObj)
    } else {
      cordova.fireDocumentEvent('jmessage.onLoginUserKicked', bToObj)
    }
  } catch (exception) {
    console.log('loginUserKicked ' + exception)
  }
}

JMessagePlugin.prototype.onReceiveConversationMessage = function (data) {
  try {
    var bToObj = JSON.parse(data)
  } catch (exception) {
    console.log('onConversationMessageReceived ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onReceiveMessage', bToObj)
}

JMessagePlugin.prototype.onSendMessage = function (data) {
  try {
    var bToObj = JSON.parse(data)
  } catch (exception) {
    console.log('onSendMessage ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onSendMessage', bToObj)
}

JMessagePlugin.prototype.onReceiveImageData = function (data) {
  try {
    var bToObj = JSON.parse(data)
  } catch (exception) {
    console.log('onReceiveImageData ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onReceiveImageData', bToObj)
}

JMessagePlugin.prototype.onReceiveVoiceData = function (data) {
  try {
    var bToObj = JSON.parse(data)
    console.log(bToObj)
  } catch (exception) {
    console.log('onReceiveVoiceData ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onReceiveVoiceData', bToObj)
}

JMessagePlugin.prototype.onReceiveFileData = function (data) {
  try {
    var bToObj = JSON.parse(data)
  } catch (exception) {
    console.log('onReceiveFileData ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onReceiveFileData', bToObj)
}

JMessagePlugin.prototype.onReceiveLocation = function (data) {
  try {
    var bToObj = JSON.parse(data)
  } catch (exception) {
    console.log('onReceiveLocation ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onReceiveLocation', bToObj)
}

JMessagePlugin.prototype.onReceiveNotificationEvent = function (data) {
  try {
    var bToObj = JSON.parse(data)
  } catch (exception) {
    console.log('onReceiveNotificationEvent ' + exception)
  }
  cordova.fireDocumentEvent('jmessage.onReceiveNotificationEvent', bToObj)
}
// ---------- iOS only end ----------//

if (!window.plugins) {
  window.plugins = {}
}

if (!window.plugins.jmessagePlugin) {
  window.plugins.jmessagePlugin = new JMessagePlugin()
}

module.exports = new JMessagePlugin()
