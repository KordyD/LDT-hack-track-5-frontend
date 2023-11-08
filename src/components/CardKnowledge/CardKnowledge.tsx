import {
  ActionIcon,
  Box,
  Button,
  Card,
  Group,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { ReactElement } from 'react';
import { IconContext } from 'react-icons';
import { useSelector } from 'react-redux';
import { PiPencilSimple } from 'react-icons/pi';
import { RootState } from '../../store';
import classes from './CardKnowledge.module.css';
interface CardKnowledge {
  heading: string;
  icon: ReactElement;
  articles: { heading: string; text: string }[];
  styleDark?: boolean;
}

export const CardKnowledge = ({
  heading,
  icon,
  articles,
  styleDark = false,
}: CardKnowledge) => {
  const isAuth = useSelector((state: RootState) => state.isAuth);

  return (
    <Card className={`${classes.card} ${styleDark ? classes.dark : ''}`}>
      <Stack className={classes.wrapper}>
        <Box>
          <Group justify='space-between'>
            <IconContext.Provider value={{ className: classes.icon }}>
              <Group>
                <Box>{icon}</Box>
                <Text fz={30}>{heading}</Text>
              </Group>
            </IconContext.Provider>
            <ActionIcon radius='xl' display={isAuth ? 'flex' : 'none'}>
              <PiPencilSimple />
            </ActionIcon>
          </Group>
          <ScrollArea.Autosize mah={isAuth ? 1150 : 450}>
            <Stack>
              {articles.map((item, index) => (
                <Box key={index}>
                  <Text>{item.heading}</Text>
                  {/* <Text className={classes.text}>{item.text}</Text> */}
                </Box>
              ))}
            </Stack>
          </ScrollArea.Autosize>
        </Box>
      </Stack>

      <Box>
        <Button
          fullWidth
          mt='lg'
          radius='xl'
          variant={styleDark ? 'filled' : 'light'}
        >
          Все статьи
        </Button>
      </Box>
    </Card>
  );
};
