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

#import "JMessagePlugin.h"
#import <JMessage/JMessage.h>
#import <AVFoundation/AVFoundation.h>
#import <objc/runtime.h>

#import "JMessageHelper.h"
#import "JMessageDefine.h"
#import "AppDelegate+JMessage.h"


#pragma mark - Cordova

#define ResultSuccess(method) [NSString stringWithFormat:@"success - %@",method]
#define ResultFailed(method)  [NSString stringWithFormat:@"failed  - %@",method]

@interface JMessagePlugin ()<JMessageDelegate, JMSGEventDelegate, UIApplicationDelegate>

@end

JMessagePlugin *SharedJMessagePlugin;

@implementation JMessagePlugin


#ifdef __CORDOVA_4_0_0

- (void)pluginInitialize {
    NSLog(@"### pluginInitialize ");
    [self initNotifications];
    [self initPlugin];
}

#else

- (CDVPlugin*)initWithWebView:(UIWebView*)theWebView{
    NSLog(@"### initWithWebView ");
    if (self=[super initWithWebView:theWebView]) {
        [self initNotifications];
    }
    [self initPlugin];
    return self;
}

#endif

-(void)initPlugin{
    if (!SharedJMessagePlugin) {
        SharedJMessagePlugin = self;
        [JMessage addDelegate:self withConversation:nil];
    }
}

- (void)onAppTerminate {
    NSLog(@"### onAppTerminate ");

}

- (void)onReset {
    NSLog(@"### onReset ");

}
- (void)dispose {
    NSLog(@"### dispose ");
}

#pragma mark - JMessagePlugin

-(void)startJMessageSDK:(CDVInvokedUrlCommand *)command{
    [(AppDelegate*)[UIApplication sharedApplication].delegate startJMessageSDK];
}


#pragma mark IM - Private

//因为cordova 有lazy 特性，所以在不使用其他函数的情况下。这个函数作用在于激活插件
- (void)init:(CDVInvokedUrlCommand *)command {

}

-(void)initNotifications {

    NSNotificationCenter *defaultCenter = [NSNotificationCenter defaultCenter];
    [defaultCenter addObserver:self
                      selector:@selector(didReceiveJMessageMessage:)
                          name:kJJMessageReceiveMessage
                        object:nil];

    [defaultCenter addObserver:self
                      selector:@selector(conversationChanged:)
                          name:kJJMessageConversationChanged
                        object:nil];

    [defaultCenter addObserver:self
                      selector:@selector(didSendMessage:)
                          name:kJJMessageSendMessageRespone
                        object:nil];
    
    [defaultCenter addObserver:self
                      selector:@selector(unreadChanged:)
                          name:kJJMessageUnreadChanged
                        object:nil];
    [defaultCenter addObserver:self
                      selector:@selector(loginUserKicked:)
                          name:kJJMessageLoginUserKicked
                        object:nil];
    [defaultCenter addObserver:self
                      selector:@selector(groupInfoChanged:)
                          name:kJJMessageGroupInfoChanged
                        object:nil];
    [defaultCenter addObserver:self
                      selector:@selector(onReceiveImageData:)
                          name:kJJMessageReceiveImageData
                        object:nil];
    [defaultCenter addObserver:self
                      selector:@selector(onReceiveVoiceData:)
                          name:kJJMessageReceiveVoiceData
                        object:nil];
    [defaultCenter addObserver:self
                      selector:@selector(onReceiveFileData:)
                          name:kJJMessageReceiveFileData
                        object:nil];
    [defaultCenter addObserver:self
                      selector:@selector(onReceiveLocation:)
                          name:kJJMessageReceiveLocationData
                        object:nil];
//  
    [defaultCenter addObserver:self
                        selector:@selector(onSyncOfflineMessage:)
                            name:kJJMessageSyncOfflineMessage
                          object:nil];
  
    [defaultCenter addObserver:self
                      selector:@selector(onSyncRoamingMessage:)
                          name:kJJMessageSyncRoamingMessage
                        object:nil];
}

#pragma mark IM - Notifications
- (void)onSyncOfflineMessage: (NSNotification *) notification {
  [JMessagePlugin evalFuntionName:@"onSyncOfflineMessage" jsonParm: [notification.object toJsonString]];
}

- (void)onSyncRoamingMessage: (NSNotification *) notification {
  [JMessagePlugin evalFuntionName:@"onSyncRoamingMessage" jsonParm: [notification.object toJsonString]];
}

-(void)didSendMessage:(NSNotification *)notification {
    [JMessagePlugin evalFuntionName:@"onSendMessage" jsonParm:[notification.object toJsonString]];
}

- (void)conversationChanged:(NSNotification *)notification {
    [JMessagePlugin evalFuntionName:@"onConversationChanged" jsonParm:[notification.object toJsonString]];
}

- (void)unreadChanged:(NSNotification *)notification{
    [JMessagePlugin evalFuntionName:@"onUnreadChanged" jsonParm:[notification.object toJsonString]];
}

- (void)groupInfoChanged:(NSNotification *)notification{
    [JMessagePlugin evalFuntionName:@"onGroupInfoChanged" jsonParm:[notification.object toJsonString]];
}

- (void)loginUserKicked:(NSNotification *)notification{
    [JMessagePlugin evalFuntionName:@"loginUserKicked" jsonParm:@"{\"error\":\"login user kicked\"}"];
}

//didReceiveJMessageMessage change name
- (void)didReceiveJMessageMessage:(NSNotification *)notification {
    NSDictionary *userInfo = [notification object];
    NSString *jsonString = [userInfo toJsonString];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"\"{" withString:@"{"];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"}\"" withString:@"}"];
    [JMessagePlugin evalFuntionName:@"onReceiveConversationMessage" jsonParm:jsonString];
}

-(void)onReceiveImageData:(NSNotification*)notification{
    NSLog(@"JMessagePlugin onReceiveImageData");
    NSDictionary *userInfo = [notification object];
    NSString *jsonString = [userInfo toJsonString];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"\"{" withString:@"{"];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"}\"" withString:@"}"];
    [JMessagePlugin evalFuntionName:@"onReceiveImageData" jsonParm:jsonString];
}

-(void)onReceiveVoiceData:(NSNotification*)notification{
    NSLog(@"JMessagePlugin onReceiveVoiceData");
    NSDictionary *userInfo = [notification object];
    NSString *jsonString = [userInfo toJsonString];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"\"{" withString:@"{"];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"}\"" withString:@"}"];
    [JMessagePlugin evalFuntionName:@"onReceiveVoiceData" jsonParm:jsonString];
}

