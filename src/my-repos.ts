import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

import { FALLBACK_REPOS, REPO_HIGHLIGHTS, selectFeaturedRepos } from './data/curated-repos';
import type { Repo } from './types/repo.type';
import { fetchWithCache } from './utils/github-cache';

const USER_NAME = 'umarov';
const REPOS_URL = `https://api.github.com/users/${USER_NAME}/repos?per_page=100&sort=updated`;
const CACHE_KEY = 'umarov-github-repos';

@customElement('my-repos')
export class MyRepos extends LitElement {
  @property({ type: Array }) private repos: Repo[] = [];

  @property({ type: String }) private status: 'loading' | 'ready' | 'error' = 'loading';

  @property({ type: Boolean }) private usingFallback = false;

  public connectedCallback(): void {
    super.connectedCallback();
    void this.loadRepos();
  }

  public openRepoUrl(url: string): () => void {
    return (): void => {
      window.open(url, '_blank', 'noopener,noreferrer');
    };
  }

  public openProjectUrl(event: Event, url: string | null | undefined): void {
    event.stopPropagation();
    if (!url) {
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  }

  public render(): TemplateResult {
    if (this.status === 'loading') {
      return html`
        <section class="projects" aria-busy="true">
          <header class="section-header">
            <h2>Featured projects</h2>
          </header>
          <div class="project-grid">
            ${[1, 2, 3, 4].map(
              () => html`
                <article class="project-card project-card--loading">
                  <div class="skeleton skeleton-line skeleton-line--title"></div>
                  <div class="skeleton skeleton-line"></div>
                  <div class="skeleton skeleton-line"></div>
                </article>
              `
            )}
          </div>
        </section>
      `;
    }

    return html`
      <section class="projects">
        <header class="section-header">
          <h2>Featured projects</h2>
          <p class="section-lead">
            A curated selection of open-source work. Browse everything on
            <a href="https://github.com/${USER_NAME}" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
          ${this.status === 'error'
            ? html`
                <p class="status-banner status-banner--error" role="alert">
                  Could not reach the GitHub API. Displaying saved project details instead.
                </p>
              `
            : this.usingFallback
              ? html`
                  <p class="status-banner" role="status">
                    Showing saved project details — live GitHub data is temporarily unavailable.
                  </p>
                `
              : ''}
        </header>

        <ul class="project-grid">
          ${this.repos.map(
            (repo) => html`
              <li>
                <article
                  class="project-card"
                  tabindex="0"
                  @click="${this.openRepoUrl(repo.html_url)}"
                  @keydown="${(event: KeyboardEvent) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                      event.preventDefault();
                      this.openRepoUrl(repo.html_url)();
                    }
                  }}"
                >
                  <div class="project-card__header">
                    <h3 class="project-card__title">${repo.name}</h3>
                    ${repo.language
                      ? html`
                          <span class="lang-badge lang-badge--${repo.language.toLowerCase()}"> ${repo.language} </span>
                        `
                      : ''}
                  </div>
                  <p class="project-card__highlight">
                    ${REPO_HIGHLIGHTS[repo.name] || repo.description || 'Open-source project on GitHub.'}
                  </p>
                  <div class="project-card__actions">
                    <span class="project-card__link">View repository</span>
                    ${repo.homepage
                      ? html`
                          <button
                            class="button button--ghost"
                            type="button"
                            @click="${(event: Event) => this.openProjectUrl(event, repo.homepage)}"
                          >
                            Live demo
                          </button>
                        `
                      : ''}
                  </div>
                </article>
              </li>
            `
          )}
        </ul>
      </section>
    `;
  }

  public createRenderRoot(): HTMLElement {
    return this;
  }

  private async loadRepos(): Promise<void> {
    try {
      const allRepos = await fetchWithCache<Repo[]>(CACHE_KEY, REPOS_URL);
      const featured = selectFeaturedRepos(allRepos);

      if (featured.length === 0) {
        this.repos = FALLBACK_REPOS;
        this.usingFallback = true;
        this.status = 'ready';
        return;
      }

      this.repos = featured;
      this.status = 'ready';
    } catch {
      this.repos = FALLBACK_REPOS;
      this.usingFallback = true;
      this.status = 'error';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-repos': MyRepos;
  }
}
