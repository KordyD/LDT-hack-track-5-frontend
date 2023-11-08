import { Box, ScrollArea, ScrollAreaProps, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';
import classes from './ScrollAreaCard.module.css';

interface ScrollAreaCardProps extends ScrollAreaProps {
  //   TODO Add types
  articles: object[];
}

export const ScrollAreaCard = ({ articles, ...props }: ScrollAreaCardProps) => {
  return (
    <ScrollArea.Autosize {...props}>
      <Stack>
        {articles.map((item, index) => (
          // TODO Add route
          <Box component={Link} key={index} to='/' className={classes.link}>
            <Text>{item.heading}</Text>
            {/* <Text className={classes.text}>{item.text}</Text> */}
          </Box>
        ))}
      </Stack>
    </ScrollArea.Autosize>
  );
};
