import { storefrontPageModel } from "./models/storefrontPageModel.class";

export class storefrontContentService {
  domainName = null;

  constructor(domainName) {
    this.domainName = domainName;
  }

  fetchPage(params) {
    const pathName = "/api/get-page?page=";
    return fetch(this.domainName + pathName + params.urlTitlePath)
      .then((response) => response.json())
      .then((response) => (response.pageData ? response.pageData : false))
      .then((response) => {
        if (response.components) {
          return new storefrontPageModel(
            response.urlTitle,
            response.urlTitlePath,
            response.components
          );
        }
        return response;
      })
      .then((response) => {
        return { isSuccess: true, response };
      })
      .catch((err) => {
        console.log("Get Page API Error", err);
      });
  }
}
