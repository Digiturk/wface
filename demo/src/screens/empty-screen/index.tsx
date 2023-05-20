import React, { FC, useCallback, useState } from 'react';
import { WDatePicker } from 'wface';
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme: any) => ({
  selectRoot: {
    '& .w_select__input-container': {
      background: 'white'
    }
  }
}));

export const EmptyScreen: FC = () => {
  const [date, setDate] = useState<Date>(new Date(2017, 8 - 1, 9));

  return (
    <div>
      <div>
        <WDatePicker
          value={date}
          onChange={(val: any) => setDate(val)}
          format="dd.MM.yyyy"
        />
        {date.toLocaleDateString()}
      </div>
    </div>
  );
}