import { Accordion, Button, Flex, Image, Progress, Text } from '@mantine/core';
import { AccordionLabel } from './AccordionLabel.tsx';
import classes from '../MissionAccordion.module.css';
import Lock from '../../../../assets/icon/Lock.png';
import { Accordiontask } from './Accordiontask.tsx';
import { useState } from 'react';
import { AddTask } from '../AddTask/AddTask.tsx';
import { ButtonsEditing } from '../../../ButtonsEditing/ButtonsEditing.tsx';
import {
  EditButton,
  TextForInput,
  TextMiddle,
} from '../../../../theme/AdaptiveConts.ts';

export const AccordionItem = ({ item, role }) => {
  const [isEditing, setIsEditing] = useState(false);

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
            <Text
              className={classes.missionAccordion__progress}
              fz={TextForInput}
              m={{
                md: '30px 0 66px',
                xs: '20px 0 30px',
                base: '20px 0 15px',
              }}
            >
              Прогресс {item.content.value} %
            </Text>
            <Flex direction='column' gap='30px'>
              {item.content.task.map((task) => (
                <Accordiontask
                  task={task}
                  key={task.id}
                  isEditing={isEditing}
                />
              ))}
            </Flex>
            {role === 'ADMIN' ? (
              <>
                {isEditing ? <AddTask /> : ''}
                <ButtonsEditing
                  isEditing={isEditing}
                  setIsEditing={setIsEditing}
                />
              </>
            ) : (
              <Button
                fz={TextMiddle}
                classNames={{
                  root: classes.buttonTest,
                  inner: classes.buttonTestInner,
                }}
                m={{
                  md: '60px 0 90px',
                  xs: '40px 0 50px',
                  base: '40px 0 30px',
                }}
                h={EditButton}
              >
                Пройти тест еще раз
              </Button>
            )}
          </Flex>
        ) : (
          <Image
            src={Lock}
            w={{ lg: '160px', sm: '120px', base: '100px' }}
            h={{ lg: '165px', sm: '125px', base: '105px' }}
            m={{ lg: '60px auto', sm: '30px auto', base: '0 auto 20px' }}
          />
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
};
