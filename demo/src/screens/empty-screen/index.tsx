import React, { FC } from 'react';
import { useBaseScreenProps } from 'wface';

export const EmptyScreen: FC = () => {
  const baseScreenProps = useBaseScreenProps();

  return (
    <div>
      <div>
        <button onClick={() => baseScreenProps.showSnackbar("OK", "success")}>Click</button>
        <pre>
          {JSON.stringify(baseScreenProps.screenData, null, 2)}
        </pre>
      </div>
      Empty screen
    </div>
  );
}