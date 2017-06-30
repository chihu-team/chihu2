//
//  AppDelegate+JPush.m
//  delegateExtention
//
//  Created by 张庆贺 on 15/8/3.
//  Copyright (c) 2015年 JPush. All rights reserved.
//

#import <objc/runtime.h>
#import <AdSupport/AdSupport.h>
#import "JMessagePlugin.h"
#import "JMessageHelper.h"
#import "AppDelegate+JMessage.h"


@implementation AppDelegate (JMessage)

+(void)load{
    Method origin1;
    Method swizzle1;
    origin1  = class_getInstanceMethod([self class],@selector(init));
    swizzle1 = class_getInstanceMethod([self class], @selector(init_plus1));
    method_exchangeImplementations(origin1, swizzle1);
}

-(instancetype)init_plus1{
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(applicationDidLaunch1:) name:UIApplicationDidFinishLaunchingNotification object:nil];
    return [self init_plus1];
}

NSDictionary *_launchOptions;

-(void)applicationDidLaunch1:(NSNotification *)notification{
    [self startJMessageSDK];
}

-(void)startJMessageSDK{
    [[JMessageHelper shareInstance] initJMessage:_launchOptions];
}

@end
