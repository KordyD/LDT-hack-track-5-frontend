import { Flex, Button, Text, Image, SimpleGrid } from '@mantine/core';
import classes from './PopupMission.module.css';
import coin from '../../../assets/icon/coin.svg';
import google from '../../../assets/images/google.png';
import chat from '../../../assets/images/chat.png';
import Back from '../../../assets/icon/BackArrow.svg';
import { charactersList } from '../MissionAccordion/MissionAccordion.tsx';
import { Link, useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import AddNewTask from '../../Task/AddNewTask.tsx';

interface itemProps {
  itemId: number;
}

export const PopupMission = ({ itemId }: itemProps) => {
  const [opened, { open, close }] = useDisclosure(false);

  const role = 'ADMIN';
  const taskID = Number(useParams());
  if (taskID !== 0 && itemId !== 0) {
    const selectedTask = charactersList
      .find((item) => item.id === taskID)
      ?.content.task.find((task) => task.id === taskID);

    return (
      <>
        <Flex className={classes.popupMission} direction='column'>
          <Flex>
            <Flex className={classes.popupMission__container}>
              <Flex className={classes.popupMission__box}>
                <Button
                  leftSection={<Image src={Back} w='20px' h='20px' mr='20px' />}
                  className={classes.popupMission__button}
                  component={Link}
                  to='/mission'
                >
                  Назад
                </Button>
                <Text className={classes.popupMission__title} truncate='end'>
                  {selectedTask?.title}
                </Text>
                <Flex className={classes.popupMission__bag}>
                  <Image src={coin} w='40px' h='40px' />
                  <Text className={classes.popupMission__coin}>10 монет</Text>
                </Flex>
              </Flex>
              <Flex className={classes.popupMission__containerText}>
                <Text className={classes.popupMission__text}>
                  На твоей почте ты сможешь найти наш Google Chat, где тебя
                  пригласят в наши основные чаты
                </Text>
              </Flex>
              <SimpleGrid cols={2} mb='40px'>
                <Image src={google} radius='30px' />
                <Image src={chat} radius='30px' />
              </SimpleGrid>
            </Flex>
          </Flex>
          <Button
            classNames={{
              root: classes.popupMission__editRoot,
              inner: classes.popupMission__editInner,
            }}
            variant='filled'
            mt='40px'
            p='0'
            color='#5277F6'
            onClick={open}
            h='90px'
          >
            Редактировать
          </Button>
        </Flex>
        <AddNewTask
          opened={opened}
          name={'Редактировать задание'}
          close={close}
        />
      </>
    );
  }
};
