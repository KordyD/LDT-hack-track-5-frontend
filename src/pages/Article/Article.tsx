import {
  ActionIcon,
  Box,
  Button,
  Modal,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { BiSolidBookmark } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useLoaderData } from 'react-router-dom';
import { BsTrash3 } from 'react-icons/bs';
import { RootState } from '../../store';
import { useDisclosure } from '@mantine/hooks';
import classes from './Article.module.css';
import { BackButton } from '../../components/BackButton/BackButton';
import { AiOutlineArrowLeft } from 'react-icons/ai';

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
        <BackButton leftSection={<AiOutlineArrowLeft />} variant='transparent'>
          Назад
        </BackButton>
        <Box className={classes.box}>
          <Button display={isAuth ? 'block' : 'none'} variant='white'>
            Редактировать
          </Button>
          <Box display={isAuth ? 'block' : 'none'}>
            <ActionIcon variant='transparent' color='red' onClick={open}>
              <BsTrash3 />
            </ActionIcon>
            <Modal radius='xl' opened={opened} onClose={close}>
              <Stack align='center'>
                <Text className={classes.modalText}>
                  Вы уверены, что хотите удалить эту статью?
                </Text>
                <Button className={classes.modalButton}>Удалить</Button>
              </Stack>
            </Modal>
          </Box>
          <ActionIcon display={isAuth ? 'none' : 'block'} variant='transparent'>
            <BiSolidBookmark style={{ width: 40, height: 40 }} />
          </ActionIcon>
        </Box>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Box>
    </>
  );
};
