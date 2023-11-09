import { Flex, Title, Text, Image, Button, Container } from '@mantine/core';
import clock from '../../assets/icon/clock-eight.svg';
import editor from '../../assets/icon/edit.svg';
import gift from '../../assets/icon/gift.svg';

import classes from './Mission.module.css';
import { MissionAccordion } from './MissionAccordion/MissionAccordion.tsx';
import { MissionMap } from './MissionMap/MissionMap.tsx';
import {
  Heading,
  HeadingH2,
  Image50,
  TextSmall,
} from '../../theme/AdaptiveConts.ts';

export const Mission = () => {
  return (
    <Container size='xl'>
      <Flex className={classes.mission} bg='#F8F8F8'>
        <Flex className={classes.mission__header}>
          <Title className={classes.mission__title} fz={Heading} p='0 10px'>
            Пройди увлекательный квест
          </Title>
          <Text className={classes.mission__text} fz={HeadingH2} p='0 10px'>
            Каждый день новые интересные задания для тебя
          </Text>
          <Flex gap='16px' direction={{ md: 'row', base: 'column' }}>
            <Flex className={classes.mission__box}>
              <Image src={clock} w={Image50} h={Image50} />
              <Text className={classes.mission__iconText} fz={TextSmall}>
                3 месяца увлекательного погружения
              </Text>
            </Flex>
            <Flex className={classes.mission__box}>
              <Image src={editor} w={Image50} h={Image50} />
              <Text className={classes.mission__iconText} fz={TextSmall}>
                Тесты после каждого блока заданий
              </Text>
            </Flex>
            <Flex className={classes.mission__box}>
              <Image src={gift} w={Image50} h={Image50} />
              <Text className={classes.mission__iconText} fz={TextSmall}>
                Призы за успешное выполнение
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <MissionMap />
        <MissionAccordion />
      </Flex>
    </Container>
  );
};
