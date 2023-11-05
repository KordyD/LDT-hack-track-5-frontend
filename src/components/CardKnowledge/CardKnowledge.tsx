import {
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
  return (
    <Card className={`${classes.card} ${styleDark ? classes.dark : ''}`}>
      <Stack className={classes.wrapper}>
        <Box>
          <Group>
            <IconContext.Provider value={{ className: classes.icon }}>
              <Box>{icon}</Box>
              <Text fz={30}>{heading}</Text>
            </IconContext.Provider>
          </Group>
          <ScrollArea.Autosize mah={450}>
            <Stack>
              {articles.map((item, index) => (
                <Box key={index}>
                  <Text>{item.heading}</Text>
                  <Text className={classes.text}>{item.text}</Text>
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
