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


#import "JMessageHelper.h"
#import "JMessageDefine.h"
#import <objc/runtime.h>
#import <UserNotifications/UserNotifications.h>


@interface JMessageHelper ()

@end

@implementation JMessageHelper

+ (id)shareInstance {
  static JMessageHelper *instance = nil;
  static dispatch_once_t onceToken;
  dispatch_once(&onceToken, ^{
    instance = [[JMessageHelper alloc] init];
  });
  return instance;
}


-(void)initJMessage:(NSDictionary*)launchOptions{

    NSString *plistPath = [[NSBundle mainBundle] pathForResource:JMessageConfig_FileName ofType:@"plist"];
    if (plistPath == nil) {
        NSLog(@"error: JMessageConfig.plist ");
        assert(0);
    }

    NSMutableDictionary *plistData = [[NSMutableDictionary alloc] initWithContentsOfFile:plistPath];
    NSString *appkey       = [plistData valueForKey:JMessageConfig_Appkey];
    NSString *channel      = [plistData valueForKey:JMessageConfig_Channel];
    NSNumber *isProduction = [plistData valueForKey:JMessageConfig_IsProduction];

    // init third-party SDK
    [JMessage addDelegate:self withConversation:nil];
    [JMessage setupJMessage:launchOptions
                     appKey:appkey
                    channel:channel
           apsForProduction:[isProduction boolValue]
                   category:nil];

}

- (void)onReceiveMessage:(JMSGMessage *)message error:(NSError *)error{
    NSString *jsonString = [message toJsonString];
    NSMutableDictionary *dict = [NSMutableDictionary new];
    [dict setValue:message.msgId forKey:KEY_MSGID];
    NSError *decodeeError;
    NSDictionary *msgBody = [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  
    if (decodeeError == nil) {
      [dict setValue:msgBody forKey:KEY_CONTENT];
    }
  
    [dict setValue:[NSString stringWithFormat:@"%ld",(long)message.contentType] forKey:KEY_CONTENTTYPE];

    if (message.contentType == kJMSGContentTypeImage) {
        [(JMSGImageContent*)message.content thumbImageData:^(NSData *data, NSString *objectId, NSError *decodeeError) {
            if (!error) {
                if (data) {
                    NSString *resourcePath;
                    Ivar ivar = class_getInstanceVariable([message.content class], "_resourcePath");
                    resourcePath = object_getIvar(message.content, ivar);
                    [dict setValue:objectId     forKey:@"objectId"];
                    [dict setValue:[self getFullPathWith: resourcePath] forKey:@"resourcePath"];
                    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageReceiveImageData object:dict];
                }
            }
        }];
    }

    if (message.contentType == kJMSGContentTypeVoice) {
        [(JMSGVoiceContent*)message.content voiceData:^(NSData *data, NSString *objectId, NSError *error) {
            if (!error) {
                if (data) {
                    NSString *resourcePath;
                    Ivar ivar = class_getInstanceVariable([message.content class], "_resourcePath");
                    resourcePath = object_getIvar(message.content, ivar);
                    [dict setValue:objectId     forKey:@"objectId"];
                    [dict setValue:[self getFullPathWith:resourcePath] forKey:@"resourcePath"];
                    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageReceiveVoiceData object:dict];
                }
            }

        }];
    }

    if (message.contentType == kJMSGContentTypeFile) {
        [(JMSGFileContent*)message.content fileData:^(NSData *data, NSString *objectId, NSError *error) {
            if (!error) {
                if (data) {
                    NSString *resourcePath;
                    Ivar ivar = class_getInstanceVariable([message.content class], "_resourcePath");
                    resourcePath = object_getIvar(message.content, ivar);
                    [dict setValue:objectId     forKey:@"objectId"];
                    [dict setValue:[self getFullPathWith: resourcePath] forKey:@"resourcePath"];
                    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageReceiveFileData object:dict];
                }
            }
        }];
    }

    if (message.contentType == kJMSGContentTypeLocation) {
        JMSGLocationContent *locContent = (JMSGLocationContent*)message.content;
        [dict setValue:[NSString stringWithFormat:@"%@",locContent.latitude]  forKey:@"latitude"];
        [dict setValue:[NSString stringWithFormat:@"%@",locContent.longitude] forKey:@"longitude"];
        [dict setValue:[NSString stringWithFormat:@"%@",locContent.scale]     forKey:@"scale"];
        [dict setValue:[NSString stringWithFormat:@"%@",locContent.address]   forKey:@"address"];
        [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageReceiveLocationData object:dict];
    }

    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageReceiveMessage object:dict];
}

