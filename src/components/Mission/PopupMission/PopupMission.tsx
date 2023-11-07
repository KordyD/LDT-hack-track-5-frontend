import React from 'react';
import { Flex, Button, Text, Image, Modal } from '@mantine/core';
import classes from './PopupMission.module.css';
import clock from '../../../assets/icon/ClockBlue.svg';
import coin from '../../../assets/icon/coin.svg';
import google from '../../../assets/images/google.png';
import chat from '../../../assets/images/chat.png';
import Back from '../../../assets/icon/BackArrow.svg';
import { charactersList } from '../MissionAccordion/MissionAccordion.tsx';
import { Link, useParams } from 'react-router-dom';

interface itemProps {
  itemId: number;
}

export const PopupMission = ({ itemId }: itemProps) => {
  const taskID = Number(useParams());
  if (taskID !== 0 && itemId !== 0) {
    const selectedTask = charactersList
      .find((item) => item.id === taskID)
      ?.content.task.find((task) => task.id === taskID);

    return (
      <Flex className={classes.popupMission}>
        <Flex className={classes.popupMission__popup}>
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
                коммуникаций. Наш основной канал коммуникации там - General.
                Туда постят все самое важное Для мемов и различных рабочих и
                нерабочих вопросов есть канал Random
              </Text>
              <Text className={classes.popupMission__text}>
                Укажи в Google Chat реальные ФИ и загрузи свое фото. А еще
                укажи, пожалуйста, свой номер телефона и впиши роль в команде.
                Ты также можешь скачать декстопное приложение — так ты не
                пропустишь важные сообщения.
              </Text>
            </Flex>
            <Flex className={classes.popupMission__containerPhoto}>
              <Image src={google} h='345px' w='635' radius='30px' />
              <Image src={chat} h='345px' w='635' radius='30px' />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    );
  }
};
