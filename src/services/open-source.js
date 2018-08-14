import { getProjects } from '~/services/contents';
import { getGitHubRepositories } from '~/services/github';

export function getOpenSource() {
  return Promise.all([
    getGitHubRepositories(),
    getProjects()
  ])
    .then(([ repositories, projects ]) => [
      ...projects.map((item) => ({
        ...item,
        type: 'views.home.filter.project'
      })),
      ...repositories.map((item) => ({
        ...item,
        type: 'views.home.filter.repository'
      }))
    ].sort((a, b) => a.name.localeCompare(b.name)));
}
