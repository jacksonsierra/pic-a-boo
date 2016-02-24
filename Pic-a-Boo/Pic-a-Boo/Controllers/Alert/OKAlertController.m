//
//  OKAlertController.m
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/24/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import "OKAlertController.h"

@interface OKAlertController ()

@end

@implementation OKAlertController

- (void)viewDidLoad {
    [super viewDidLoad];
    [self addAction:[UIAlertAction actionWithTitle:@"OK" style:UIAlertActionStyleDefault handler:^(UIAlertAction *action) {}]];
}

- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
}

@end
