import { Mission } from '../../components/Mission/Mission.tsx';
import { MissionAdmin } from '../../components/Mission/MissionAdmin/MissionAdmin.tsx';

export const MissionPage = () => {
  const role = 'ADMIN';

  if (role === 'ADMIN') {
    return (
      <>
        <MissionAdmin />
      </>
    );
  }

  if (role === 'USER') {
    return (
      <>
        <Mission />
      </>
    );
  }
};
