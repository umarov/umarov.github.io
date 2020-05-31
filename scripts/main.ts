import { html, render, TemplateResult } from 'lit-html';
import './styles';

import { MDCTabBar } from '@material/tab-bar/index';
import { MDCTopAppBar } from '@material/top-app-bar/index';
import { Repo } from './types/repo.type';
import { User } from './types/user.type';

const USER_NAME = 'umarov';
const REPOS_URL = `https://api.github.com/users/${USER_NAME}/repos`;
const USER_URL = `https://api.github.com/users/${USER_NAME}`;
const activeClass = 'mdc-tab--active';
const activeTabIndicator = 'mdc-tab-indicator--active';
const stateAttribute = 'data-state-name';

async function getRepos(): Promise<Repo[]> {
  const response = await fetch(REPOS_URL);
  const repos = (await response.json()) as Repo[];
  return repos;
}

async function getUser(): Promise<User> {
  const response = await fetch(USER_URL);
  const user = (await response.json()) as User;
  return user;
}

function buildReposTemplate(repos: Repo[]): TemplateResult {
  return html`
    ${repos.map(
      repo => html`
        <repo-grid-tile
          class="mdc-grid-tile"
          language="${repo.language || ''}"
          name="${repo.name}"
          html-url="${repo.html_url}"
          homepage="${repo.homepage || ''}"
        />
      `
    )}
  `;
}

function setUpRepos(repos: Repo[]): void {
  const reposElement = document.querySelector('#github-repos') as Element;

  requestAnimationFrame(() => {
    render(buildReposTemplate(repos), reposElement);
  });
}

function setUpUser(user: User): void {
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

async function getData(): Promise<[Repo[], User]> {
  return Promise.all([getRepos(), getUser()]);
}

function setUpTabClickListeners(): void {
  const tabBar = new MDCTabBar(document.querySelector('.mdc-tab-bar'));
  tabBar.toString();
  const tabs = Array.from(document.querySelectorAll('.mdc-tab')) as HTMLButtonElement[];
  const tabIndicators = Array.from(document.querySelectorAll('.mdc-tab-indicator'));

  if (tabs) {
    tabs.map(tab => {
      return tab.addEventListener('click', (event: MouseEvent) => {
        if (event?.target) {
          const tabElement = event.target as HTMLDivElement;

          const button = tabElement.parentElement as HTMLButtonElement;
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
          const selectedTab = document.querySelector(`.${stateName}`);
          selectedTab && selectedTab.classList.remove('hidden');

          if (unselectedTab) {
            unselectedTab.classList.remove(activeClass);
            const unselectedState = unselectedTab.getAttribute(stateAttribute);
            if (unselectedState) {
              const unselectedTab = document.querySelector(`.${unselectedState}`);
              unselectedTab && unselectedTab.classList.add('hidden');
            }
          }

          if (stateName) {
            window.location.hash = stateName;
          }
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

import('./user-profile');
import('./repo-grid-tile');

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
