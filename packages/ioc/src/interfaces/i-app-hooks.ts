export default interface IAppHooks {
  onAppMount?(): void;
  onAppUnmount?(): void;
}