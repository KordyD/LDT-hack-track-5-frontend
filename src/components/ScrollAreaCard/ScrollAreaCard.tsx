import { Box, ScrollArea, ScrollAreaProps, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import { ArticlesName } from '../../API/knowledge-base/interfaces';
import classes from './ScrollAreaCard.module.css';

interface ScrollAreaCardProps extends ScrollAreaProps {
  articles: ArticlesName[];
}

export const ScrollAreaCard = ({ articles, ...props }: ScrollAreaCardProps) => {
  return (
    <ScrollArea.Autosize {...props}>
      <Stack>
        {articles.map((item) => (
          <Box
            component={Link}
            key={item.id}
            to={`/knowledge/${item.id}`}
            className={classes.link}
          >
            <Text>{item.name}</Text>
            {/* <Text className={classes.text}>{item.text}</Text> */}
          </Box>
        ))}
      </Stack>
    </ScrollArea.Autosize>
  );
};
