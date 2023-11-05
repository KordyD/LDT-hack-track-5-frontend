import { Flex, Title, Text, Box, Image } from '@mantine/core';
import clock from '../../assets/icon/clock-eight.svg';
import editor from '../../assets/icon/edit.svg';
import gift from '../../assets/icon/gift.svg';

import classes from './Mission.module.css';

export const Mission = () => {
  return (
    <Flex className={classes.mission}>
      <Flex className={classes.mission__header}>
        <Title className={classes.mission__title}>
          Пройди увлекательный квест
        </Title>
        <Text className={classes.mission__text}>
          Каждый день новые интересные задания для тебя
        </Text>
        <Flex gap='16px'>
          <Flex className={classes.mission__box}>
            <Image src={clock} className={classes.mission__icon} />
            <Text className={classes.mission__iconText}>
              3 месяца увлекательного погружения
            </Text>
          </Flex>
          <Flex className={classes.mission__box}>
            <Image src={editor} className={classes.mission__icon} />
            <Text className={classes.mission__iconText}>
              Тесты после каждого блока заданий
            </Text>
          </Flex>
          <Flex className={classes.mission__box}>
            <Image src={gift} className={classes.mission__icon} />
            <Text className={classes.mission__iconText}>
              Призы за успешное выполнение
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
