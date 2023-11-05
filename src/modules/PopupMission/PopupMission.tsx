import React from 'react';
import { Flex, Button, Text, Image, Title } from '@mantine/core';
import classes from './PopupMission.module.css';
import clock from '../../assets/icon/ClockBlue.svg';
import coin from '../../assets/icon/coin.svg';
import google from '../../assets/images/google.png';
import chat from '../../assets/images/chat.png';
import Back from '../../assets/icon/BackArrow.svg';
import { AccordionLabelProps } from '../MissionAccordion/MissionAccordion';

interface itemProps {
  taskId: string;
  itemId: string;
  list: AccordionLabelProps[];
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isOpen: boolean;
}

export const PopupMission = ({
  taskId,
  itemId,
  list,
  setIsOpen,
  isOpen,
}: itemProps) => {
  const selectedTask = list
    .find((item) => item.id === itemId)
    ?.content.task.find((task) => task.id === taskId);
  console.log(selectedTask);
  return (
    <>
      <Flex className={`${isOpen ? classes.popupMission : classes.popupClose}`}>
        <Flex className={classes.popupMission__container}>
          <Flex className={classes.popupMission__box}>
            <Button
              leftSection={<Image src={Back} w='20px' h='20px' mr='20px' />}
              className={classes.popupMission__button}
              onClick={() => setIsOpen(false)}
            >
              Назад
            </Button>
            <Title order={1} className={classes.popupMission__title}>
              {selectedTask.title}
            </Title>
            <Flex className={classes.popupMission__bag}>
              <Image src={coin} w='40px' h='40px' />
              <Text className={classes.popupMission__coin}>10 монет</Text>
            </Flex>
          </Flex>
          <Flex className={classes.popupMission__boxTime}>
            <Image src={clock} w='50px' h='50px' color='#5277F6' />
            <Text className={classes.popupMission__time}>
              Примерное время на выполнение 45 мин
            </Text>
          </Flex>
          <Flex className={classes.popupMission__containerText}>
            <Text className={classes.popupMission__text}>
              На твоей почте ты сможешь найти наш Google Chat, где тебя
              пригласят в наши основные чаты
            </Text>
            <Text className={classes.popupMission__text}>
              Google Chat — наше основное пространство для синхронных
              коммуникаций. Наш основной канал коммуникации там - General. Туда
              постят все самое важное Для мемов и различных рабочих и нерабочих
              вопросов есть канал Random
            </Text>
            <Text className={classes.popupMission__text}>
              Укажи в Google Chat реальные ФИ и загрузи свое фото. А еще укажи,
              пожалуйста, свой номер телефона и впиши роль в команде. Ты также
              можешь скачать декстопное приложение — так ты не пропустишь важные
              сообщения.
            </Text>
          </Flex>
          <Flex className={classes.popupMission__containerPhoto}>
            <Image src={google} h='345px' w='635' radius='30px' />
            <Image src={chat} h='345px' w='635' radius='30px' />
          </Flex>
          <Button className={classes.popupMission__buttonFinish}>
            Закончить
          </Button>
        </Flex>
      </Flex>
    </>
  );
};
