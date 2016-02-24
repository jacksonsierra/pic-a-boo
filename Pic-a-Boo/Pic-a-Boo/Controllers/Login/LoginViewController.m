//
//  LoginViewController.m
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/23/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import "LoginViewController.h"
#import "OKAlertController.h"

@interface LoginViewController ()

@end

@implementation LoginViewController

- (void)viewDidLoad {
    [super viewDidLoad];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

- (IBAction)loginUser:(id)sender {
  NSString *username = [self.usernameField.text stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
  NSString *password = [self.passwordField.text stringByTrimmingCharactersInSet:[NSCharacterSet whitespaceAndNewlineCharacterSet]];
  
  // Alert user if username/password is empty
  if (username.length == 0 || password.length == 0) {
    [self presentViewController:[OKAlertController alertControllerWithTitle:@"Invalid Username/Password" message:@"Please enter a username or password" preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:nil];
  }
  
  // Initialize loading screen in center of view while identity is verified
  // All loading screen to view
  
  // Initialize URLRequest object
  
  // Initialize URLConnection
}

#pragma mark - Navigation
- (void)prepareForSegue:(UIStoryboardSegue *)segue sender:(id)sender {
    // Get the new view controller using [segue destinationViewController].
    // Pass the selected object to the new view controller.
}


#pragma mark - NSURLConnection Protocol
- (void)connection:(NSURLConnection *)connection didReceiveResponse:(NSURLResponse *)response {
  requestData = [[NSMutableData alloc] init];
  
  if ([response isKindOfClass:[NSHTTPURLResponse class]]) {
    NSHTTPURLResponse *HTTPResponse = (NSHTTPURLResponse *) response;
    NSInteger statusCode = HTTPResponse.statusCode;
    NSLog(@"Status Code: %zd", statusCode);
    
    if (statusCode != 200) {
      // Alert user of incorrect password
      [self presentViewController:[OKAlertController alertControllerWithTitle:@"Invalid Username/Password" message:@"Please try again" preferredStyle:UIAlertControllerStyleAlert] animated:YES completion:nil];
      
      [connection cancel];
    }
  }
}

- (void)connection:(NSURLConnection *)connection didReceiveData:(NSData *)data {
  [requestData appendData:data];
}

- (void)connection:(NSURLConnection *)connection didFailWithError:(NSError *)error {
  requestData = nil;
  NSLog(@"Connection failed! Error - %@ %@",
        [error localizedDescription],
        [[error userInfo] objectForKey:NSURLErrorFailingURLStringErrorKey]);
}

- (void)connectionDidFinishLoading:(NSURLConnection *)connection {
  NSString *dataString = [[NSString alloc] initWithData:(NSData *)requestData encoding:NSUTF8StringEncoding];
  NSLog(@"%@", dataString);
  requestData = nil;
  
  // Handle navigtaion
}
  
@end