- (NSString *)getFullPathWith:(NSString *) path {
    NSString * homeDir = NSHomeDirectory();
    return [NSString stringWithFormat:@"%@/Documents/%@", homeDir,path];
}

- (void)onSendMessageResponse:(JMSGMessage *)message error:(NSError *)error {
    NSMutableDictionary * dict = [NSMutableDictionary new];
    [dict setValue:message.msgId forKey:KEY_MSGID];

    if (error == nil) {
        dict[KEY_RESPONE] = @"send message sucess";
    }else{
        dict[KEY_RESPONE]      = @"send message fail";
        dict[KEY_ERRORCODE]    = [NSNumber numberWithLong:error.code];
        dict[KEY_ERRORDESCRIP] = error.description;
    }
    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageSendMessageRespone object:dict];
}

- (void)onReceiveMessageDownloadFailed:(JMSGMessage *)message{
    NSLog(@"onReceiveMessageDownloadFailed");
}

#pragma mark - Conversation 回调

- (void)onConversationChanged:(JMSGConversation *)conversation{
    NSMutableDictionary * dict = [NSMutableDictionary new];
    dict = [conversation conversationToDictionary];
    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageConversationChanged object:dict];
}

- (void)onUnreadChanged:(NSUInteger)newCount{
    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageUnreadChanged object:[NSNumber numberWithUnsignedInteger:newCount]];
}

- (void)onSyncRoamingMessageConversation:(JMSGConversation *)conversation {
  [[NSNotificationCenter defaultCenter] postNotificationName: kJJMessageSyncRoamingMessage object: [conversation conversationToDictionary]];
}

- (void)onSyncOfflineMessageConversation:(JMSGConversation *)conversation offlineMessages:(NSArray JMSG_GENERIC ( __kindof JMSGMessage *) *)offlineMessages {
  NSMutableDictionary *callBackDic = @{}.mutableCopy;
  callBackDic[@"conversation"] = [conversation conversationToDictionary];
  NSMutableArray *messageArr = @[].mutableCopy;
  for (JMSGMessage *message in offlineMessages) {
    [messageArr addObject: [message messageToDictionary]];
  }
  callBackDic[@"messageList"] = messageArr;
  [[NSNotificationCenter defaultCenter] postNotificationName: kJJMessageSyncOfflineMessage object: callBackDic];
}
#pragma mark - Group 回调

- (void)onGroupInfoChanged:(JMSGGroup *)group{
    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageGroupInfoChanged object:[group groupToDictionary]];
}

#pragma mark - User 回调

-(void)onLoginUserKicked{
    [[NSNotificationCenter defaultCenter] postNotificationName:kJJMessageLoginUserKicked object:nil];
}

@end


#pragma mark - category

@implementation NSDictionary (JPush)
-(NSString*)toJsonString{
    NSError  *error;
    NSData   *data       = [NSJSONSerialization dataWithJSONObject:self options:0 error:&error];
    NSString *jsonString = [[NSString alloc]initWithData:data encoding:NSUTF8StringEncoding];
    return jsonString;
}
@end

@implementation NSString (JPush)
-(NSMutableDictionary*)toDictionary{
    NSError             *error;
    NSData              *jsonData = [self dataUsingEncoding:NSUTF8StringEncoding];
    NSMutableDictionary *dict     = [NSJSONSerialization JSONObjectWithData:jsonData options:0 error:&error];
    return dict;
}
@end

