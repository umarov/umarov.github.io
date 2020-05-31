import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';

import { User } from './types/user.type';

const USER_NAME = 'umarov';
const USER_URL = `https://api.github.com/users/${USER_NAME}`;
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

  public connectedCallback(): void {
    super.connectedCallback();
    this.getUser()
  }

  public render(): TemplateResult {
    return html`
      <div class="mdc-card user-profile">
        <img class="mdc-card__media-item mdc-card__media-item" src="${this.user.avatar_url}" />
        <section class="mdc-card__primary user-card">
          <h2 class="mdc-card__title mdc-card__title--large mdc-typography--headline6">
            ${this.user.name}
          </h2>
          <h3 class="mdc-card__title mdc-typography--subtitle2">
            ${this.user.company}, ${this.user.location}
          </h3>
          <p class="mdc-card__subtitle mdc-typography--body2">
            since ${new Date(this.user.created_at).getFullYear()}
          </p>
        </section>
        <section class="mdc-card__supporting-text">${this.user.bio}</section>
        <section class="mdc-card__actions">
          <button
            class="mdc-button mdc-card__action mdc-card__action--button"
            onclick="window.open('${this.user.html_url}', '_blank');"
          >
            Go to github.com profile
          </button>
        </section>
      </div>
    `;
  }

  public createRenderRoot(): this {
    return this;
  }


  async getUser(): Promise<void> {
    const response = await fetch(USER_URL);
    this.user = (await response.json()) as User;
  }

}
