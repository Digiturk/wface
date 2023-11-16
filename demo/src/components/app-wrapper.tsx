import React, { useEffect } from 'react';

export const AppWrapper = (children: any) => {

  useEffect(() => {
    const id = setInterval(() => {
      console.log("timerrr");
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return children;
}