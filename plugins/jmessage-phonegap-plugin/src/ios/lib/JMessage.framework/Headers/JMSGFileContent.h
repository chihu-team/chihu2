//
//  JMSGFileContent.h
//  JMessage
//
//  Created by deng on 16/7/4.
//  Copyright © 2016年 HXHG. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JMessage/JMSGMediaAbstractContent.h>

/*!
 * 文件内容类型
 */
@interface JMSGFileContent : JMSGMediaAbstractContent<NSCopying>

JMSG_ASSUME_NONNULL_BEGIN

/*!
 * @abstract 文件名
 */
@property(nonatomic, copy, readonly) NSString *fileName;

// 不支持使用的初始化方法
- (nullable instancetype)init NS_UNAVAILABLE;

/**
 *  初始化文件内容
 *
 *  @param data     文件数据
 *  @param fileName 文件名
 *
 */
- (instancetype)initWithFileData:(NSData *)data
                        fileName:(NSString *)fileName;

/*!
 * @abstract 获取文件内容的数据
 */
- (void)fileData:(JMSGAsyncDataHandler)handler;

JMSG_ASSUME_NONNULL_END

@end
