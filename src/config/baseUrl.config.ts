interface IUrlMap {
  [key: string]: string;
}

export const baseUrlMap: IUrlMap = {
  development: "mock-server", // mock-server
  test: "",
  uat: "",
  production: "",
  staging: "",
};
