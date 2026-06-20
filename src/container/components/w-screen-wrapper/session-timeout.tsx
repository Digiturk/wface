import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
  FC,
  createContext,
} from "react";
import {
  useAppContext,
  useConfiguration,
  useUserContext,
} from "../../../store";

const SessionTimeoutContext = createContext<any>(null as any);

const SessionTimeout: FC<{ children: React.ReactNode }> = ({ children }) => {
  const configuration = useConfiguration();
  const userContext = useUserContext();
  const appContext = useAppContext();

  const logoutClicked = useCallback(() => {
    userContext.logout();

    try {
      if (configuration.hooks?.onLogout) {
        configuration.hooks?.onLogout();
      }
    } catch (e) {
      console.log(e);
    }

    appContext.clear();
  }, [userContext.logout, appContext.clear]);
  const checkForInactivity = () => {
    const expireTime = Number(sessionStorage.getItem("expireTime"));

    if (expireTime < Date.now()) {
      logoutClicked();
    }
  };

  const updateExpireTime = () => {
    const expireTime = Date.now() + 720000;
    sessionStorage.setItem("expireTime", expireTime.toString());
  };

  useEffect(() => {
    const interval = setInterval(() => {
      checkForInactivity();
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    updateExpireTime();

    window.addEventListener("click", updateExpireTime);
    window.addEventListener("scroll", updateExpireTime);
    window.addEventListener("keypress", updateExpireTime);
    window.addEventListener("mousemove", updateExpireTime);
    return () => {
      window.removeEventListener("click", updateExpireTime);
      window.removeEventListener("scroll", updateExpireTime);
      window.removeEventListener("keypress", updateExpireTime);
      window.removeEventListener("mousemove", updateExpireTime);
    };
  }, []);

  // change fragment to modal and handleclose func to close
  return (
    <SessionTimeoutContext.Provider
      value={{ logoutClicked, checkForInactivity, updateExpireTime }}
    >
      {children}
    </SessionTimeoutContext.Provider>
  );
};

export default SessionTimeout;
