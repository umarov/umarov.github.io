import { html, render } from 'lit-html';
import './styles';

import { MDCTabBar } from '@material/tab-bar/index';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import './repo-grid-tile';
import { Repo } from './types/repo.type';
import { User } from './types/user.type';
import './user-profile';

const USER_NAME = 'umarov';
const REPOS_URL = `https://api.github.com/users/${USER_NAME}/repos`;
const USER_URL = `https://api.github.com/users/${USER_NAME}`;
const activeClass = 'mdc-tab--active';
const activeTabIndicator = 'mdc-tab-indicator--active';
const stateAttribute = 'data-state-name';

async function getRepos() {
  const response = await fetch(REPOS_URL);
  const repos = await response.json();
  return repos;
}

async function getUser() {
  const response = await fetch(USER_URL);
  const user = await response.json();
  return user;
}

function buildReposTemplate(repos: Repo[]) {
  return html`
    ${
      repos.map(
        repo => html`
          <repo-grid-tile
            class="mdc-grid-tile"
            language="${repo.language || ''}"
            name="${repo.name}"
            html-url="${repo.html_url}"
            homepage="${repo.homepage || ''}"
          />
        `
      )
    }
  `;
}

function setUpRepos(repos: Repo[]) {
  const reposElement = document.querySelector('#github-repos') as Element;

  requestAnimationFrame(() => {
    render(buildReposTemplate(repos), reposElement);
  });
}

function setUpUser(user: User) {
  const profileElement = document.querySelector('#profile') as Element;
  render(
    html`
      <user-profile
        avatar-url="${user.avatar_url}"
        name="${user.name}"
        company="${user.company}"
        location="${user.location}"
        created-at="${user.created_at}"
        bio="${user.bio || ''}"
        html-url="${user.html_url}"
      />
    `,
    profileElement
  );
}

async function getData() {
  return Promise.all([getRepos(), getUser()]);
}

function setUpTabClickListeners() {
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  tabBar.toString();
  const tabs = Array.from(document.querySelectorAll('.mdc-tab'));
  const tabIndicators = Array.from(document.querySelectorAll('.mdc-tab-indicator'));

  if (tabs) {
    tabs.map(tab => {
      tab.addEventListener('click', (event: any) => {
        const button = event.target.parentElement as HTMLButtonElement;
        const stateName = button.getAttribute(stateAttribute);
        const tabIndicator = button.querySelector('.mdc-tab-indicator');
        const unselectedTab = tabs.find(t => t !== button);
        if (tabIndicator) {
          tabIndicator.classList.add(activeTabIndicator);
          tabIndicators
            .filter(indicator => indicator !== tabIndicator)
            .map(indicator => indicator.classList.remove(activeTabIndicator));
        }
        button.classList.add(activeClass);
        document
          .querySelector(`.${stateName}`)!
          .classList.remove('hidden');

        if (unselectedTab) {
          unselectedTab.classList.remove(activeClass);
          const unselectedState = unselectedTab.getAttribute(stateAttribute);
          if (unselectedState) {
            document.querySelector(`.${unselectedState}`)!.classList.add('hidden');
          }
        }

        if (stateName) {
          window.location.hash = stateName;
        }
      });
    });
  }
}

setUpTabClickListeners();

getData().then(([repos, user]) => {
  setUpUser(user);
  setUpRepos(repos);
});

document.addEventListener('DOMContentLoaded', () => {
  const topAppBarElement = document.querySelector('.mdc-top-app-bar');
  if (topAppBarElement) {
    const topAppBar = new MDCTopAppBar(topAppBarElement);
    topAppBar.toString();
  }
  const defaultState = 'profile';

  const urlState = window.location.hash.substring(1);
  const stateName = urlState.length > 0 ? urlState : defaultState;

  const stateElement = document.querySelector(`.${stateName}`);

  if (stateElement) {
    stateElement.classList.remove('hidden');
  }

  const tabToActivate = Array.from(document.querySelectorAll('.mdc-tab')).find(
    tab => tab.getAttribute('data-state-name') === stateName
  );

  if (tabToActivate) {
    tabToActivate.classList.add('mdc-tab--active');
    const tabIndicator = tabToActivate.querySelector('.mdc-tab-indicator');

    if (tabIndicator) {
      tabIndicator.classList.add(activeTabIndicator);
    }
  }
});
