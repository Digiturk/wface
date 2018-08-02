export default interface IScreenProvider {
  getScreen(project: string, screen: string): Promise<object>
}