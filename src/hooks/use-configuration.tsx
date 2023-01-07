import { useSelector } from "react-redux";
import { IConfiguration } from "../ioc";
import { WStore } from "../store";

export const useConfiguration = (): IConfiguration => useSelector((state: WStore) => state.appContext.configuration);