-(void)onReceiveFileData:(NSNotification*)notification{
    NSLog(@"JMessagePlugin onReceiveFileData");
    NSDictionary *userInfo = [notification object];
    NSString *jsonString = [userInfo toJsonString];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"\"{" withString:@"{"];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"}\"" withString:@"}"];
    [JMessagePlugin evalFuntionName:@"onReceiveFileData" jsonParm:jsonString];
}

-(void)onReceiveLocation:(NSNotification*)notification{
    NSLog(@"JMessagePlugin onReceiveLocation");
    NSDictionary *userInfo = [notification object];
    NSString *jsonString = [userInfo toJsonString];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"\"{" withString:@"{"];
    jsonString = [jsonString stringByReplacingOccurrencesOfString:@"}\"" withString:@"}"];
    [JMessagePlugin evalFuntionName:@"onReceiveLocation" jsonParm:jsonString];
}

+(void)evalFuntionName:(NSString*)functionName jsonParm:(NSString*)jsonString{
    dispatch_async(dispatch_get_main_queue(), ^{
        [SharedJMessagePlugin.commandDelegate evalJs:[NSString stringWithFormat:@"%@.%@('%@')",JMessagePluginName,functionName,jsonString]];
    });
}

+(void)fireDocumentEvent:(NSString*)eventName jsString:(NSString*)jsString{
    dispatch_async(dispatch_get_main_queue(), ^{
        [SharedJMessagePlugin.commandDelegate evalJs:[NSString stringWithFormat:@"cordova.fireDocumentEvent('jmessage.%@',%@)", eventName, jsString]];
    });
}

#pragma mark IM - User

- (void)userRegister:(CDVInvokedUrlCommand *)command {
    NSString * username = [command argumentAtIndex:0];
    NSString * password = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGUser registerWithUsername:username password:password completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"user register succeeded" command:command error:error log:@"user register"];
        if (!error) {
            //注册成功
        }
    }];
}

- (void)userLogin:(CDVInvokedUrlCommand *)command {
    NSLog(@"JMessageLogin");
    NSString * username = [command argumentAtIndex:0];
    NSString * password = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGUser loginWithUsername:username password:password completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"regeister succeeded" command:command error:error log:@"user login"];
    }];
}

- (void)userLogout:(CDVInvokedUrlCommand *)command {
    NSLog(@"JMessageLogout");
    WEAK_SELF(weakSelf);
    [JMSGUser logout:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"login out succeeded" command:command error:error log:@"log out"];
    }];
}

- (void)getMyInfo:(CDVInvokedUrlCommand *)command {
    JMSGUser *user = [JMSGUser myInfo];
    NSError *error = nil;
    NSMutableDictionary *dict = [NSMutableDictionary new];

    if (user && user.username.length > 0) {//以此判断是否有用户信息
        dict = [user userToDictionary];
    }
    else{
        error = [NSError errorWithDomain:@"JMessagePlugin error" code:kJMSGErrorSDKUserNotLogin userInfo:@{@"description":@"未登录"}];
    }
    [self handleResultWithValue:dict command:command error:error];
}

- (void)getUserInfo:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        if (error == nil) {
            JMSGUser *user = ((JMSGConversation*)resultObject).target;
            dict = [user userToDictionary];
        }
        [self handleResultWithValue:dict command:command error:error];
    }];
}

-(void)getUserInfoArray:(CDVInvokedUrlCommand *)command{
    NSArray *nameArr = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMSGUser userInfoArrayWithUsernameArray:nameArr completionHandler:^(id resultObject, NSError *error) {
        NSMutableArray *arr = [NSMutableArray array];
        if (error == nil) {
            NSArray *users = resultObject;
            for (JMSGUser *user in users) {
                [arr addObject:[user userToDictionary]];
            }
        }
        [weakSelf handleResultWithValue:arr command:command error:error];
    }];
}

- (void)updateMyPassword:(CDVInvokedUrlCommand *)command{
    NSString *old = [command argumentAtIndex:0];
    NSString *new = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGUser updateMyPasswordWithNewPassword:new oldPassword:old completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"update password" command:command error:error];
    }];
}

-(void)updateMyInfo:(CDVInvokedUrlCommand *)command{
    int type = [[command argumentAtIndex:0] intValue];
    id val;
    if (type == 5) {
        val = [NSData dataWithContentsOfFile:[command argumentAtIndex:1]];
    }else{
        val = [command argumentAtIndex:1];
    }
    WEAK_SELF(weak_self);
    [JMSGUser updateMyInfoWithParameter:val userFieldType:type completionHandler:^(id resultObject, NSError *error) {
        [weak_self handleResultWithValue:ResultSuccess(@"updateMyInfo") command:command error:error];
    }];
}

#pragma mark IM - Message

#pragma mark IM - Message - Single

- (void)sendSingleTextMessage:(CDVInvokedUrlCommand *)command {
    NSString *username = [command argumentAtIndex:0];
    NSString *text     = [command argumentAtIndex:1];
    WEAK_SELF(weak_self);
    
    [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
          
          JMSGTextContent *textContent = [[JMSGTextContent alloc] initWithText:text];
          JMSGMessage *message = [conversation createMessageWithContent:textContent];
          [conversation sendMessage: message];
          [weak_self handleResultWithValue:@[[message toJsonString]] command:command error:error log:@"send single text message success"];
        } else {
          [weak_self handleResultWithValue:nil command:command error:error log:@"send single text message fail"];
        }
      
    }];
}

- (void)sendSingleVoiceMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *voiceUrl = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGMessage *voiceMessage = nil;
            AVAudioPlayer *play = [[AVAudioPlayer alloc] initWithContentsOfURL:[NSURL fileURLWithPath:voiceUrl] error:nil];
            JMSGVoiceContent *voiceContent = [[JMSGVoiceContent alloc] initWithVoiceData:[NSData dataWithContentsOfFile:voiceUrl]
                                                                           voiceDuration:[NSNumber numberWithInteger:play.duration]];
            voiceMessage = [conversation createMessageWithContent:voiceContent];
            [conversation sendMessage:voiceMessage];
          [weakSelf handleResultWithValue:@[[voiceMessage toJsonString]] command:command error:error log:@"send single voice message success"];
        } else {
          [weakSelf handleResultWithValue:nil command:command error:error log:@"send single voice message fail"];
        }
      
    }];
}

