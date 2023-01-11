// implementations
export { default as MenuTreeUtil } from './implementations/menu-tree-util';

// interfaces 
export { default as IConfiguration } from './interfaces/i-configuration';
export { default as IAuthService, IMenuTreeItem } from './interfaces/i-auth-service';
export { default as IHttpService } from './interfaces/i-http-service';
export { default as ISearchProvider } from './interfaces/i-search-provider';
export { default as IComponents } from './interfaces/i-components';
export { default as IAppHooks } from './interfaces/i-app-hooks';

// wrappers
export { default as AuthServiceWrapper } from './wrappers/auth-service-wrapper';
export { default as HttpServiceWrapper } from './wrappers/http-service-wrapper';


// Inversify Implementation

import { Container } from "inversify";
export const IOC = new Container();