import { useCallback, useEffect, useMemo, useState } from 'react';

import { TableItem } from '~shared';

const useTableSelection = <T extends TableItem>(tableData: T[]) => {
  const [selectedItemIds, setSelectedItemIds] = useState<string[]>([]);

  useEffect(() => {
    setSelectedItemIds([]);
  }, [tableData]);

  const isSelectedAll = useMemo(
    () => selectedItemIds.length === tableData.length,
    [selectedItemIds.length, tableData.length]
  );

  const onRowSelectChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, rowData: T) => {
      event.stopPropagation();
      event.preventDefault();

      setSelectedItemIds((prevState) => {
        const newState = [...prevState];
        const selectedIndex = newState.indexOf(rowData.id);

        if (selectedIndex >= 0) {
          newState.splice(selectedIndex, 1);
        } else {
          newState.push(rowData.id);
        }
        return newState;
      });
    },
    [setSelectedItemIds]
  );

  const onSelectAllChange = useCallback(
    () => setSelectedItemIds(isSelectedAll ? [] : tableData.map((rowData) => rowData.id)),
    [setSelectedItemIds, isSelectedAll, tableData]
  );

  return {
    setSelectedItemIds,
    selectedItemIds,
    onRowSelectChange,
    onSelectAllChange,
    isSelectedAll,
  };
};

export default useTableSelection;
