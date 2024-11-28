import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import useGetData from '../../hooks/useGetData';

export default function ComboBox() {
  const [data, loading, error] = useGetData("https://pokeapi.co/api/v2/pokemon?limit=100000");

  return (
    <Autocomplete
      disablePortal
      options={data}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Pokemon" />}
    />
  );
}

