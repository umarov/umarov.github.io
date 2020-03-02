import { customElement, html, LitElement, property } from 'lit-element';

@customElement('repo-grid-tile')
export class RepoGridTile extends LitElement {
  @property({ type: String }) public language = '';
  @property({ type: String }) public name = '';
  @property({ type: String, attribute: 'html-url' }) public htmlUrl = '';
  @property({ type: String }) public homepage = '';

  public connectedCallback() {
    super.connectedCallback();

    if (!!this.homepage) {
      this.addEventListener('click', this.goToHomepage(this.homepage));
    }
  }
  public disconnectedCallback() {
    if (!!this.homepage) {
      this.removeEventListener('click', this.goToHomepage(this.homepage));
    }

    super.disconnectedCallback();
  }

  public goToHomepage(homepage: string | null | undefined) {
    return () => {
      if (!homepage) { return; }

      window.open(
        homepage,
        '_blank'
      );
    };
  }

  public render() {
    return html`
      <div class="mdc-grid-tile__primary">
        ${this.language ?
          html`<img class="mdc-grid-tile__primary-content" src="images/${this.language}.png" />` :
          html`
            <h3>${this.name}</h3>
          `}
      </div>

      <span class="mdc-grid-tile__secondary" data-repo-url="${this.htmlUrl}">
        <span class="mdc-grid-tile__title">${this.name}</span>
        <br />

        <button
          class="mdc-button mdc-button--dense" style="--mdc-theme-primary: white"
          data-repo-url="${this.htmlUrl}">
          Repo
        </button>

        ${this.homepage ?
          html`<button
            class="mdc-button mdc-button--outlined mdc-button--dense"
            style="--mdc-theme-primary: white; padding: 0px 10px 0px 10px;"
            @click="${this.goToHomepage(this.homepage)}">
            Homepage
          </button>` : ''}
      </span>
    `;
  }

  public createRenderRoot() {
    return this;
  }
}
