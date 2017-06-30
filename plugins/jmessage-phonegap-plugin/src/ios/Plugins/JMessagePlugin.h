//	            __    __                ________
//	| |    | |  \ \  / /  | |    | |   / _______|
//	| |____| |   \ \/ /   | |____| |  / /
//	| |____| |    \  /    | |____| |  | |   _____
//	| |    | |    /  \    | |    | |  | |  |____ |
//  | |    | |   / /\ \   | |    | |  \ \______| |
//  | |    | |  /_/  \_\  | |    | |   \_________|
//
//	Copyright (c) 2012年 HXHG. All rights reserved.
//	http://www.jpush.cn
//  Created by liangjianguo
//



#import <Cordova/CDV.h>
#import <JMessage/JMessage.h>

@interface JMessagePlugin : CDVPlugin

-(void)startJMessageSDK:(CDVInvokedUrlCommand *)command;

-(void)init:(CDVInvokedUrlCommand *)command;

//--------------- JMessage Interface ---------------//

//User
-(void)userRegister:(CDVInvokedUrlCommand *)command;
-(void)userLogin:(CDVInvokedUrlCommand *)command;
-(void)userLogout:(CDVInvokedUrlCommand *)command;
-(void)getMyInfo:(CDVInvokedUrlCommand *)command;
-(void)getUserInfo:(CDVInvokedUrlCommand *)command;
-(void)getUserInfoArray:(CDVInvokedUrlCommand *)command;
-(void)updateMyPassword:(CDVInvokedUrlCommand *)command;
-(void)updateMyInfo:(CDVInvokedUrlCommand *)command;

//Message
-(void)sendSingleTextMessage:(CDVInvokedUrlCommand *)command;
-(void)sendSingleVoiceMessage:(CDVInvokedUrlCommand *)command;
-(void)sendSingleImageMessage:(CDVInvokedUrlCommand *)command;
-(void)sendSingleCustomMessage:(CDVInvokedUrlCommand *)command;

-(void)sendGroupTextMessage:(CDVInvokedUrlCommand *)command;
-(void)sendGroupVoiceMessage:(CDVInvokedUrlCommand *)command;
-(void)sendGroupImageMessage:(CDVInvokedUrlCommand *)command;
-(void)sendGroupCustomMessage:(CDVInvokedUrlCommand *)command;

//Conversation
-(void)getSingleConversationHistoryMessage:(CDVInvokedUrlCommand *)command;
-(void)getAllSingleConversation:(CDVInvokedUrlCommand *)command;
-(void)deleteSingleConversation:(CDVInvokedUrlCommand *)command;

-(void)getGroupConversationHistoryMessage:(CDVInvokedUrlCommand *)command;
-(void)getAllGroupConversation:(CDVInvokedUrlCommand *)command;
-(void)deleteGroupConversation:(CDVInvokedUrlCommand *)command;
-(void)getSingleConversation:(CDVInvokedUrlCommand *)command;
-(void)getAllConversation:(CDVInvokedUrlCommand *)command;

-(void)clearSingleUnreadCount:(CDVInvokedUrlCommand *)command;
-(void)clearGroupUnreadCount:(CDVInvokedUrlCommand *)command;

//Group
- (void)getGroupConversation:(CDVInvokedUrlCommand *)command;
-(void)createGroupIniOS:(CDVInvokedUrlCommand *)command;
-(void)updateGroupInfo:(CDVInvokedUrlCommand *)command;
-(void)getGroupInfo:(CDVInvokedUrlCommand *)command;
-(void)myGroupArray:(CDVInvokedUrlCommand *)command;
-(void)memberArray:(CDVInvokedUrlCommand *)command;
-(void)addMembers:(CDVInvokedUrlCommand *)command;
-(void)removeMembers:(CDVInvokedUrlCommand *)command;
-(void)exitGroup:(CDVInvokedUrlCommand *)command;

//Cross App method

//Cross - Converstaion
-(void)cross_sendSingleTextMessage:(CDVInvokedUrlCommand *)command;
-(void)cross_sendSingleVoiceMessage:(CDVInvokedUrlCommand *)command;
-(void)cross_sendSingleImageMessage:(CDVInvokedUrlCommand *)command;
-(void)cross_sendSingleCustomMessage:(CDVInvokedUrlCommand *)command;

