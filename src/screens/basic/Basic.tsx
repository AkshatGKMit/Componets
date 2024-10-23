import Dropdown from '@components/dropdown';
import ScreenView from '@components/screenView';

const Basic = () => {
  const data: DropdownItems = [
    { id: 'a5625765-dd16-45dc-a805-2244bd48105b', label: 'Pasquale Paucek', value: 'Ryleigh Kunze' },
    { id: '12db6cf9-b365-493d-9ae9-0b39be4a50ec', label: 'Bella Paucek', value: 'Madelynn Langosh' },
    { id: 'dfaf040a-1850-4b50-b50e-29db9c70659d', label: 'Jason Senger', value: 'Marilou O Kon' },
    { id: 'fc02debb-c5bf-40c6-ba8f-17621e48339b', label: 'Willie Koelpin', value: 'Davonte Mante' },
    { id: '3a3d199a-9804-4452-9bf9-8625510698da', label: 'Pierce Nolan', value: 'Ward Batz' },
    { id: '8bf74f1c-74a7-4fd1-8337-9b43fadfaae9', label: 'Freeda Murphy', value: 'Eliseo Kessler' },
    { id: '48698bd6-e272-4202-8f50-b31bfe09b596', label: 'Maryjane Feest', value: 'Maeve Wunsch' },
  ];

  return (
    <ScreenView firingEvent={['touch']}>
      <Dropdown
        data={data}
        placeholder="--Select--"
      />
    </ScreenView>
  );
};

export default Basic;