- (void)sendSingleImageMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *imageUrl = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            NSData *data = [NSData dataWithContentsOfFile:imageUrl];
            JMSGImageContent *imageContent = [[JMSGImageContent alloc] initWithImageData: data];
            JMSGMessage *imgMessage = [conversation createMessageWithContent:imageContent];
            [conversation sendMessage:imgMessage];
            [weakSelf handleResultWithValue:@[[imgMessage toJsonString]] command:command error:error log:@"send single image message success"];
        } else {
            [weakSelf handleResultWithValue:nil command:command error:error log:@"send single image message fail"];
        }
      
    }];
}

-(void)sendSingleCustomMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *text     = [command argumentAtIndex:1];
    NSString *extra    = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGMessage *message = nil;
            NSError *serializationError = [[NSError alloc] init];
            NSData *extraData = [extra dataUsingEncoding:NSUTF8StringEncoding];
            NSDictionary *jsonResponse = [NSJSONSerialization JSONObjectWithData:extraData
                                                                       options:kNilOptions
                                                                         error:&serializationError];

            JMSGCustomContent *customContent = [[JMSGCustomContent alloc] initWithCustomDictionary:jsonResponse];
          
            message = [conversation createMessageWithContent:customContent];
            [conversation sendMessage:message];
            [weakSelf handleResultWithValue:@[[message toJsonString]] command:command error:error log:@"send single custom message success"];
        } else {
            [weakSelf handleResultWithValue: nil command:command error:error log:@"send single custom message fail"];
        }
      
    }];
}

#pragma mark IM - Message - Group

- (void)sendGroupTextMessage:(CDVInvokedUrlCommand *)command{
    NSString *gid  = [command argumentAtIndex:0];
    NSString *text = [command argumentAtIndex:1];
    WEAK_SELF(weak_self);
    [JMSGConversation createGroupConversationWithGroupId:gid completionHandler:^(id resultObject, NSError *error) {

      if (error == nil) {
        JMSGConversation *conversation = resultObject;
        
        JMSGTextContent *textContent = [[JMSGTextContent alloc] initWithText:text];
        JMSGMessage *message = [conversation createMessageWithContent:textContent];
        [conversation sendMessage: message];
        [weak_self handleResultWithValue:@[[message toJsonString]] command:command error:error log:@"send single text message success"];
      } else {
        [weak_self handleResultWithValue:nil command:command error:error log:@"send single text message fail"];
      }
      
    }];
}

- (void)sendGroupVoiceMessage:(CDVInvokedUrlCommand *)command{
    NSString *gid      = [command argumentAtIndex:0];
    NSString *voiceUrl = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:gid completionHandler:^(id resultObject, NSError *error) {
      
      if (error == nil) {
        JMSGConversation *conversation = resultObject;
        JMSGMessage *voiceMessage = nil;
        AVAudioPlayer *play = [[AVAudioPlayer alloc] initWithContentsOfURL:[NSURL fileURLWithPath:voiceUrl] error:nil];
        JMSGVoiceContent *voiceContent = [[JMSGVoiceContent alloc] initWithVoiceData:[NSData dataWithContentsOfFile:voiceUrl]
                                                                       voiceDuration:[NSNumber numberWithInteger:play.duration]];
        voiceMessage = [conversation createMessageWithContent:voiceContent];
        [conversation sendMessage:voiceMessage];
        [weakSelf handleResultWithValue:@[[voiceMessage toJsonString]] command:command error:error log:@"send single voice message success"];
      } else {
        [weakSelf handleResultWithValue:nil command:command error:error log:@"send single voice message fail"];
      }
    }];
}

- (void)sendGroupImageMessage:(CDVInvokedUrlCommand *)command{
    NSString *gid      = [command argumentAtIndex:0];
    NSString *imageUrl = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:gid completionHandler:^(id resultObject, NSError *error) {
    
      if (error == nil) {
        JMSGConversation *conversation = resultObject;
        NSData *data = [NSData dataWithContentsOfFile:imageUrl];
        JMSGImageContent *imageContent = [[JMSGImageContent alloc] initWithImageData: data];
        JMSGMessage *imgMessage = [conversation createMessageWithContent:imageContent];
        [conversation sendMessage:imgMessage];
        [weakSelf handleResultWithValue:@[[imgMessage toJsonString]] command:command error:error log:@"send single image message success"];
      } else {
        [weakSelf handleResultWithValue:nil command:command error:error log:@"send single image message fail"];
      }
    }];
}

-(void)sendGroupCustomMessage:(CDVInvokedUrlCommand *)command{
    NSString *gid   = [command argumentAtIndex:0];
    NSString *text  = [command argumentAtIndex:1];
    NSString *extra = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:gid completionHandler:^(id resultObject, NSError *error) {
      
      if (error == nil) {
        JMSGConversation *conversation = resultObject;
        JMSGMessage *message = nil;
        NSError *serializationError = [[NSError alloc] init];
        NSData *extraData = [extra dataUsingEncoding:NSUTF8StringEncoding];
        NSDictionary *jsonResponse = [NSJSONSerialization JSONObjectWithData:extraData
                                                                     options:kNilOptions
                                                                       error:&serializationError];
        
        JMSGCustomContent *customContent = [[JMSGCustomContent alloc] initWithCustomDictionary:jsonResponse];
        
        message = [conversation createMessageWithContent:customContent];
        [conversation sendMessage:message];
        [weakSelf handleResultWithValue:@[[message toJsonString]] command:command error:error log:@"send single custom message success"];
      } else {
        [weakSelf handleResultWithValue: nil command:command error:error log:@"send single custom message fail"];
      }
    }];
}


#pragma mark IM - Conversation

#pragma mark IM - Conversation - Single

