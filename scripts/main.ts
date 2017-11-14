import "@material/grid-list/dist/mdc.grid-list.min.css";
import "@material/toolbar/dist/mdc.toolbar.min.css";
import { html, render } from "lit-html";

import { Repo } from "./types/repo.type";
const USER_NAME = "umarov";
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

async function getData() {
  const [ repos ] = await Promise.all([getRepos(), getUser()]);
  const reposElement = document.querySelector("#github-repos") as Element;

  requestAnimationFrame(() => {
    render(buildReposTemplate(repos), reposElement);
    Array.from(document.querySelectorAll(".mdc-grid-tile")).map((tile: Element) => {
      tile.addEventListener("click", (event: any) => {
        window.open(event.target.parentElement.parentElement.getAttribute("data-repo-url"), "_blank");
      });

      window.onbeforeunload = () => {
        tile.removeEventListener("click", (event: any) => {
          window.open(event.target.parentElement.parentElement.getAttribute("data-repo-url"), "_blank");
        });
      };
    });
  });
}

getData();
