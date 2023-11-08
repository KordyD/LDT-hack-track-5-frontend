import { Box, Button, Group, Stack, Text, TextInput } from '@mantine/core';
import React from 'react';

export const Audio = () => {
  return (
    <>
      <TextInput />
      <Button>Добавить аудио</Button>
      <Stack>
        <Group justify='space-between'>
          <Text>История в цифрах</Text>
        </Group>
      </Stack>
    </>
  );
};