- (void)getSingleConversationHistoryMessage:(CDVInvokedUrlCommand *)command {
    WEAK_SELF(weakSelf);
    NSString *username = [command argumentAtIndex:0];
    NSNumber *from     = [command argumentAtIndex:1];
    NSNumber *limit    = [command argumentAtIndex:2];
    [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
        NSMutableArray *resultArr = [NSMutableArray new];
        if (error == nil) {
            JMSGConversation * conversation = resultObject;
            NSArray * messageList =  [conversation messageArrayFromNewestWithOffset:from limit:limit];
            for (JMSGMessage * msg in messageList) {
              
              NSString *jsonString = [msg toJsonString];
              NSMutableDictionary *dict = [NSMutableDictionary new];
              
              NSError *decodeeError;
              NSDictionary *msgBody = [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
              
              if (decodeeError == nil) {
                [dict setValue:msgBody forKey:KEY_CONTENT];
              }
              
              [dict setValue:[NSString stringWithFormat:@"%ld",(long)msg.contentType] forKey:KEY_CONTENTTYPE];
              
              [dict setValue:msg.msgId forKey:KEY_MSGID];
              [dict setValue:[NSString stringWithFormat:@"%ld",(long)msg.contentType] forKey:KEY_CONTENTTYPE];
              NSString *resourcePath;
              Ivar ivar = class_getInstanceVariable([msg.content class], "_resourcePath");
              
              switch (msg.contentType) {
                case kJMSGContentTypeVoice:
                  
                  resourcePath = object_getIvar(msg.content, ivar);
                  break;
                case kJMSGContentTypeImage:
                  resourcePath = object_getIvar(msg.content, ivar);
                  break;
                case kJMSGContentTypeFile:
                  resourcePath = object_getIvar(msg.content, ivar);
                  break;
                  
                default:
                  break;
              }
              if (resourcePath != @"" && resourcePath != nil) {
                [dict setValue:[self getFullPathWith:resourcePath] forKey:@"resourcePath"];
              }
              
              [resultArr addObject:dict];
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error log:@"JMessagePlugin Get Single History Message"];
    }];
}

- (NSString *)getFullPathWith:(NSString *) path {
  NSString * homeDir = NSHomeDirectory();
  return [NSString stringWithFormat:@"%@/Documents/%@", homeDir,path];
}

- (void)getSingleConversation:(CDVInvokedUrlCommand *)command {
  WEAK_SELF(weakSelf);
  
  NSString *username = [command argumentAtIndex:0];
  NSString *appkey = [command argumentAtIndex:1];
  
  [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
    if (error == nil) {
      JMSGConversation *conversation = resultObject;
      NSDictionary *conversationDic = [conversation conversationToDictionary];
      
      [weakSelf handleResultWithValue:@[conversationDic] command:command error:error];
    } else {
      [weakSelf handleResultWithValue:@[] command:command error:error];
    }
  }];
}

- (void)getGroupConversation:(CDVInvokedUrlCommand *)command {
  WEAK_SELF(weakSelf);
  NSNumber *gid = [command argumentAtIndex:0];
  
  JMSGConversation *conversation = [JMSGConversation groupConversationWithGroupId:[gid description]];
  NSDictionary *conversationDic = [conversation conversationToDictionary];
  if (conversationDic == nil) {
    [weakSelf handleResultWithValue:@[] command:command error:nil];
  } else {
    [weakSelf handleResultWithValue:@[conversationDic] command:command error:nil];
  }
  
  
}

- (void)getAllSingleConversation:(CDVInvokedUrlCommand *)command {
    WEAK_SELF(weakSelf);
    [JMSGConversation allConversations:^(id resultObject, NSError *error) {
        NSMutableArray *resultArr = [NSMutableArray new];
        if (error == nil) {
            NSArray * conversationArr = resultObject;
            for (JMSGConversation *conversation in conversationArr) {
                if (conversation.conversationType == kJMSGConversationTypeSingle) {
                    [resultArr addObject:[conversation conversationToDictionary]];
                }
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error];
    }];
}

- (void)deleteSingleConversation:(CDVInvokedUrlCommand *)command {
    NSString *username = [command argumentAtIndex:0];
    BOOL       success = [JMSGConversation deleteSingleConversationWithUsername:username];
    [self handleResultWithValue:[NSNumber numberWithBool:success] command:command log:@"delete single conversation"];
}

#pragma mark IM - Conversation - Group

- (void)getGroupConversationHistoryMessage:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    NSString *rid   = [command argumentAtIndex:0];
    NSNumber *from  = [command argumentAtIndex:1];
    NSNumber *limit = [command argumentAtIndex:2];
    [JMSGConversation createGroupConversationWithGroupId:rid completionHandler:^(id resultObject, NSError *error) {
        NSMutableArray *resultArr = [NSMutableArray new];
        if (error == nil) {
          
            JMSGConversation * conversation = resultObject;
            NSArray * messageList =  [conversation messageArrayFromNewestWithOffset:from limit:limit];
            for (JMSGMessage * msg in messageList) {
              
                NSString * jsonString  = [msg toJsonString];
                JMSGGroup *group = msg.target;
                NSDictionary *groupDict = [group groupToDictionary];
              
              
                NSMutableDictionary *dict = [NSMutableDictionary new];
              
                NSError *decodeeError;
                NSDictionary *msgBody = [NSJSONSerialization JSONObjectWithData:[jsonString dataUsingEncoding:NSUTF8StringEncoding] options:0 error:&error];
              
                if (decodeeError == nil) {
                  [dict setValue:msgBody forKey:KEY_CONTENT];
                }
              
                [dict setValue:[NSString stringWithFormat:@"%ld",(long)msg.contentType] forKey:KEY_CONTENTTYPE];

                [dict addEntriesFromDictionary:@{@"groupDict":groupDict}];
              
                NSString *resourcePath;
                Ivar ivar = class_getInstanceVariable([msg.content class], "_resourcePath");
              
                switch (msg.contentType) {
                  case kJMSGContentTypeVoice:
                  
                    resourcePath = object_getIvar(msg.content, ivar);
                    break;
                  case kJMSGContentTypeImage:
                    resourcePath = object_getIvar(msg.content, ivar);
                    break;
                  case kJMSGContentTypeFile:
                    resourcePath = object_getIvar(msg.content, ivar);
                    break;
                  
                  default:
                    break;
                }
              if (resourcePath != @"" && resourcePath != nil) {
                [dict setValue:[self getFullPathWith:resourcePath] forKey:@"resourcePath"];
              }
              
                [dict setValue:msg.msgId forKey:KEY_MSGID];
                [resultArr addObject:dict];

            }
        }
      
          
        
        [weakSelf handleResultWithValue:resultArr command:command error:error log:@"JMessagePlugin Get Group History Message"];
    }];
}

-(void)getAllGroupConversation:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    [JMSGConversation allConversations:^(id resultObject, NSError *error) {
        NSMutableArray *resultArr = [NSMutableArray new];
        if (error == nil) {
            NSArray * conversationArr = resultObject;
            for (JMSGConversation *conversation in conversationArr) {
                if (conversation.conversationType == kJMSGConversationTypeGroup) {
                    JMSGGroup *group = conversation.target;
                    NSMutableDictionary * dict = [group groupToDictionary];
                    dict[KEY_LASTMESSAGE] = conversation.latestMessageContentText;
                    dict[KEY_UNREADCOUNT] = conversation.unreadCount;
                    [resultArr addObject:dict];
                }
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error];
    }];
}

