import {
  Box,
  Card,
  Divider,
  Group,
  ScrollArea,
  Stack,
  Text,
} from '@mantine/core';
import { AiOutlinePlus } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { CustomActionIcon } from '../../components/ActionIcon/ActionIcon';
import { articlesMain } from '../../helpers/Articles';
import classes from './Articles.module.css';

export const Articles = () => {
  return (
    <Card className={classes.card}>
      <ScrollArea.Autosize mah={900}>
        <Stack>
          {articlesMain.map((item, index) => (
            <Box key={item.id}>
              <Group className={classes.group}>
                <Text>{item.title}</Text>
                <Box component={Link} to={`/knowledge/${item.id}`}>
                  <IconContext.Provider value={{ className: classes.icon }}>
                    <CustomActionIcon>
                      <AiOutlinePlus />
                    </CustomActionIcon>
                  </IconContext.Provider>
                </Box>
              </Group>
              <Divider
                display={index == articlesMain.length - 1 ? 'none' : 'block'}
              />
            </Box>
          ))}
        </Stack>
      </ScrollArea.Autosize>
    </Card>
  );
};
