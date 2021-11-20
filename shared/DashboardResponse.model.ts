import { GithubFollower, GithubProfil } from './github.models'

export type DashBoardResponse = {
  code: number,
  message: string,
  response: GithubFollower[] | GithubProfil,
};
