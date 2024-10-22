import { View, Text, FlatList, Image } from 'react-native';
import globalStyles from '@styles/global';

const DynamicTabScreen = ({ data }: { data: Songs | Albums | Playlists | Artists }) => {
  return (
    <View style={globalStyles().screen}>
      <FlatList
        data={data}
        renderItem={({ item }: { item: Song | Album | Artist | Playlist }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: item.image[0].url }}
                height={40}
                width={40}
              />
              <Text>{item.title}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default DynamicTabScreen;
