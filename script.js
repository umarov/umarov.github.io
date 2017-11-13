import { html, render } from 'lit-html'
import '@material/list/dist/mdc.list.min.css'
import '@material/toolbar/dist/mdc.toolbar.min.css'
const USER_NAME = 'umarov'
const REPOS_URL = `https://api.github.com/users/${USER_NAME}/repos`
const USER_URL = `https://api.github.com/users/${USER_NAME}`

async function getRepos() {
  const response = await fetch(REPOS_URL)
  const repos = await response.json()
  return repos
}

async function getUser() {
  const response = await fetch(USER_URL)
  const user = await response.json()
  return user
}

function getRepoTemplate(repo) {
  return html`
    <li class="mdc-list-item repo-item">
      ${repo.name}
      <a href="${repo.html_url}" class="mdc-list-item__end-detail material-icons" data-mdc-auto-init="MDCRipple">
        link
      </a>
    </li>
  `
}

function buildReposTemplate(repos) {
  return html`${repos.map(getRepoTemplate)}`
}

async function getData() {
  const [repos, user] = await Promise.all([getRepos(), getUser()])
  const reposElement = document.querySelector('#github-repos')
  render(buildReposTemplate(repos), reposElement)
}

getData()
