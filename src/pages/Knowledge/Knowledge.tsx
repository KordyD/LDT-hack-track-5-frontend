import { Anchor, Box, Button, Group, Modal, Stack, Text } from '@mantine/core';
import { CardsKnowledge } from '../../modules/CardsKnowledge/CardsKnowledge';
import { InputKnowledge } from '../../modules/InputKnowledge/InputKnowledge';
import classes from './Knowledge.module.css';
import { useDisclosure } from '@mantine/hooks';

export const Knowledge = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Box mb='lg'>
        <InputKnowledge />
      </Box>
      <Box mb='lg' className={classes.wrapperHistory}>
        <Button onClick={open} variant='transparent'>
          История
        </Button>
      </Box>
      <Modal opened={opened} onClose={close} title='История'>
        <Stack>
          <Group>
            <Anchor>Аудиолекция</Anchor>
            <Text>История в цифрах</Text>
            <Text>04.11.23</Text>
            <Text>18:20</Text>
          </Group>
          <Group>
            <Anchor>Аудиолекция</Anchor>
            <Text>История в цифрах</Text>
            <Text>04.11.23</Text>
            <Text>18:20</Text>
          </Group>
          <Group>
            <Anchor>Аудиолекция</Anchor>
            <Text>История в цифрах</Text>
            <Text>04.11.23</Text>
            <Text>18:20</Text>
          </Group>
          <Group>
            <Anchor>Аудиолекция</Anchor>
            <Text>История в цифрах</Text>
            <Text>04.11.23</Text>
            <Text>18:20</Text>
          </Group>
          <Button fullWidth variant='transparent'>
            Смотреть всё
          </Button>
        </Stack>
      </Modal>
      <CardsKnowledge />
    </>
  );
};
