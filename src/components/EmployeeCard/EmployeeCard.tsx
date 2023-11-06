import { Anchor, Avatar, Box, Card, Group, Text } from '@mantine/core';
import classes from './EmployeeCard.module.css';

interface EmployeeCard {
  name: string;
  grade: string;
  job: string;
  coins: number;
  completedChallenges: number;
}

export const EmployeeCard = ({
  name,
  grade,
  job,
  coins,
  completedChallenges,
}: EmployeeCard) => {
  return (
    <Card className={classes.card}>
      <Group className={classes.group}>
        <Group align='center' gap={15}>
          <Avatar
            src=''
            classNames={{
              placeholder: classes.avatar,
              root: classes.rootAvatar,
            }}
          />
          <Box>
            <Anchor className={classes.link}>Редактировать</Anchor>
            <Text className={classes.name}>{name}</Text>
            <Group gap={5}>
              <Text className={classes.grade}>{grade}</Text>
              <Anchor className={classes.link}>{job}</Anchor>
            </Group>
          </Box>
        </Group>
        <Box>
          <Text>{coins} монет</Text>
          <Text>{completedChallenges} пройденных вызовов</Text>
        </Box>
      </Group>
    </Card>
  );
};
