import { Button, Card, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconContext } from 'react-icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { AddArticleModal } from '../../components/AddArticleModal/AddArticleModal';
import { ScrollAreaArticles } from '../../components/ScrollAreaArticles/ScrollAreaArticles';
import { articlesMain } from '../../helpers/Articles';
import { RootState } from '../../store';
import classes from './Articles.module.css';

export const Articles = () => {
  const roles = useSelector((state: RootState) => state.roles);
  const isAdmin = roles.includes('ROLE_ADMIN');

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card className={classes.card}>
      <Group
        mb={20}
        justify='space-between'
        display={isAdmin ? 'flex' : 'none'}
      >
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
      </Group>
      <ScrollAreaArticles
        articlesMain={articlesMain}
        mah={{ base: 500, md: 900 }}
      />
    </Card>
  );
};
