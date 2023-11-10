import { Button, Group, Stack, TextInput } from '@mantine/core';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { BackButton } from '../../components/BackButton/BackButton';
import { AudioItem } from '../../components/AudioItem/AudioItem';

export const Audio = () => {
  return (
    <>
      <TextInput variant='primary' placeholder='Найти аудио' />
      <Group justify='space-between'>
        <Button rightSection={<AiOutlinePaperClip />} variant='white' my={15}>
          Добавить аудио
        </Button>
        <BackButton>Назад</BackButton>
      </Group>
      <Stack>
        <AudioItem />
        <AudioItem />
        <AudioItem />
        <AudioItem />
        <AudioItem />
      </Stack>
    </>
  );
};
