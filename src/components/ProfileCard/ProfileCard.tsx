import { Anchor, Avatar, Box, Card, Group, Image, Text } from '@mantine/core';
import classes from './ProfileCard.module.css';

interface ProfileCardProps {
  name: string;
  grade: string;
  job: string;
  coins: number;
  completedChallenges: number;
  image?: string | null;
}

export const ProfileCard = ({
  name,
  grade,
  job,
  coins,
  completedChallenges,
  image = null,
}: ProfileCardProps) => {
  return (
    <Card className={classes.card}>
      <Group className={classes.group}>
        <Group align='center' gap={15}>
          <Avatar
            src={image}
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
          <Group gap={5}>
            <Text>{coins} монет</Text>{' '}
            <Image
              src='/src/assets/icon/coin.svg'
              style={{ width: 24, height: 24 }}
            />
          </Group>
          <Text>{completedChallenges} пройденных вызовов</Text>
        </Box>
      </Group>
    </Card>
  );
};