-(void)deleteGroupConversation:(CDVInvokedUrlCommand *)command{
    NSString *gid = [command argumentAtIndex:0];
    BOOL  success = [JMSGConversation deleteGroupConversationWithGroupId:gid];
    [self handleResultWithValue:[NSNumber numberWithBool:success] command:command log:@"delete group conversation"];
}

-(void)getAllConversation:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    [JMSGConversation allConversations:^(id resultObject, NSError *error) {
        NSMutableArray *resultArr = [NSMutableArray new];
        if (error == nil) {
            NSArray * conversationArr = resultObject;
            for (JMSGConversation *conversation in conversationArr) {
                NSMutableDictionary * dict = nil;
                if (conversation.conversationType == kJMSGConversationTypeSingle) {
                    JMSGUser *user = conversation.target;
                    dict = [user userToDictionary];
                }else if (conversation.conversationType == kJMSGConversationTypeGroup){
                    JMSGGroup *group = conversation.target;
                    dict = [group groupToDictionary];
                }
                dict[@"timestamp"]    = conversation.latestMessage.timestamp;
                dict[KEY_LASTMESSAGE] = conversation.latestMessageContentText;
                dict[KEY_UNREADCOUNT] = conversation.unreadCount;
                [resultArr addObject:dict];
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error];
    }];
}

-(void)clearSingleUnreadCount:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    JMSGConversation *conversation =  [JMSGConversation singleConversationWithUsername:username];
    [conversation clearUnreadCount];
}

-(void)clearGroupUnreadCount:(CDVInvokedUrlCommand *)command{
    NSString *gid = [command argumentAtIndex:0];
    JMSGConversation *conversation =  [JMSGConversation groupConversationWithGroupId:gid];
    [conversation clearUnreadCount];
}


#pragma mark IM - Group

-(void)createGroupIniOS:(CDVInvokedUrlCommand *)command{
    NSString *name    = [command argumentAtIndex:0];
    NSString *desc    = [command argumentAtIndex:1];
    NSArray  *members = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGGroup createGroupWithName:name desc:desc memberArray:members completionHandler:^(id resultObject, NSError *error) {
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        if (error == nil) {
            JMSGGroup *group = resultObject;
            dict = [group groupToDictionary];
        }
        [weakSelf handleResultWithValue:dict command:command log:@"create group"];
    }];
}

-(void)updateGroupInfo:(CDVInvokedUrlCommand *)command{
    NSString *groupId = [command argumentAtIndex:0];
    NSString *name    = [command argumentAtIndex:1];
    NSString *desc    = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGGroup updateGroupInfoWithGroupId:groupId name:name desc:desc completionHandler:^(id resultObject, NSError *error) {
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        if (error == nil) {
            JMSGGroup *group = resultObject;
            dict = [group groupToDictionary];
        }
        [weakSelf handleResultWithValue:dict command:command log:@"update group info"];
    }];
}

-(void)getGroupInfo:(CDVInvokedUrlCommand *)command{
    NSString *groupId = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMSGGroup groupInfoWithGroupId:groupId completionHandler:^(id resultObject, NSError *error) {
        NSMutableDictionary *dict = [NSMutableDictionary dictionary];
        if (error == nil) {
            JMSGGroup *group = resultObject;
            dict = [group groupToDictionary];
        }
        [weakSelf handleResultWithValue:dict command:command log:@"get group info"];
    }];
}

-(void)myGroupArray:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    [JMSGGroup myGroupArray:^(id resultObject, NSError *error) {
        NSMutableArray *arr;
        if (error == nil) {
            arr = [NSMutableArray arrayWithArray:resultObject];
        }
        [weakSelf handleResultWithValue:arr command:command log:@"my group array"];
    }];
}

-(void)memberArray:(CDVInvokedUrlCommand *)command{
    NSString *groupId = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:groupId completionHandler:^(id resultObject, NSError *error) {
      
        NSMutableArray *userArr = @[].mutableCopy;
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGGroup *group = conversation.target;
            NSArray *arr = [group memberArray];
            for (JMSGUser *user in arr) {
                [userArr addObject:[user userToDictionary]];
            }
        }
        [weakSelf handleResultWithValue:userArr command:command log:@"member array"];
    }];
}

-(void)addMembers:(CDVInvokedUrlCommand *)command{
    NSString *groupId = [command argumentAtIndex:0];
    NSArray  *members = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:groupId completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGGroup *group = conversation.target;
            [group addMembersWithUsernameArray:members completionHandler:^(id resultObject, NSError *error) {
                if (error == nil && resultObject == nil) {
                    [weakSelf handleResultWithValue:@"1" command:command log:@"add members"];
                }else if (error){
                    [weakSelf handleResultWithValue:@"0" command:command error:error];
                }
            }];
        }

    }];
}

-(void)removeMembers:(CDVInvokedUrlCommand *)command{
    NSString *groupId = [command argumentAtIndex:0];
    NSArray  *members = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:groupId completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGGroup *group = conversation.target;
            [group removeMembersWithUsernameArray:members completionHandler:^(id resultObject, NSError *error) {
                if (error == nil && resultObject == nil) {
                    [weakSelf handleResultWithValue:@"1" command:command log:@"remove members"];
                }else if (error){
                    [weakSelf handleResultWithValue:@"0" command:command error:error];
                }
            }];
        }

    }];
}

-(void)exitGroup:(CDVInvokedUrlCommand *)command{
    NSString *groupId = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:groupId completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGGroup *group = conversation.target;
            [group exit:^(id resultObject, NSError *error) {
                if (error == nil && resultObject == nil) {
                    [weakSelf handleResultWithValue:@"1" command:command log:@"exit group"];
                }else if (error){
                    [weakSelf handleResultWithValue:@"0" command:command error:error];
                }
            }];
        }

    }];
}


#pragma mark CrossApp

#pragma mark CrossApp - Converstaion

-(void)cross_sendSingleTextMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSString *text     = [command argumentAtIndex:2];
    WEAK_SELF(weak_self);
    [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            [conversation sendTextMessage:text];
        }
        [weak_self handleResultWithValue:@"send single text message" command:command error:error log:@"send single text message"];
    }];
}

