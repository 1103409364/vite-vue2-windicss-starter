interface State {
  language: string;
}
interface PermissionsState {
  accessToken: string;
  username: string;
  avatar: string;
  permissions: Array<string>;
}
interface RoutesState {
  routes: Array<RouteItem>;
  partialRoutes: RouteItem[];
}
