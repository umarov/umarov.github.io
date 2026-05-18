import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { TemplateResult } from 'lit';

import type { User } from './types/user.type';
import { fetchWithCache } from './utils/github-cache';

const USER_NAME = 'umarov';
const USER_URL = `https://api.github.com/users/${USER_NAME}`;
const CACHE_KEY = 'umarov-github-user';

@customElement('user-profile')
export class UserProfile extends LitElement {
  @property({ type: Object }) private user: User = {
    avatar_url: '',
    bio: '',
    company: '',
    created_at: '',
    html_url: '',
    location: '',
    name: ''
  };

  @property({ type: String }) private status: 'loading' | 'ready' | 'error' = 'loading';

  public connectedCallback(): void {
    super.connectedCallback();
    void this.loadUser();
  }

  public render(): TemplateResult {
    if (this.status === 'loading') {
      return html`
        <aside class="profile-card profile-card--loading" aria-busy="true">
          <div class="skeleton skeleton-avatar"></div>
          <div class="skeleton skeleton-line skeleton-line--title"></div>
          <div class="skeleton skeleton-line"></div>
          <div class="skeleton skeleton-line skeleton-line--short"></div>
        </aside>
      `;
    }

    if (this.status === 'error') {
      return html`
        <aside class="profile-card profile-card--error">
          <p class="profile-error">Could not load profile data from GitHub right now.</p>
          <a
            class="button button--secondary"
            href="https://github.com/${USER_NAME}"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub profile
          </a>
        </aside>
      `;
    }

    const memberSince = this.user.created_at ? new Date(this.user.created_at).getFullYear() : '';

    return html`
      <aside class="profile-card">
        <img
          class="profile-avatar"
          src="${this.user.avatar_url}"
          alt="Portrait of ${this.user.name}"
          width="280"
          height="280"
        />
        <div class="profile-body">
          <h2 class="profile-name">${this.user.name}</h2>
          <p class="profile-meta">
            ${this.user.company ? html`<span>${this.user.company}</span>` : ''}
            ${this.user.location ? html`<span>${this.user.location}</span>` : ''}
          </p>
          ${memberSince ? html`<p class="profile-since">GitHub member since ${memberSince}</p>` : ''}
          ${this.user.bio
            ? html`<p class="profile-bio">${this.user.bio}</p>`
            : html` <p class="profile-bio">Software engineer exploring backends, tooling, and web platforms.</p> `}
          <div class="profile-links">
            <a class="button button--primary" href="${this.user.html_url}" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a class="button button--secondary" href="https://mumarov.com" target="_blank" rel="noopener noreferrer">
              Personal site
            </a>
          </div>
        </div>
      </aside>
    `;
  }

  public createRenderRoot(): HTMLElement {
    return this;
  }

  private async loadUser(): Promise<void> {
    try {
      this.user = await fetchWithCache<User>(CACHE_KEY, USER_URL);
      this.status = 'ready';
    } catch {
      this.status = 'error';
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'user-profile': UserProfile;
  }
}
