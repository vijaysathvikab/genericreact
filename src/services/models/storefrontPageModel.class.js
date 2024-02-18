export class storefrontPageModel {
  urlTitle = "";
  urlTitlePath = "";
  components = [];

  constructor(urlTitle = "home", urlTitlePath = "home", components = []) {
    this.urlTitle = urlTitle;
    this.urlTitlePath = urlTitlePath;
    this.components = components;
  }
}
