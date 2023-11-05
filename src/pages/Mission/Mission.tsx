import { Flex, Title, Text, Image, Button } from '@mantine/core';
import clock from '../../assets/icon/clock-eight.svg';
import editor from '../../assets/icon/edit.svg';
import gift from '../../assets/icon/gift.svg';

import classes from './Mission.module.css';
import { MissionAccordion } from '../../modules/MissionAccordion/MissionAccordion';

export const Mission = () => {
  return (
    <Flex className={classes.mission} bg='#F8F8F8'>
      <Flex className={classes.mission__header}>
        <Title className={classes.mission__title}>
          Пройди увлекательный квест
        </Title>
        <Text className={classes.mission__text}>
          Каждый день новые интересные задания для тебя
        </Text>
        <Flex gap='16px'>
          <Flex className={classes.mission__box}>
            <Image src={clock} w='50px' h='50px' />
            <Text className={classes.mission__iconText}>
              3 месяца увлекательного погружения
            </Text>
          </Flex>
          <Flex className={classes.mission__box}>
            <Image src={editor} w='50px' h='50px' />
            <Text className={classes.mission__iconText}>
              Тесты после каждого блока заданий
            </Text>
          </Flex>
          <Flex className={classes.mission__box}>
            <Image src={gift} w='50px' h='50px' />
            <Text className={classes.mission__iconText}>
              Призы за успешное выполнение
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <MissionAccordion />
    </Flex>
  );
};
