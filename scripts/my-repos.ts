import { customElement, html, LitElement, TemplateResult, property } from 'lit-element';
import { Repo } from './types/repo.type';

const USER_NAME = 'umarov';
const REPOS_URL = `https://api.github.com/users/${USER_NAME}/repos`;

@customElement('my-repos')
export class MyRepos extends LitElement {
  @property({ type: Array }) private repos: Repo[] = []

  public connectedCallback(): void {
    super.connectedCallback();

    this.getRepos()
  }

  public goToHomepage(homepage: string | null | undefined): () => void {
    return (): void => {
      if (!homepage) {
        return;
      }

      window.open(homepage, '_blank');
    };
  }

  public render(): TemplateResult {
    return html`
      <ul class="mdc-list mdc-list--two-line mdc-list--avatar-list">
        ${this.repos.map(
          (repo, index) => html`
            <li class="mdc-list-item" tabindex="${index}" @click="${this.goToHomepage(repo.html_url)}">
              <span class="mdc-list-item__graphic">

                ${repo.language
                  ? html`
                      <img async alt="Image for the ${repo.language} language" width="30" src="images/${repo.language}.png" />
                    `
                  : ''}
              </span>
              <span class="mdc-list-item__text">
                <span class="mdc-list-item__primary-text">${repo.name}</span>
                <span class="mdc-list-item__secondary-text">
                  ${repo.description}
                </span>
              </span>

              ${repo.homepage
                ? html`
                    <span class="mdc-list-item__meta">
                      <button class="mdc-button mdc-button--outlined repo-homepage-button" @click="${(e: MouseEvent) => { this.goToHomepage(repo.homepage)(); e.stopPropagation() }}">
                        <div class="mdc-button__ripple"></div>
                        <span class="mdc-button__label">Home Page</span>
                      </button>
                    </span>
                  ` : ''
              }
            </li>
          `
        )}
      </ul>
    `;
  }

  public createRenderRoot(): MyRepos {
    return this;
  }

  private async getRepos(): Promise<void> {
    const response = await fetch(REPOS_URL);
    this.repos = (await response.json()) as Repo[];
  }
}
