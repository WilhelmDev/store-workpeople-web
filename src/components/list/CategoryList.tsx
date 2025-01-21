import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Chip, Typography, Box } from '@mui/material';
import { Category } from '@/interfaces/category';

interface CategoryListProps {
  categories: Category[];
}

export default function CategoryList({ categories }: CategoryListProps) {
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.id} divider>
          <ListItemIcon>
            <Box
              sx={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: category.color,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary={category.name}
            secondary={
              <Typography variant="body2" color="text.secondary">
                ID: {category.id}
              </Typography>
            }
          />
          <Chip label={`Store ID: ${category.storeId}`} variant="outlined" />
        </ListItem>
      ))}
    </List>
  )
}