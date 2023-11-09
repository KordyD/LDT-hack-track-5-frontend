import { Anchor, Box, Button, Card, SimpleGrid } from '@mantine/core';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Achievement } from '../../components/Achievement/Achievement';
import { achievements } from '../../helpers/Achievements';
import classes from './CardAchievement.module.css';

export const CardAchievement = () => {
  return (
    <Card className={classes.card}>
      <SimpleGrid cols={5} className={classes.group}>
        {achievements.map((item) => (
          <Achievement
            key={item.id}
            title={item.title}
            text={item.text}
            image={item.image}
            completed={item.completed}
          />
        ))}
      </SimpleGrid>
      <Box className={classes.wrapperButton}>
        <Button
          component={Anchor}
          className={classes.button}
          variant='transparent'
          leftSection={<AiOutlineArrowRight />}
        >
          Смотреть всё
        </Button>
      </Box>
    </Card>
  );
};
