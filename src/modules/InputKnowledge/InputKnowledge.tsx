import { Box, Button, Group, TextInput } from '@mantine/core';
import classes from './InputKnowledge.module.css';

export const InputKnowledge = () => {
  return (
    <Group gap='lg'>
      <Box className={classes.wrapperInput}>
        <TextInput
          radius='xl'
          placeholder='Найти тему или статью'
          classNames={{ input: classes.input }}
        />
      </Box>
      <Button radius='xl' px='45px'>
        Поиск
      </Button>
    </Group>
  );
};
