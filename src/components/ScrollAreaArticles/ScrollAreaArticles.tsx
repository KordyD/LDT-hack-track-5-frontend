import {
  Box,
  Divider,
  Group,
  ScrollArea,
  ScrollAreaProps,
  Stack,
  Text,
} from '@mantine/core';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { CustomActionIcon } from '../ActionIcon/ActionIcon';
import classes from './ScrollAreaArticles.module.css';

interface ScrollAreaArticlesProps extends ScrollAreaProps {
  // TODO add types
  articlesMain: object[];
}

export const ScrollAreaArticles = ({
  articlesMain,
  ...props
}: ScrollAreaArticlesProps) => {
  return (
    <ScrollArea.Autosize {...props}>
      <Stack gap={0}>
        {articlesMain.map((item, index) => (
          <Box
            td='none'
            component={Link}
            to={`/knowledge/${item.id}`}
            key={item.id}
          >
            <Group className={classes.group}>
              <Text>{item.title}</Text>
              <IconContext.Provider value={{ className: classes.icon }}>
                <CustomActionIcon>
                  <AiOutlinePlus />
                </CustomActionIcon>
              </IconContext.Provider>
            </Group>
            <Divider
              display={index == articlesMain.length - 1 ? 'none' : 'block'}
            />
          </Box>
        ))}
      </Stack>
    </ScrollArea.Autosize>
  );
};
