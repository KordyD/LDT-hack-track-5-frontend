import { Box, Group, RingProgress, Stack, Text } from '@mantine/core';
import { diagram } from '../../helpers/Diagram';
import classes from './Diagram.module.css';

export const Diagram = () => {
  const max = diagram.reduce((sum, item) => {
    return sum + item.value;
  }, 0);
  const sections = diagram.map((item) => {
    return {
      value: (item.value * 100) / max,
      color: item.color,
    };
  });

  return (
    <Group className={classes.wrapper}>
      <RingProgress size={350} thickness={30} sections={sections} />
      <Stack>
        {diagram.map((item) => (
          <Group key={item.id}>
            <Box bg={item.color} className={classes.colorValue}>
              <Text>{item.value}</Text>
            </Box>
            <Text>{item.title}</Text>
          </Group>
        ))}
      </Stack>
    </Group>
  );
};
