# Oauth2

For all authentication providers you want to use, you have to fill `.env` in `apps/api/`.

**.env**

```sh
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_CALLBACK_URL=http://localhost:8080/auth/redirect
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GITHUB_CALLBACK_URL=http://localhost:8080/auth/github/redirect
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_CALLBACK_URL=http://localhost:8080/auth/spotify/redirect
LINKEDIN_CLIENT_ID=
LINKEDIN_CLIENT_SECRET=
LINKEDIN_CALLBACK_URL=http://localhost:8080/auth/linkedin/redirect
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
DISCORD_CALLBACK_URL=http://localhost:8080/auth/discord/redirect
GITLAB_CLIENT_ID=
GITLAB_CLIENT_SECRET=
GITLAB_CALLBACK_URL=http://localhost:8080/auth/gitlab/redirect
```

[Google auth](https://console.cloud.google.com/apis/dashboard)

[Github auth](https://github.com/settings/applications/)

[Spotify auth](https://developer.spotify.com/dashboard/applications/)
