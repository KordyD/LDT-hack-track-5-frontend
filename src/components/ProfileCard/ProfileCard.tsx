import { Anchor, Avatar, Box, Card, Group, Image, Text } from '@mantine/core';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { employeeIntern } from '../../API/team/interfaces.ts';
import { getInternById } from '../../API/team';
import classes from './ProfileCard.module.css';

interface ProfileCardProps {
  intern: employeeIntern;
}

export const ProfileCard = ({ intern }: ProfileCardProps) => {
  const location = useLocation();

  return (
    <>
      <Card className={classes.card}>
        <Group className={classes.group}>
          <Group align='center' gap={15}>
            <Avatar
              src={intern.imagePath}
              classNames={{
                placeholder: classes.avatar,
                root: classes.rootAvatar,
              }}
            />
            <Box>
              {location.pathname === '/account' ? (
                <Anchor className={classes.link}>Редактировать</Anchor>
              ) : (
                ''
              )}
              <Text className={classes.name}>{intern.name}</Text>
              <Group gap={5}>
                <Text className={classes.grade}>{intern.roles[0].name}</Text>
                <Anchor className={classes.link}>
                  {[intern.post.department.name]}
                </Anchor>
              </Group>
            </Box>
          </Group>
          <Box>
            <Group gap={5}>
              <Text>{intern.account} монет</Text>{' '}
              <Image
                src='/src/assets/icon/coin.svg'
                style={{ width: 24, height: 24 }}
              />
            </Group>
            <Text>{intern.countCompletedTask} пройденных вызовов</Text>
          </Box>
        </Group>
      </Card>
    </>
  );
};
