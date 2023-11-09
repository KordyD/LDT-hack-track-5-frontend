import { Button, Card, Group } from '@mantine/core';
import { AiOutlinePlus } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useDisclosure } from '@mantine/hooks';
import { articlesMain } from '../../helpers/Articles';
import { ScrollAreaArticles } from '../../components/ScrollAreaArticles/ScrollAreaArticles';
import { EditButton } from '../../components/EditButton/EditButton';
import { AddArticleModal } from '../../components/AddArticleModal/AddArticleModal';
import classes from './Articles.module.css';

interface Articles {
  isAuth: boolean;
}

export const Articles = ({ isAuth }: Articles) => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card className={classes.card}>
      <Group mb={20} justify='space-between' display={isAuth ? 'flex' : 'none'}>
        <IconContext.Provider value={{ className: classes.icon }}>
          <Button
            variant='white'
            rightSection={<AiOutlinePlus />}
            onClick={open}
          >
            Добавить статью
          </Button>
        </IconContext.Provider>
        <AddArticleModal opened={opened} close={close} />
        <EditButton display={isAuth ? 'flex' : 'none'} />
      </Group>
      <ScrollAreaArticles articlesMain={articlesMain} mah={900} />
    </Card>
  );
};
