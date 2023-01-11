export default interface IAppHooks {
  onAppDidMount?(): void;
  onAppWillMount?(): void;
  onAppWillUnmount?(): void;
  onLogin?(): void;
  onLogout?(): void;
}