-(void)cross_getSingleConversationHistoryMessage:(CDVInvokedUrlCommand *)command;
-(void)cross_deleteSingleConversation:(CDVInvokedUrlCommand *)command;
-(void)cross_clearSingleUnreadCount:(CDVInvokedUrlCommand *)command;

//Cross - User
-(void)cross_getUserInfoArray:(CDVInvokedUrlCommand *)command;


#pragma mark - JMessage SDK v2.2.0~v2.2.1 新增 API
//--------------- JMessage SDK v2.2.0~v2.2.1 新增 API ---------------//

/*
    新增：好友功能
    新增：好友备注名和备注信息设置
    新增：发送文件消息
    新增：发送位置消息
    新增：适配 iOS 10
    新增：事件
*/

# pragma mark JMSGFriendManager

-(void)getFriendList:(CDVInvokedUrlCommand *)command;//获取好友列表
-(void)sendInvitationRequest:(CDVInvokedUrlCommand *)command;//发送添加好友请求
-(void)acceptInvitation:(CDVInvokedUrlCommand *)command;//接受好友邀请
-(void)rejectInvitation:(CDVInvokedUrlCommand *)command;//拒绝好友邀请
-(void)removeFriend:(CDVInvokedUrlCommand *)command;//删除好友

#pragma mark JMSGUser

-(void)updateNoteName:(CDVInvokedUrlCommand *)command;//修改用户备注名
-(void)updateNoteText:(CDVInvokedUrlCommand *)command;//修改用户备注信息

#pragma mark JMSGConversation

-(void)sendFileMessage:(CDVInvokedUrlCommand *)command;//发送文件消息
-(void)sendLocationMessage:(CDVInvokedUrlCommand *)command;//发送地理位置消息

#pragma mark 已过时接口
// onLoginUserKicked;// 改用 onReceiveNotificationEvent 方法统一监听被踢、用户信息过期、好友等通知事件


#pragma mark - JMessage SDK v2.2.4 新增 API

#pragma mark JMSGConversation

-(void)getAllUnreadCount:(CDVInvokedUrlCommand *)command;//获取当前所有会话的未读消息的总数

#pragma mark - JMessage SDK v2.1.3 新增 API

/*
 新增：本应用和跨应用的免打扰功能；
 新增：跨应用群聊功能；
 新增：本应用和跨应用的黑名单功能；
 新增：暴露event msg作用对象的username(s),用户开发者定制event msg；
 新增：JMGGroup 增加一个属性 max_member_count，表示当前群成员最大人数；
 新增：JMGGroup 增加一个属性 ownerAppKey，表示当前群群主的appKey。
*/

#pragma mark JMessage

-(void)noDisturbList:(CDVInvokedUrlCommand *)command;//用户免打扰列表 设置全局免打扰标识。
-(void)isSetGlobalNoDisturb:(CDVInvokedUrlCommand *)command;//获取全局免打扰状态
-(void)setIsGlobalNoDisturb:(CDVInvokedUrlCommand *)command;//设置是否全局免打扰
-(void)blackList:(CDVInvokedUrlCommand *)command;//获取黑名单列表

#pragma mark JMSGUser

-(void)userSetIsNoDisturb:(CDVInvokedUrlCommand *)command;//设置用户免打扰（支持跨应用设置）
-(void)isInBlacklist:(CDVInvokedUrlCommand *)command;//获取黑名单状态
-(void)addUsersToBlacklist:(CDVInvokedUrlCommand *)command;//添加黑名单
-(void)delUsersFromBlacklist:(CDVInvokedUrlCommand *)command;//删除黑名单

-(void)cross_addUsersToBlacklist:(CDVInvokedUrlCommand *)command;//跨应用添加黑名单
-(void)cross_delUsersFromBlacklist:(CDVInvokedUrlCommand *)command;//跨应用删除黑名单

#pragma mark JMSGGroup


-(void)groupSetIsNoDisturb:(CDVInvokedUrlCommand *)command;//设置群组消息免打扰（支持跨应用设置）

@end
