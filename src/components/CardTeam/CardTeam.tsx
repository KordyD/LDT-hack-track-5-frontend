import { ActionIcon, Anchor, Card, Group, Image, Text } from '@mantine/core';
import { IconContext } from 'react-icons';
import { ReactElement } from 'react';
import classes from './CardTeam.module.css';

interface CardTeam {
  image?: string;
  name: string;
  city: string;
  job: string;
  contacts: {
    icon: ReactElement;
    link: string;
  }[];
}

export const CardTeam = ({
  image = '',
  name,
  city,
  contacts,
  job,
}: CardTeam) => {
  return (
    <Card className={classes.card}>
      <Card.Section>
        <Image src={image} fallbackSrc='/src/assets/images/placeholder.jpg' />
      </Card.Section>
      <Text className={classes.name}>{name}</Text>
      <Text>{city}</Text>
      <Anchor>{job}</Anchor>
      <IconContext.Provider value={{ className: classes.icon }}>
        <Group className={classes.contacts}>
          {contacts.map((item, index) => (
            <Group key={index} gap={10}>
              <ActionIcon
                className={classes.iconButton}
                variant='light'
                component='a'
                href={item.link}
              >
                {item.icon}
              </ActionIcon>
              <Anchor className={classes.contact} href={item.link}>
                {item.link}
              </Anchor>
            </Group>
          ))}
        </Group>
      </IconContext.Provider>
    </Card>
  );
};
