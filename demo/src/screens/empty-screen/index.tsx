import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { useBaseScreenProps, WButton, WTable } from 'wface';

// memory leak
// pagination horizontal scroll problem

export const EmptyScreen: FC = () => {
  const { showSnackbar } = useBaseScreenProps();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any[]>([]);
  const columns: any[] = useMemo(() => [
    { field: 'id', title: 'Id' },
    { field: 'userId', title: 'User Id' },
    { field: 'title', title: 'Title' },
    { field: 'completed', title: 'Completed', type: 'boolean' },

  ], []);


  const loadData = useCallback(async () => {
    setLoading(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      showSnackbar('Bir hata alındı', 'error');
      console.log("ERROR", err);
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <WButton
        sx={{ mb: 2 }}
        onClick={loadData}
        variant="contained"
      >
        Refresh
      </WButton>
      <WTable
        columns={columns}
        data={data}
        isLoading={loading}        
      />
    </>
  );
}