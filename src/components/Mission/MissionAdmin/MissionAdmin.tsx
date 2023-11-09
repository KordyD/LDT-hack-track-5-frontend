// import { MaHeader } from './MAHeader/MAHeader.tsx';
import { MaBody } from './MABody/MABody.tsx';
import { EmployeeCard } from '../../EmployeeCard/EmployeeCard.tsx';

export const MissionAdmin = () => {
  return (
    <>
      {/*<MaHeader />*/}
      <EmployeeCard
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
