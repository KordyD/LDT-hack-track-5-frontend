import { ProfileCard } from '../../ProfileCard/ProfileCard.tsx';
import { MaBody } from './MABody/MABody.tsx';

export const MissionAdmin = () => {
  return (
    <>
      <ProfileCard
        name={'Человек name'}
        grade={'grade'}
        job={'job'}
        coins={10}
        completedChallenges={1}
      />
      <MaBody />
    </>
  );
};
