//
//  LoginViewController.h
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/23/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "LoadingView.h"

@interface LoginViewController : UIViewController<NSURLConnectionDelegate> {
  NSMutableData *requestData;
  LoadingView *loadingView;
}

@property (weak, nonatomic) IBOutlet UITextField *usernameField;
@property (weak, nonatomic) IBOutlet UITextField *passwordField;

- (IBAction)loginUser:(id)sender;

- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response;
- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data;
- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error;
- (void)connectionDidFinishLoading:(NSURLConnection *)connection;

@end