-(void)cross_sendSingleVoiceMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSString *voiceUrl = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            AVAudioPlayer *play = [[AVAudioPlayer alloc] initWithContentsOfURL:[NSURL fileURLWithPath:voiceUrl] error:nil];
            NSString *durationStr = [NSString stringWithFormat:@"%.1f", play.duration];
            NSNumber *durationNum = [NSNumber numberWithInteger:[durationStr integerValue]];
            [conversation sendVoiceMessage:[play data] duration:durationNum];
        }
        [weakSelf handleResultWithValue:@"send single voice message" command:command error:error log:@"send single voice message"];
    }];
}

-(void)cross_sendSingleImageMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSString *imageUrl = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            NSData *data = [NSData dataWithContentsOfFile:imageUrl];
            [conversation sendImageMessage:data];
        }
        [weakSelf handleResultWithValue:@"send single image message" command:command error:error log:@"send single image message"];
    }];
}

-(void)cross_sendSingleCustomMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSString *text     = [command argumentAtIndex:2];
    NSString *extra    = [command argumentAtIndex:3];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGConversation *conversation = resultObject;
            JMSGMessage *message = nil;
            JMSGTextContent *textContent = [[JMSGTextContent alloc] initWithText:text];
            [textContent addStringExtra:extra forKey:@"extra"];
            message = [conversation createMessageWithContent:textContent];//!
            [conversation sendMessage:message];
        }
        [weakSelf handleResultWithValue:@"cross send single custom message" command:command error:error log:@"cross send single custom message"];
    }];
}

-(void)cross_getSingleConversationHistoryMessage:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSNumber *from     = [command argumentAtIndex:2];
    NSNumber *limit    = [command argumentAtIndex:3];
    WEAK_SELF(weakSelf);
    [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        NSMutableArray *resultArr = [NSMutableArray new];
        if (error == nil) {
            JMSGConversation * conversation = resultObject;
            NSArray * messageList =  [conversation messageArrayFromNewestWithOffset:from limit:limit];
            for (JMSGMessage * msg in messageList) {
                NSString * jsonString  = [msg toJsonString];
                [resultArr addObject:[jsonString toDictionary]];
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error log:@"JMessagePlugin Get Cross Single History Message"];
    }];
}

-(void)cross_deleteSingleConversation:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    BOOL       success = [JMSGConversation deleteSingleConversationWithUsername:username appKey:appkey];
    [self handleResultWithValue:[NSNumber numberWithBool:success] command:command log:@"delete cross single conversation"];
}

-(void)cross_clearSingleUnreadCount:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    JMSGConversation *conversation =  [JMSGConversation singleConversationWithUsername:username appKey:appkey];
    [conversation clearUnreadCount];
}

#pragma mark CrossApp - User

-(void)cross_getUserInfoArray:(CDVInvokedUrlCommand *)command{
    NSArray *nameArr = [command argumentAtIndex:0];
    NSString *appkey = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGUser userInfoArrayWithUsernameArray:nameArr appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        NSMutableArray *arr = [NSMutableArray array];
        if (error == nil) {
            NSArray *users = resultObject;
            for (JMSGUser *user in users) {
                [arr addObject:[user userToDictionary]];
            }
        }
        [weakSelf handleResultWithValue:arr command:command error:error];
    }];
}

#pragma mark - JMessage SDK v2.2.0~v2.2.1 新增

-(void)onReceiveNotificationEvent:(JMSGNotificationEvent *)event{
    NSString *eventType = [NSString stringWithFormat:@"%ld",(long)event.eventType];

    NSString *reason;
    NSString *username;
    NSDictionary *userDict;

    switch (event.eventType) {
        case kJMSGEventNotificationReceiveFriendInvitation:
        case kJMSGEventNotificationAcceptedFriendInvitation:
        case kJMSGEventNotificationDeclinedFriendInvitation:
        case kJMSGEventNotificationDeletedFriend:{
            JMSGFriendNotificationEvent *friendEvent = (JMSGFriendNotificationEvent *)event;
            reason   = [friendEvent getReason];
            username = [friendEvent getFromUsername];
            JMSGUser *user = [friendEvent getFromUser];
            userDict = [user userToDictionary];
        }
            break;
        default:
            break;
    }

    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    [dict setValuesForKeysWithDictionary:@{@"eventType":eventType,@"eveventDescriptionentD":event.eventDescription?:@""}];
    if (reason) {
        [dict setValue:reason forKey:@"reason"];
    }
    if (username) {
        [dict setValue:username forKey:@"username"];
    }
    if (userDict) {
        [dict setValue:userDict forKey:@"user"];
    }
    [JMessagePlugin evalFuntionName:@"onReceiveNotificationEvent" jsonParm:[dict toJsonString]];

}

#pragma mark JMSGFriendManager

-(void)getFriendList:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    [JMSGFriendManager getFriendList:^(id resultObject, NSError *error) {
        NSMutableArray *arr = [NSMutableArray array];
        if (error == nil) {
            NSArray *users = resultObject;
            for (JMSGUser *user in users) {
                [arr addObject:[user userToDictionary]];
            }
        }
        [weakSelf handleResultWithValue:arr command:command error:error];
    }];
}

-(void)sendInvitationRequest:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appKey   = [command argumentAtIndex:1];
    NSString *reason   = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGFriendManager sendInvitationRequestWithUsername:username appKey:appKey reason:reason completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"send invitation request succeed" command:command error:error];
    }];
}

-(void)acceptInvitation:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appKey   = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGFriendManager acceptInvitationWithUsername:username appKey:appKey completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"accept invitation succeed" command:command error:error];
    }];
}

-(void)rejectInvitation:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appKey   = [command argumentAtIndex:1];
    NSString *reason   = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGFriendManager rejectInvitationWithUsername:username appKey:appKey reason:reason completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"reject invitation succeed" command:command error:error];
    }];
}

-(void)removeFriend:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appKey   = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGFriendManager removeFriendWithUsername:username appKey:appKey completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"remove friend succeed" command:command error:error];
    }];
}

#pragma mark JMSGUser

-(void)updateNoteName:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appKey   = [command argumentAtIndex:1];
    NSString *noteName = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGFriendManager getFriendList:^(id resultObject, NSError *aError) {
        if (aError == nil) {
            NSArray *users = resultObject;
            for (JMSGUser *user in users) {
                if ([user.username isEqualToString:username] && [user.appKey isEqualToString:appKey]) {
                    [user updateNoteName:noteName completionHandler:^(id resultObject, NSError *bError) {
                        [weakSelf handleResultWithValue:@"update note name succeed" command:command error:bError];
                    }];
                }
            }
        }
    }];
}

