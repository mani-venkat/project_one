import React, { useState } from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Form from './Form';
import FormTable from './FormTable';

const PageSwitcher = () => {
  const [page, setPage] = useState('page1');

  const handlePageChange = (event, newPage) => {
    if (newPage !== null) {
      setPage(newPage);
    }
  };

  return (
    <div>
      <ToggleButtonGroup
        value={page}
        exclusive
        onChange={handlePageChange}
        aria-label="page selector"
      >
        <ToggleButton value="page1" aria-label="page 1">
          Page 1
        </ToggleButton>
        <ToggleButton value="page2" aria-label="page 2">
          Page 2
        </ToggleButton>
      </ToggleButtonGroup>

      {page === 'page1' && (
        <div>
            <Form />
        </div>
      )}

      {page === 'page2' && (
        <div>
            <FormTable />
        </div>
      )}
    </div>
  );
};

export default PageSwitcher;
