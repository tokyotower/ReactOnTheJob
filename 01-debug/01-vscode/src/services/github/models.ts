export interface User {
  login: string | null;
  id: number;
  nodeId: string | null;
  avatarUrl: string | null;
  gravatarId: string | null;
  url: string | null;
  htmlUrl: string | null;
  followersUrl: string | null;
  followingUrl: string | null;
  gistsUrl: string | null;
  starredUrl: string | null;
  subscriptionsUrl: string | null;
  organizationsUrl: string | null;
  reposUrl: string | null;
  eventsUrl: string | null;
  receivedEventsUrl: string | null;
  type: string | null;
  siteAdmin: boolean;
}

export interface Repository {
  id: number;
  name: string | null;
  fullName: string | null;
  private: boolean;
  owner: User;
  htmlUrl: string | null;
  description: string | null;
  fork: boolean;
  url: string | null;
  forksUrl: string | null;
  keysUrl: string | null;
  collaboratorsUrl: string | null;
  teamsUrl: string | null;
  hooksUrl: string | null;
  issueEventsUrl: string | null;
  eventsUrl: string | null;
  assigneesUrl: string | null;
  branchesUrl: string | null;
  tagsUrl: string | null;
  blobsUrl: string | null;
  gitTagsUrl: string | null;
  gitRefsUrl: string | null;
  treesUrl: string | null;
  statusesUrl: string | null;
  languagesUrl: string | null;
  stargazersUrl: string | null;
  contributorsUrl: string | null;
  subscribersUrl: string | null;
  subscriptionUrl: string | null;
  commitsUrl: string | null;
  gitCommitsUrl: string | null;
  commentsUrl: string | null;
  issueCommentUrl: string | null;
  contentsUrl: string | null;
  compareUrl: string | null;
  mergesUrl: string | null;
  archiveUrl: string | null;
  downloadsUrl: string | null;
  issuesUrl: string | null;
  pullsUrl: string | null;
  milestonesUrl: string | null;
  notificationsUrl: string | null;
  labelsUrl: string | null;
  releasesUrl: string | null;
  deploymentsUrl: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  pushedAt: string | null;
  gitUrl: string | null;
  sshUrl: string | null;
  cloneUrl: string | null;
  svnUrl: string | null;
  homepage: string | null;
  size: number;
  stargazersCount: number;
  watchersCount: number;
  language: string | null;
  hasIssues: boolean;
  hasProjects: boolean;
  hasDownloads: boolean;
  hasWiki: boolean;
  hasPages: boolean;
  forksCount: number;
  mirrorUrl: string | null;
  archived: boolean;
  openIssuesCount: number;
  license: License;
  forks: number;
  openIssues: number;
  watchers: number;
  defaultBranch: string | null;
  score: number;
}
export interface License {
  key: string | null;
  name: string | null;
  spdxId: string | null;
  url: string | null;
  nodeId: string | null;
}