-(void)updateNoteText:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appKey   = [command argumentAtIndex:1];
    NSString *noteText = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    [JMSGFriendManager getFriendList:^(id resultObject, NSError *aError) {
        if (aError == nil) {
            NSArray *users = resultObject;
            for (JMSGUser *user in users) {
                if ([user.username isEqualToString:username] && [user.appKey isEqualToString:appKey]) {
                    [user updateNoteText:noteText completionHandler:^(id resultObject, NSError *bError) {
                        [weakSelf handleResultWithValue:@"update note text succeed" command:command error:bError];
                    }];
                }
            }
        }
    }];
}

#pragma mark JMSGConversation

-(void)sendFileMessage:(CDVInvokedUrlCommand *)command{
    NSString *name     = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSString *single   = [command argumentAtIndex:2];
    NSString *filePath = [command argumentAtIndex:3];
    NSString *fileName = [command argumentAtIndex:4];

    if (single.boolValue) {
        if (appkey) {
            [JMSGConversation createSingleConversationWithUsername:name appKey:appkey completionHandler:^(id resultObject, NSError *error) {
                if (error == nil) {
                    JMSGConversation *conversation = resultObject;
                    NSData *data = [NSData dataWithContentsOfFile:filePath];
                    [conversation sendFileMessage:data fileName:fileName];
                }
            }];
        } else {
            [JMSGConversation createSingleConversationWithUsername:name completionHandler:^(id resultObject, NSError *error) {
                if (error == nil) {
                    JMSGConversation *conversation = resultObject;
                    NSData *data = [NSData dataWithContentsOfFile:filePath];
                    [conversation sendFileMessage:data fileName:fileName];
                }
            }];
        }
    } else {
        [JMSGConversation createGroupConversationWithGroupId:name completionHandler:^(id resultObject, NSError *error) {
            if (error == nil) {
                JMSGConversation *conversation = resultObject;
                NSData *data = [NSData dataWithContentsOfFile:filePath];
                [conversation sendFileMessage:data fileName:fileName];
            }
        }];
    }
}

-(void)sendLocationMessage:(CDVInvokedUrlCommand *)command{
    NSString *name      = [command argumentAtIndex:0];
    NSString *appkey    = [command argumentAtIndex:1];
    NSString *single    = [command argumentAtIndex:2];
    NSString *latitude  = [command argumentAtIndex:3];
    NSString *longitude = [command argumentAtIndex:4];
    NSString *scale     = [command argumentAtIndex:5];
    NSString *address   = [command argumentAtIndex:6];

    if (single.boolValue) {
        if (appkey) {
            [JMSGConversation createSingleConversationWithUsername:name appKey:appkey completionHandler:^(id resultObject, NSError *error) {
                if (error == nil) {
                    JMSGConversation *conversation = resultObject;
                    [conversation sendLocationMessage:[NSNumber numberWithFloat:[latitude floatValue]] longitude:[NSNumber numberWithFloat:[longitude floatValue]] scale:[NSNumber numberWithFloat:[scale floatValue]] address:address];
                }
            }];
        } else {
            [JMSGConversation createSingleConversationWithUsername:name completionHandler:^(id resultObject, NSError *error) {
                if (error == nil) {
                    JMSGConversation *conversation = resultObject;
                    [conversation sendLocationMessage:[NSNumber numberWithFloat:[latitude floatValue]] longitude:[NSNumber numberWithFloat:[longitude floatValue]] scale:[NSNumber numberWithFloat:[scale floatValue]] address:address];
                }
            }];
        }
    } else {
        [JMSGConversation createGroupConversationWithGroupId:name completionHandler:^(id resultObject, NSError *error) {
            if (error == nil) {
                JMSGConversation *conversation = resultObject;
                [conversation sendLocationMessage:[NSNumber numberWithFloat:[latitude floatValue]] longitude:[NSNumber numberWithFloat:[longitude floatValue]] scale:[NSNumber numberWithFloat:[scale floatValue]] address:address];
            }
        }];
    }
}


#pragma mark - JMessage SDK v2.2.4 新增 API

-(void)getAllUnreadCount:(CDVInvokedUrlCommand *)command{
    NSNumber *number = [JMSGConversation getAllUnreadCount];
    [self handleResultWithValue:number command:command];
}

#pragma mark - JMessage SDK v2.1.3 新增 API

#pragma mark JMessage

-(void)noDisturbList:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    [JMessage noDisturbList:^(id resultObject, NSError *error) {
        NSArray *array = resultObject;
        NSMutableArray *resultArr = [NSMutableArray array];
        if (array.count > 0) {
            if ([array[0] isKindOfClass:[JMSGUser class]]) {
                for (JMSGUser *user in array) {
                    [resultArr addObject:[user userToDictionary]];
                }
            }else{
                for (JMSGGroup *group in array) {
                    [resultArr addObject:[group groupToDictionary]];
                }
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error];
    }];
}

-(void)isSetGlobalNoDisturb:(CDVInvokedUrlCommand *)command{
    NSNumber *number = [NSNumber numberWithBool:[JMessage isSetGlobalNoDisturb]];
    [self handleResultWithValue:number command:command];
}

-(void)setIsGlobalNoDisturb:(CDVInvokedUrlCommand *)command{
    NSNumber *number = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMessage setIsGlobalNoDisturb:[number boolValue] handler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:@"setIsGlobalNoDisturb" command:command error:error];
    }];
}

-(void)blackList:(CDVInvokedUrlCommand *)command{
    WEAK_SELF(weakSelf);
    [JMessage blackList:^(id resultObject, NSError *error) {
        NSArray *array = resultObject;
        NSMutableArray *resultArr = [NSMutableArray array];
        if (array.count > 0) {
            for (JMSGUser *user in array) {
                [resultArr addObject:[user userToDictionary]];
            }
        }
        [weakSelf handleResultWithValue:resultArr command:command error:error];
    }];
}

#pragma mark JMSGUser

-(void)userIsNoDisturb:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    if (appkey == nil) {
        [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
            NSNumber *number;
            if (error == nil) {
                JMSGUser *user = ((JMSGConversation*)resultObject).target;
                number = [NSNumber numberWithBool:user.isNoDisturb];
            }
            [weakSelf handleResultWithValue:number command:command error:error];
        }];
    }else{
        [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
            NSNumber *number;
            if (error == nil) {
                JMSGUser *user = ((JMSGConversation*)resultObject).target;
                number = [NSNumber numberWithBool:user.isNoDisturb];
            }
            [weakSelf handleResultWithValue:number command:command error:error];
        }];
    }
}

