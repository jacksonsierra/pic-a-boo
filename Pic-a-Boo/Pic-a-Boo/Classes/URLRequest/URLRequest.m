//
//  URLRequest.m
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/24/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import "URLRequest.h"

@implementation URLRequest

- (instancetype) initWithURLStringAndBody:(NSString *)URLString headers:(NSDictionary *)headers body:(NSDictionary *)body {
  self = [super init];
  if (self) {
    _url = [NSURL URLWithString:URLString];
    _headers = headers;
    _body = body;
    [self configureRequest];
  }
  return self;
}

+ (instancetype) requestWithURLStringAndBody:(NSString *)URLString headers:(NSDictionary *)headers body:(NSDictionary *)body {
  return [[self alloc] initWithURLStringAndBody:URLString headers:headers body:body];
}

- (void)configureRequest {
  NSString *method = [self.headers objectForKey:@"Method"];
  [self setHTTPMethod:method];
  
  if ([method isEqualToString:@"POST"]) {
    NSError *error;
    NSData *bodyJSON = [NSJSONSerialization dataWithJSONObject:self.body options:0 error:&error];
    
    [self setValue:[self.headers objectForKey:@"Content-Type"] forKey:@"Content-Type"];
    [self setHTTPBody:bodyJSON];
  }
}

@end
