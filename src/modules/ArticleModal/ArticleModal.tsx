import { ArticleDeleteModal } from '../../components/ArticleDeleteModal/ArticleDeleteModal';
import { ArticleEditModal } from '../../components/ArticleEditModal/ArticleEditModal';

export const ArticleModal = () => {
  return (
    <>
      <ArticleEditModal />
      <ArticleDeleteModal />
    </>
  );
};
