// implementations
export { default as MenuTreeUtil } from './src/implementations/menu-tree-util';

// interfaces 
export { default as IConfiguration } from './src/interfaces/i-configuration';
export { default as IAuthService, IMenuTreeItem } from './src/interfaces/i-auth-service';
export { default as IHttpService } from './src/interfaces/i-http-service';
export { default as ISearchProvider } from './src/interfaces/i-search-provider';
export { default as IComponents } from './src/interfaces/i-components';
export { default as IAppHooks } from './src/interfaces/i-app-hooks';

// wrappers
export { default as AuthServiceWrapper } from './src/wrappers/auth-service-wrapper';
export { default as HttpServiceWrapper } from './src/wrappers/http-service-wrapper';


// Inversify Implementation

import { Container } from "inversify";
const IOC = new Container();
export default IOC;