/*
 *	| |    | |  \ \  / /  | |    | |   / _______|
 *	| |____| |   \ \/ /   | |____| |  / /
 *	| |____| |    \  /    | |____| |  | |   _____
 * 	| |    | |    /  \    | |    | |  | |  |____ |
 *  | |    | |   / /\ \   | |    | |  \ \______| |
 *  | |    | |  /_/  \_\  | |    | |   \_________|
 *
 * Copyright (c) 2011 ~ 2015 Shenzhen HXHG. All rights reserved.
 */

#import <Foundation/Foundation.h>

@class JMSGGroup;


/*!
 * User 相关变更通知
 */
@protocol JMSGUserDelegate <NSObject>

/*!
 * @abstract 当前登录用户被踢下线通知(方法已过期，建议使用新方法)
 *
 * @discussion 一般可能是, 该用户在其他设备上登录, 把当前设备的登录踢出登录.
 *
 * SDK 收到服务器端下发事件后, 会内部退出登录.
 * App 也应该退出登录. 否则所有的 SDK API 调用将失败, 因为 SDK 已经退出登录了.
 *
 * 注意: 这是旧版本的监听方法，建议不要使用,已经过期,使用 JMSGEventDelegate 类中的 onReceiveNotificationEvent 新的监听方法.
 */
@optional
- (void)onLoginUserKicked __attribute__((deprecated("first deprecated in JMessage 2.2.0 - Use -onNotificationEvent:")));

@end
