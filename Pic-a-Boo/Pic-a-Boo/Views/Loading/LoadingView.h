//
//  LoadingView.h
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/24/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface LoadingView : UIActivityIndicatorView

@property (strong, nonatomic) UILabel *titleLabel;

- (instancetype)initWithFrameAndTitle:(CGRect)frame title:(NSString *)title;
+ (instancetype)viewWithFrameAndTitle:(CGRect)frame title:(NSString *)title;

- (void)configureView;
- (void)configureTitleLabel;

@end
