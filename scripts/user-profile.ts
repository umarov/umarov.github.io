import { customElement, html, LitElement, property, TemplateResult } from 'lit-element';

@customElement('user-profile')
export class UserProfile extends LitElement {
  @property({ type: String, attribute: 'avatar-url' }) public avatarUrl = '';
  @property({ type: String }) public name = '';
  @property({ type: String }) public company = '';
  @property({ type: String }) public location = '';
  @property({ type: Date, attribute: 'created-at' }) public createdAt = new Date();
  @property({ type: String }) public bio = '';
  @property({ type: String, attribute: 'html-url' }) public htmlUrl = '';

  public render(): TemplateResult {
    return html`
      <div class="mdc-card user-profile">
        <img class="mdc-card__media-item mdc-card__media-item" src="${this.avatarUrl}" />
        <section class="mdc-card__primary user-card">
          <h2 class="mdc-card__title mdc-card__title--large mdc-typography--headline6">
            ${this.name}
          </h2>
          <h3 class="mdc-card__title mdc-typography--subtitle2">
            ${this.company}, ${this.location}
          </h3>
          <p class="mdc-card__subtitle mdc-typography--body2">
            since ${new Date(this.createdAt).getFullYear()}
          </p>
        </section>
        <section class="mdc-card__supporting-text">${this.bio}</section>
        <section class="mdc-card__actions">
          <button
            class="mdc-button mdc-card__action mdc-card__action--button"
            onclick="window.open('${this.htmlUrl}', '_blank');"
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
}
