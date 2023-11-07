import {
  Accordion,
  Box,
  Button,
  Flex,
  Image,
  Progress,
  Text,
} from '@mantine/core';
import { AccordionLabel } from './AccordionLabel.tsx';
import classes from './MissionAccordion.module.css';
import Lock from '../../../assets/icon/mbrilock_99595 1.svg';
import { Accordiontask } from './Accordiontask.tsx';

export const AccordionItem = ({ item, role }) => {
  return (
    <Accordion.Item value={item.week}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        {item.status === 'open' ? (
          <Flex direction='column'>
            <Progress
              color='#EEFF87'
              radius='xs'
              size='sm'
              mb='16px'
              value={item.content.value}
            />
            <Text className={classes.missionAccordion__progress}>
              Прогресс {item.content.value} %
            </Text>
            <Flex direction='column' gap='30px'>
              {item.content.task.map((task) => (
                <Accordiontask task={task} key={task.id} />
              ))}
            </Flex>
            <Button
              classNames={{
                root: classes.buttonTest,
                inner: classes.buttonTestInner,
              }}
              h='90px'
            >
              Пройти тест еще раз
            </Button>
          </Flex>
        ) : (
          <Image src={Lock} w='160px' h='160px' m='50px auto' />
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
};