-(void)userSetIsNoDisturb:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    NSNumber *isNoDisturb = [command argumentAtIndex:2];
    WEAK_SELF(weakSelf);
    if (appkey == nil) {
        [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
            if (error == nil) {
                JMSGUser *user = ((JMSGConversation*)resultObject).target;
                [user setIsNoDisturb:isNoDisturb.boolValue handler:^(id resultObject, NSError *error) {
                    [weakSelf handleResultWithValue:ResultSuccess(@"setIsNoDisturb") command:command error:error];
                }];
            }else{
                [weakSelf handleResultWithValue:ResultFailed(@"setIsNoDisturb") command:command error:error];
            }
        }];
    }else{
        [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
            if (error == nil) {
                JMSGUser *user = ((JMSGConversation*)resultObject).target;
                [user setIsNoDisturb:isNoDisturb.boolValue handler:^(id resultObject, NSError *error) {
                    [weakSelf handleResultWithValue:ResultSuccess(@"setIsNoDisturb") command:command error:error];
                }];
            }else{
                [weakSelf handleResultWithValue:ResultFailed(@"setIsNoDisturb") command:command error:error];
            }
        }];
    }
}

-(void)isInBlacklist:(CDVInvokedUrlCommand *)command{
    NSString *username = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    __block NSNumber *number;
    WEAK_SELF(weakSelf);
    if (appkey == nil) {
        [JMSGConversation createSingleConversationWithUsername:username completionHandler:^(id resultObject, NSError *error) {
            if (error == nil) {
                JMSGUser *user = ((JMSGConversation*)resultObject).target;
                number = [NSNumber numberWithBool:[user isInBlacklist]];
            }
            [weakSelf handleResultWithValue:number command:command error:error];
        }];
    }else{
        [JMSGConversation createSingleConversationWithUsername:username appKey:appkey completionHandler:^(id resultObject, NSError *error) {
            if (error == nil) {
                JMSGUser *user = ((JMSGConversation*)resultObject).target;
                number = [NSNumber numberWithBool:[user isInBlacklist]];
            }
            [weakSelf handleResultWithValue:number command:command error:error];
        }];
    }
}

-(void)addUsersToBlacklist:(CDVInvokedUrlCommand *)command{
    NSArray *usernames = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMSGUser addUsersToBlacklist:usernames completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:ResultSuccess(@"addUsersToBlacklist") command:command error:error];
    }];
}

-(void)delUsersFromBlacklist:(CDVInvokedUrlCommand *)command{
    NSArray *usernames = [command argumentAtIndex:0];
    WEAK_SELF(weakSelf);
    [JMSGUser delUsersFromBlacklist:usernames completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:ResultSuccess(@"delUsersFromBlacklist") command:command error:error];
    }];
}

-(void)cross_addUsersToBlacklist:(CDVInvokedUrlCommand *)command{
    NSArray *usernames = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGUser addUsersToBlacklist:usernames appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:ResultSuccess(@"cross_addUsersToBlacklist") command:command error:error];
    }];
}

-(void)cross_delUsersFromBlacklist:(CDVInvokedUrlCommand *)command{
    NSArray *usernames = [command argumentAtIndex:0];
    NSString *appkey   = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGUser delUsersFromBlacklist:usernames appKey:appkey completionHandler:^(id resultObject, NSError *error) {
        [weakSelf handleResultWithValue:ResultSuccess(@"cross_delUsersFromBlacklist") command:command error:error];
    }];
}

#pragma mark JMSGGroup

-(void)groupSetIsNoDisturb:(CDVInvokedUrlCommand *)command{
    NSString *gid = [command argumentAtIndex:0];
    NSNumber *number = [command argumentAtIndex:1];
    WEAK_SELF(weakSelf);
    [JMSGConversation createGroupConversationWithGroupId:gid completionHandler:^(id resultObject, NSError *error) {
        if (error == nil) {
            JMSGGroup *group = resultObject;
            [group setIsNoDisturb:number.boolValue handler:^(id resultObject, NSError *error) {
                [weakSelf handleResultWithValue:ResultSuccess(@"groupSetIsNoDisturb") command:command error:error];
            }];
        }else{
            [weakSelf handleResultWithValue:ResultFailed(@"groupSetIsNoDisturb") command:command error:error];
        }
    }];
}


#pragma mark - handle

-(void)handleResultWithValue:(id)value command:(CDVInvokedUrlCommand*)command{
    [self handleResultWithValue:value command:command error:nil log:nil];
}

-(void)handleResultWithValue:(id)value command:(CDVInvokedUrlCommand*)command log:(NSString*)log{
    [self handleResultWithValue:value command:command error:nil log:log];
}

-(void)handleResultWithValue:(id)value command:(CDVInvokedUrlCommand*)command error:(NSError*)error{
    [self handleResultWithValue:value command:command error:error log:nil];
}

-(void)handleResultWithValue:(id)value command:(CDVInvokedUrlCommand*)command error:(NSError*)error log:(NSString*)log{

    CDVPluginResult *result = nil;

    if (error == nil) {
        CDVCommandStatus status = CDVCommandStatus_OK;

        if ([value isKindOfClass:[NSString class]]) {
            value = [value stringByAddingPercentEscapesUsingEncoding:NSUTF8StringEncoding];
        } else if ([value isKindOfClass:[NSNull class]]) {
            value = nil;
        }

        if ([value isKindOfClass:[NSObject class]]) {
            result = [CDVPluginResult resultWithStatus:status messageAsString:value];//NSObject 类型都可以
        } else {
            NSLog(@"JMessagePlugin Log: Cordova callback block returned unrecognized type: %@", NSStringFromClass([value class]));
            result = nil;
        }

        if (result != nil) {
            if (log) {
                NSLog(@"JMessagePlugin Log: %@ succeeded",log);
            }
        }else{
            if (log) {
                NSLog(@"JMessagePlugin Log: %@ failed",log);
            }
            result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR];
        }


    }else{
        if (log) {
            NSLog(@"JMessagePlugin Log: %@ failed",log);
        }
        NSMutableDictionary * dict = [NSMutableDictionary new];
        [dict setValue:[NSNumber numberWithLong:error.code] forKey:KEY_ERRORCODE];
        [dict setValue:error.debugDescription forKey:KEY_ERRORDESCRIP];
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsDictionary:dict];
    }

    WEAK_SELF(weakSelf);
    [weakSelf.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}
@end




