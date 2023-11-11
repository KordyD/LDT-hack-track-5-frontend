import { Flex, Button, Text, Image, SimpleGrid } from '@mantine/core';
import { useParams } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import coin from '../../../assets/icon/coin.svg';
import chat from '../../../assets/images/chat.png';
import { AddNewTask } from '../../Task/AddNewTask.tsx';
import {
  EditButton,
  Heading,
  HeadingH2,
  Image40,
  TextMiddle,
} from '../../../theme/AdaptiveConts.ts';
import { BackButton } from '../../BackButton/BackButton.tsx';
import google from '../../../assets/images/google.png';
import classes from './PopupMission.module.css';

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
                <BackButton>Назад</BackButton>
                <Text
                  className={classes.popupMission__title}
                  fz={Heading}
                  truncate='end'
                >
                  {selectedTask?.name}
                </Text>
                <Flex className={classes.popupMission__bag} fz={HeadingH2}>
                  <Image src={coin} w={Image40} h={Image40} />
                  <Text className={classes.popupMission__coin} fz={TextMiddle}>
                    10 монет
                  </Text>
                </Flex>
              </Flex>
              <Flex className={classes.popupMission__containerText}>
                <Text className={classes.popupMission__text} fz={TextMiddle}>
                  На твоей почте ты сможешь найти наш Google Chat, где тебя
                  пригласят в наши основные чаты
                </Text>
              </Flex>
              <SimpleGrid cols={{ lg: 2, sm: 2, base: 1 }} mb='40px'>
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
            h={EditButton}
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
