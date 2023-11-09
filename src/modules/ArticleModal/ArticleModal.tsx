import { ArticleEditModal } from '../../components/ArticleEditModal/ArticleEditModal';
import { ArticleDeleteModal } from '../../components/ArticleDeleteModal/ArticleDeleteModal';
interface ArticleModalProps {
  isAuth: boolean;
}

export const ArticleModal = ({ isAuth }: ArticleModalProps) => {
  return (
    <>
      <ArticleEditModal isAuth={isAuth} />
      <ArticleDeleteModal isAuth={isAuth} />
    </>
  );
};
