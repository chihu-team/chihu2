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
#import <JMessage/JMSGNotificationEvent.h>

/*!
 * 监听通知事件
 */
@protocol JMSGEventDelegate <NSObject>

/*!
 * @abstract 监听通知事件
 *
 * @param event 下发的通知事件
 *
 * @discussion SDK 收到服务器端下发事件后，会以通知代理的方式给到上层,通过event.eventType判断事件类型.
 *
 * 注意：
 *
 * 消息事件，如：群事件，SDK会作为一个特殊的消息类型下发，上层依旧通过 JMSGMessageDelegate 监听消息事件.
 *
 * 非消息事件，如：被踢下线、加好友，SDK会作为通知事件下发,上层通过本类 JMSGEventDelegate 的方法可监听此类事件.
 */
@optional
- (void)onReceiveNotificationEvent:(JMSGNotificationEvent *)event;

@end