@implementation JMSGConversation (JPush)
-(NSMutableDictionary*)conversationToDictionary{
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    if ([self.target isKindOfClass:[JMSGUser class]]) {
        JMSGUser *user = self.target;
        dict = [user userToDictionary];
    }else{
        JMSGGroup *group = self.target;
        dict = [group groupToDictionary];
    }
    dict[KEY_LASTMESSAGE] = self.latestMessageContentText;
    dict[KEY_UNREADCOUNT] = self.unreadCount;
    return dict;
}


@end

@implementation JMSGUser (JPush)
-(NSMutableDictionary*)userToDictionary{
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    dict[KEY_USERNAME]    = self.username;
    dict[KEY_NICKNAME]    = self.nickname;
    dict[KEY_AVATAR]      = self.avatar;
    dict[KEY_GENDER]      = [NSNumber numberWithInteger:self.gender];
    dict[KEY_BIRTHDAY]    = self.birthday;
    dict[KEY_REGION]      = self.region;
    dict[KEY_SIGNATURE]   = self.signature;
    dict[KEY_APP_KEY]     = self.appKey;
    dict[KEY_NOTE_NAME]   = self.noteName;
    dict[KEY_NOTE_TEXT]   = self.noteText;
    dict[KEY_NO_DISTURB]  = [NSNumber numberWithBool:self.isNoDisturb];
    dict[@"isFriend"]   = [NSString stringWithFormat:@"%d",self.isFriend];
    return dict;
}
@end

@implementation JMSGGroup (JPush)
-(NSMutableDictionary*)groupToDictionary{
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    dict[KEY_GROUP_GID]   = self.gid;
    dict[KEY_GROUP_NAME]  = self.name;
    dict[KEY_GROUP_DESC]  = self.desc;
    dict[KEY_GROUP_LEVEL] = self.level;
    dict[KEY_GROUP_GLAG]  = self.flag;
    dict[KEY_GROUP_OWNER] = self.owner;
    dict[KEY_GROUP_OWNERAPPKEY] = self.ownerAppKey;
    dict[KEY_GROUP_MAXMEMBERCOUNT] = self.maxMemberCount;
    dict[KEY_GROUP_ISNODISTURB] = [NSNumber numberWithBool:self.isNoDisturb];
    return dict;
}
@end

@implementation JMSGMessage (JPush)
- (NSMutableDictionary *)messageToDictionary {
  NSString *jsonString = [self toJsonString];
  NSMutableDictionary *dict = [NSMutableDictionary new];
  NSError *error = nil;
  NSError *decodeeError;
  NSDictionary *msgBody = [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
  
  if (decodeeError == nil) {
    [dict setValue:msgBody forKey:KEY_CONTENT];
  }
  
  [dict setValue:[NSString stringWithFormat:@"%ld",(long)self.contentType] forKey:KEY_CONTENTTYPE];
  
  [dict setValue:self.msgId forKey:KEY_MSGID];
  [dict setValue:[NSString stringWithFormat:@"%ld",(long)self.contentType] forKey:KEY_CONTENTTYPE];
  NSString *resourcePath;
  Ivar ivar = class_getInstanceVariable([self.content class], "_resourcePath");
  
  switch (self.contentType) {
    case kJMSGContentTypeVoice:
      
      resourcePath = object_getIvar(self.content, ivar);
      break;
    case kJMSGContentTypeImage:
      resourcePath = object_getIvar(self.content, ivar);
      break;
    case kJMSGContentTypeFile:
      resourcePath = object_getIvar(self.content, ivar);
      break;
      
    default:
      break;
  }
  
  if (resourcePath != @"" && resourcePath != nil) {
    [dict setValue:[self getFullPathWith:resourcePath] forKey:@"resourcePath"];
  }
  
  return dict;
}

- (NSString *)getFullPathWith:(NSString *) path {
  NSString * homeDir = NSHomeDirectory();
  return [NSString stringWithFormat:@"%@/Documents/%@", homeDir,path];
}
@end

