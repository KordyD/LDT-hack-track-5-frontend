import { ActionIcon, Box, Button, Modal, Text, Title } from '@mantine/core';
import { BiSolidBookmark } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { BsTrash3 } from 'react-icons/bs';
import { RootState } from '../../store';
import { useDisclosure } from '@mantine/hooks';

interface loaderData {
  title: string;
  text: string;
}

export const Article = () => {
  const { title, text } = useLoaderData() as loaderData;
  const isAuth = useSelector((state: RootState) => state.isAuth);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Box pos='relative'>
        <Box display={isAuth ? 'block' : 'none'}>
          <Button onClick={open}>Редактировать</Button>
          <ActionIcon>
            <BsTrash3 />
          </ActionIcon>
          <Modal opened={opened} onClose={close}>
            <Text>Вы уверены, что хотите удалить эту статью?</Text>
            <Button>Удалить</Button>
          </Modal>
        </Box>
        <ActionIcon pos='absolute' variant='transparent' right='0'>
          <BiSolidBookmark style={{ width: 40, height: 40 }} />
        </ActionIcon>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>
    </>
  );
};
