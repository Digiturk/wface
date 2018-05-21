import { Container } from "inversify";

import { IAuthProvider } from "@wface/container";
import AuthProvider from './AuthProvider';

const container = new Container();
container.bind<IAuthProvider>("IAuthProvider").to(AuthProvider).inSingletonScope();

export { container }
