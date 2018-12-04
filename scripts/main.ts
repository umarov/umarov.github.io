import { html, render } from 'lit-html';
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

function getRepoTemplate(repo: Repo) {
  return html`
    <li class="mdc-grid-tile" data-repo-url="${repo.html_url}">
      <div class="mdc-grid-tile__primary">
        <img class="mdc-grid-tile__primary-content" src="images/${repo.language}.png" />
      </div>
      <span class="mdc-grid-tile__secondary">
        <span class="mdc-grid-tile__title">${repo.name}</span>
      </span>
    </li>
  `;
}

function buildReposTemplate(repos: Repo[]) {
  return html`
    ${repos.map(getRepoTemplate)}
  `;
}

function setUpRepos(repos: Repo[]) {
  const reposElement = document.querySelector('#github-repos') as Element;

  requestAnimationFrame(() => {
    render(buildReposTemplate(repos), reposElement);
    Array.from(document.querySelectorAll('.mdc-grid-tile')).map((tile: Element) => {
      tile.addEventListener('click', (event: any) => {
        window.open(
          event.target.parentElement.parentElement.getAttribute('data-repo-url'),
          '_blank'
        );
      });

      window.onbeforeunload = () => {
        tile.removeEventListener('click', (event: any) => {
          window.open(
            event.target.parentElement.parentElement.getAttribute('data-repo-url'),
            '_blank'
          );
        });
      };
    });
  });
}

function setUpUser(user: User) {
  const profileElement = document.querySelector('#profile') as Element;
  render(
    html`
      <div class="mdc-card user-profile">
        <img class="mdc-card__media-item mdc-card__media-item" src="${user.avatar_url}" />
        <section class="mdc-card__primary user-card">
          <h2 class="mdc-card__title mdc-card__title--large mdc-typography--headline6">
            ${user.name}
          </h2>
          <h3 class="mdc-card__title mdc-typography--subtitle2">
            ${user.company}, ${user.location}
          </h3>
          <p class="mdc-card__subtitle mdc-typography--body2">
            since ${new Date(user.created_at).getFullYear()}
          </p>
        </section>
        <section class="mdc-card__supporting-text">${user.bio}</section>
        <section class="mdc-card__actions">
          <button
            class="mdc-button mdc-card__action mdc-card__action--button"
            onclick="window.open('${user.html_url}', '_blank');"
          >
            Go to github.com profile
          </button>
        </section>
      </div>
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
          .querySelector(`.${button.getAttribute(stateAttribute)}`)!
          .classList.remove('hidden');

        if (unselectedTab) {
          unselectedTab.classList.remove(activeClass);
          const unselectedState = unselectedTab.getAttribute(stateAttribute);
          if (unselectedState) {
            document.querySelector(`.${unselectedState}`)!.classList.add('hidden');
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
