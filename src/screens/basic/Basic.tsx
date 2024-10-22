import Dropdown from '@src/components/dropdown';
import ScreenView from '@src/components/screenView';

const Basic = () => {
  return (
    <ScreenView firingEvent={['touch']}>
      <Dropdown />
    </ScreenView>
  );
};

export default Basic;
