import { Box, Button, Card, Group, Stack, Text } from '@mantine/core';
import { ReactElement } from 'react';

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
    <Card
      shadow='md'
      p='lg'
      radius='xl'
      withBorder
      bg={styleDark ? 'gray.3' : ''}
    >
      <Box>
        <Group>
          <Box c='indigo'>{icon}</Box>
          <Text>{heading}</Text>
        </Group>
        <Stack>
          {articles.map((item, index) => (
            <Box key={index}>
              <Text>{item.heading}</Text>
              <Text>{item.text}</Text>
            </Box>
          ))}
        </Stack>
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
