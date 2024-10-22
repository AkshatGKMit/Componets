import Dropdown from '@components/dropdown';
import ScreenView from '@components/screenView';

const Basic = () => {
  return (
    <ScreenView firingEvent={['touch']}>
      <Dropdown />
    </ScreenView>
  );
};

export default Basic;
