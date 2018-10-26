import '../node_modules/@material/button/dist/mdc.button.min.css';
import '../node_modules/@material/card/dist/mdc.card.min.css';
import '../node_modules/@material/grid-list/dist/mdc.grid-list.min.css';
import '../node_modules/@material/tabs/dist/mdc.tabs.min.css';
import '../node_modules/@material/toolbar/dist/mdc.toolbar.min.css';

import { html, render } from 'lit-html';

import { Repo } from './types/repo.type';
import { User } from './types/user.type';
const USER_NAME = 'umarov';
const REPOS_URL = `https://api.github.com/users/${USER_NAME}/repos`;
const USER_URL = `https://api.github.com/users/${USER_NAME}`;

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
  return html`${repos.map(getRepoTemplate)}`;
}

function setUpRepos(repos: Repo[]) {
  const reposElement = document.querySelector('#github-repos') as Element;

  requestAnimationFrame(() => {
    render(buildReposTemplate(repos), reposElement);
    Array.from(
      document.querySelectorAll('.mdc-grid-tile')
    ).map((tile: Element) => {
      tile.addEventListener('click', (event: any) => {
        window.open(
          event.target.parentElement.parentElement.getAttribute(
            'data-repo-url'
          ),
          '_blank'
        );
      });

      window.onbeforeunload = () => {
        tile.removeEventListener('click', (event: any) => {
          window.open(
            event.target.parentElement.parentElement.getAttribute(
              'data-repo-url'
            ),
            '_blank'
          );
        });
      };
    });
  });
}

function setUpUser(user: User) {
  const profileElement = document.querySelector('#profile') as Element;
  render(html`
  <div class="mdc-card user-profile">
    <img class="mdc-card__media-item mdc-card__media-item" src="${user.avatar_url}">
    <section class="mdc-card__primary">
      <h1 class="mdc-card__title mdc-card__title--large">${user.name}</h1>
      <h2 class="mdc-card__title">${user.company}, ${user.location}</h2>
      <p class="mdc-card__subtitle">since ${(new Date(user.created_at)).getFullYear()}</p>
    </section>
    <section class="mdc-card__supporting-text">
      ${user.bio}
    </section>
    <section class="mdc-card__actions">
      <button
        class="mdc-button mdc-button--compact mdc-card__action"
        onclick="window.open('${user.html_url}', '_blank');">Go to github.com profile</button>
    </section>
  </div>
  `, profileElement);
}

async function getData() {
  return Promise.all([getRepos(), getUser()]);
}

function setUpTabClickListeners() {
  const tabs = document.querySelector('#basic-tab-bar');
  const activeClass = 'mdc-tab--active';
  const stateAttribute = 'data-state-name';

  if (tabs) {
    const children = Array.from(tabs.children).filter(child =>
      child.classList.contains('mdc-tab')
    );

    tabs.addEventListener('click', (event: any) => {
      const unselectedTab = children.find(child => child !== event.target);
      event.target.classList.add(activeClass);
      document.querySelector(
        `.${event.target.getAttribute(stateAttribute)}`
      )!.classList.remove('hidden');

      if (unselectedTab) {
        unselectedTab.classList.remove(activeClass);
        const unselectedState = unselectedTab.getAttribute(stateAttribute);
        if (unselectedState) {
          document.querySelector(`.${unselectedState}`)!.classList.add(
            'hidden'
          );
        }
      }
    });
  }
}

setUpTabClickListeners();
getData()
  .then(([repos, user]) => {
    setUpUser(user);
    setUpRepos(repos);
  });

document.addEventListener('DOMContentLoaded', () => {
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
  }
});
