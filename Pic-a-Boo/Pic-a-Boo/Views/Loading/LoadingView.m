//
//  LoadingView.m
//  Pic-a-Boo
//
//  Created by Jackson Sierra on 2/24/16.
//  Copyright © 2016 Jackson Sierra. All rights reserved.
//

#import "LoadingView.h"

@implementation LoadingView

- (instancetype)initWithFrameAndTitle:(CGRect)frame title:(NSString *)title {
  self = [super init];
  if (self) {
    [self setFrame:frame];
    _titleLabel = [[UILabel alloc] init];
    [_titleLabel setText:title];
    [self configureView];
  }
  return self;
}

+ (instancetype) viewWithFrameAndTitle:(CGRect)frame title:(NSString *) title {
  return [[self alloc] initWithFrameAndTitle:frame title:title];
}

- (void)configureView {
  [self setActivityIndicatorViewStyle:UIActivityIndicatorViewStyleWhiteLarge];
  [self setHidesWhenStopped:YES];
  [self startAnimating];
  [self setBackgroundColor:[UIColor colorWithRed:0.0 green:0.0 blue:0.0 alpha:0.8]];
  [self.layer setCornerRadius:10];
  [self configureTitleLabel];
}

- (void)configureTitleLabel {
  [self.titleLabel setNumberOfLines:1];
  [self.titleLabel sizeToFit];
  [self.titleLabel setTextColor:[UIColor whiteColor]];
  
  float spinnerHeight = 17.5;
  CGFloat titleLabelX = (self.frame.size.width - self.titleLabel.frame.size.width)/2;
  CGFloat titleLabelY = (self.frame.size.height/2 - self.titleLabel.frame.size.height - spinnerHeight)/2;
  
  [self.titleLabel setFrame:CGRectMake(titleLabelX, titleLabelY, self.titleLabel.frame.size.width, self.titleLabel.frame.size.height)];
  [self addSubview:self.titleLabel];
  [self bringSubviewToFront:self.titleLabel];
}


@end
