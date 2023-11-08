import { Button, Group, Stack, Text, TextInput } from '@mantine/core';

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
