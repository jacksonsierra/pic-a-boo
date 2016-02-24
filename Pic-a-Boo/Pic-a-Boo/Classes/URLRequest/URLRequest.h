//
//  URLRequest.h
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/24/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface URLRequest : NSMutableURLRequest

@property (weak, nonatomic) NSURL *url;
@property (weak, nonatomic) NSDictionary *headers;
@property (weak, nonatomic) NSDictionary *body;

- (instancetype) initWithURLStringAndBody:(NSString *)URLString headers:(NSDictionary *)headers body:(NSDictionary *)body;
+ (instancetype) requestWithURLStringAndBody:(NSString *)URLString headers:(NSDictionary *)headers body:(NSDictionary *)body;

- (void) configureRequest;

@end
