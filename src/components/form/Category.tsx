import React, { useState } from 'react';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { CategoryPayload } from '@/interfaces/category';

interface CategoryFormProps {
  onSubmit: (payload:CategoryPayload) => void;
}

const CategoryForm: React.FC<CategoryFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState('');

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleColorChange = (event: SelectChangeEvent) => {
    setColor(event.target.value as string);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name, color });
    setName('');
    setColor('');
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
      <TextField
        fullWidth
        label="Nombre de la categoría"
        value={name}
        onChange={handleNameChange}
        margin="normal"
        required
      />
      <FormControl fullWidth margin="normal" required>
        <InputLabel id="color-select-label">Color</InputLabel>
        <Select
          labelId="color-select-label"
          value={color}
          label="Color"
          onChange={handleColorChange}
        >
          <MenuItem value="red">Rojo</MenuItem>
          <MenuItem value="blue">Azul</MenuItem>
          <MenuItem value="green">Verde</MenuItem>
          <MenuItem value="yellow">Amarillo</MenuItem>
          <MenuItem value="purple">Morado</MenuItem>
        </Select>
      </FormControl>
      <Button type="submit" size='large' variant="contained" color="primary" sx={{ mt: 2, width:'100%' }}>
        Crear Categoría
      </Button>
    </Box>
  );
};

export default CategoryForm;