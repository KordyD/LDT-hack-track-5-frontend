import {
  ActionIcon,
  Anchor,
  Button,
  Card,
  Group,
  Image,
  Text,
} from '@mantine/core';
import { IconContext } from 'react-icons';
import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { PiNotePencil } from 'react-icons/pi';
import { BsTrash3 } from 'react-icons/bs';
import { RootState } from '../../store';
import classes from './EmployeeCard.module.css';

interface EmployeeCardProps {
  image?: string;
  name: string;
  city: string;
  job: string;
  contacts: {
    icon: ReactElement;
    link: string;
  }[];
}

export const EmployeeCard = ({
  image = '',
  name,
  city,
  contacts,
  job,
}: EmployeeCardProps) => {
  const isAuth = useSelector((state: RootState) => state.isAuth);

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
      <Group display={isAuth ? 'flex' : 'none'} my={15}>
        <ActionIcon variant='unstyled' c='black'>
          <PiNotePencil />
        </ActionIcon>
        <ActionIcon variant='unstyled' c='red'>
          <BsTrash3 />
        </ActionIcon>
      </Group>
      <Button variant='white'>Перейти к заданиям</Button>
    </Card>
  );
};
