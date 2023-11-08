import { Box, Button, Group, TextInput } from '@mantine/core';
import classes from './InputKnowledge.module.css';

export const InputKnowledge = () => {
  return (
    <Group gap={25}>
      <Box className={classes.wrapperInput}>
        <TextInput placeholder='Найти тему или статью' variant='primary' />
      </Box>
      <Button className={classes.button}>Поиск</Button>
    </Group>
  );
};
