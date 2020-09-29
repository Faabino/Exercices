import fetch, { Response } from "node-fetch";

export type Repo = {
  url: string;
  name: string;
  [key: string]: string | number | boolean | null;
};

export class GithubClient {
  static getReposUrl(nickname: string): Promise<string> {
    return fetch(`https://api.github.com/users/${nickname}`, {
      method: "GET",
    })
      .then((response: Response) => response.json())
      .then((answer) => answer.repos_url);
  }

  static getRepos(url: string): Promise<string> {
    return fetch(`${url}`, {
      method: "GET",
    }).then((response) => response.json());
  }

  static printRepos(array: []): Promise<string> {
    return fetch(`${array}`).then();
  }

  static printRepository(): void {
    return;
  }

  static getProjectInformations(url: string): Promise<string> {
    return fetch(`${url}`, {
      method: "GET",
    }).then((response) => response.json());
  }
}
