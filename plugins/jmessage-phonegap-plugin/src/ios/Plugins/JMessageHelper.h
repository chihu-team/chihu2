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


#import <Foundation/Foundation.h>
#import <JMessage/JMessage.h>

@interface JMessageHelper : NSObject<JMessageDelegate>
+ (id)shareInstance;

-(void)initJMessage:(NSDictionary*)launchOptions;

@end



@interface NSDictionary (JMessage)
-(NSString*)toJsonString;
@end

@interface NSString (JMessage)
-(NSDictionary*)toDictionary;
@end

@interface JMSGConversation (JMessage)
-(NSMutableDictionary*)conversationToDictionary;
@end

@interface JMSGUser (JMessage)
-(NSMutableDictionary*)userToDictionary;
@end

@interface JMSGGroup (JMessage)
-(NSMutableDictionary*)groupToDictionary;
@end

@interface JMSGMessage (JPush)
- (NSMutableDictionary *)messageToDictionary;
@end
