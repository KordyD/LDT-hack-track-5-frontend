import { Box, Button, Card, Group, Title } from '@mantine/core';
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllQuestions } from '../../API/knowledge-base';
import { ArticlesName } from '../../API/knowledge-base/interfaces';
import { RootState } from '../../store';
import { EditButton } from '../EditButton/EditButton';
import { ScrollAreaCard } from '../ScrollAreaCard/ScrollAreaCard';
import classes from './CompanyInfoCard.module.css';

export const CompanyInfoCard = () => {
  useEffect(() => {
    getAllQuestions()
      .then((values) => {
        setArticles(values);
      })
      .catch((error) => {
        const err = error as AxiosError;
        console.log(err.response?.data);
      });
  }, []);
  const [articles, setArticles] = useState<ArticlesName[]>([]);

  const roles = useSelector((state: RootState) => state.roles);
  const isAdmin = roles.includes('ROLE_ADMIN');

  return (
    <Card className={classes.card}>
      <Box className={classes.wrapper}>
        <Group justify='space-between' mb='lg'>
          <Group>
            <IconContext.Provider value={{ className: classes.icon }}>
              <AiOutlineInfoCircle />
            </IconContext.Provider>
            <Title order={2}>О компании</Title>
          </Group>
          <EditButton display={isAdmin ? 'flex' : 'none'} />
        </Group>
        <ScrollAreaCard
          articles={articles}
          mah={isAdmin ? { base: 500, md: 1200 } : 500}
        />
      </Box>

      <Box>
        <Button
          fullWidth
          mt='lg'
          radius='xl'
          variant='filled'
          component={Link}
          to={'/articles'}
        >
          Все статьи
        </Button>
      </Box>
    </Card>
  );
};
