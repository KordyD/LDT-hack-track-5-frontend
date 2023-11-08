import { Accordion, Button, Flex, Image, Progress, Text } from '@mantine/core';
import { AccordionLabel } from './AccordionLabel.tsx';
import classes from '../MissionAccordion.module.css';
import Lock from '../../../../assets/icon/mbrilock_99595 1.svg';
import { Accordiontask } from './Accordiontask.tsx';
import { useState } from 'react';
import { AddTask } from '../AddTask/AddTask.tsx';

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
            <Text className={classes.missionAccordion__progress}>
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
                {isEditing ? (
                  <>
                    <AddTask />
                    <Button
                      onClick={() => setIsEditing(false)}
                      h='90px'
                      bg='#5277F6'
                      color='#FFF'
                      classNames={{
                        root: classes.buttonTest,
                        inner: classes.buttonEditorInner,
                      }}
                    >
                      Сохранить
                    </Button>
                  </>
                ) : (
                  <Button
                    onClick={() => setIsEditing(true)}
                    h='90px'
                    classNames={{
                      root: classes.buttonTest,
                      inner: classes.buttonTestInner,
                    }}
                  >
                    Редактировать этап
                  </Button>
                )}
              </>
            ) : (
              <Button
                classNames={{
                  root: classes.buttonTest,
                  inner: classes.buttonTestInner,
                }}
                h='90px'
              >
                Пройти тест еще раз
              </Button>
            )}
          </Flex>
        ) : (
          <Image src={Lock} w='160px' h='160px' m='50px auto' />
        )}
      </Accordion.Panel>
    </Accordion.Item>
  );
};
