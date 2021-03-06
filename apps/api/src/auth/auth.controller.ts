/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Google Connection
  @Get('/google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req: Request) {}

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  @Redirect()
  googleAuthCallback(@Req() req: Request) {
    const body = this.authService.googleLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=google',
    };
  }

  // Github Connection
  @Get('/github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req: Request) {}

  @Get('/github/redirect')
  @UseGuards(AuthGuard('github'))
  @Redirect()
  githubAuthCallback(@Req() req: Request) {
    const body = this.authService.githubLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=github',
    };
  }

  // Spotify Connection
  @Get('/spotify')
  @UseGuards(AuthGuard('spotify'))
  async spotifyAuth(@Req() req: Request) {}

  @Get('/spotify/redirect')
  @UseGuards(AuthGuard('spotify'))
  @Redirect()
  spotifyAuthCallback(@Req() req: Request) {
    const body = this.authService.spotifyLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=spotify',
    };
  }

  // Linkedin Connection
  @Get('/linkedin')
  @UseGuards(AuthGuard('linkedin'))
  async linkedinAuth(@Req() req: Request) {}

  @Get('/linkedin/redirect')
  @UseGuards(AuthGuard('linkedin'))
  @Redirect()
  linkedinAuthCallback(@Req() req: Request) {
    const body = this.authService.linkedinLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=linkedin',
    };
  }

  // Discord Connection
  @Get('/discord')
  @UseGuards(AuthGuard('discord'))
  async discordAuth(@Req() req: Request) {}

  @Get('/discord/redirect')
  @UseGuards(AuthGuard('discord'))
  @Redirect()
  discordAuthCallback(@Req() req: Request) {
    const body = this.authService.discordLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=discord',
    };
  }

  // Gitlab Connection
  @Get('/gitlab')
  @UseGuards(AuthGuard('gitlab'))
  async gitlabAuth(@Req() req: Request) {}

  @Get('/gitlab/redirect')
  @UseGuards(AuthGuard('gitlab'))
  @Redirect()
  gitlabAuthCallback(@Req() req: Request) {
    const body = this.authService.gitlabLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=gitlab',
    };
  }

  // Youtube Connection
  @Get('/youtube')
  @UseGuards(AuthGuard('google'))
  async youtubeAuth(@Req() req: Request) {}

  @Get('/youtube/redirect')
  @UseGuards(AuthGuard('google'))
  @Redirect()
  youtubeAuthCallback(@Req() req: Request) {
    const body = this.authService.youtubeLogin(req);
    return {
      url:
        'http://localhost:3000/auth/success?access_token=' +
        body.user.accessToken +
        '&provider=youtube',
    };
  }
}
