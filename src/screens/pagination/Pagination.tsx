import { View, Text, FlatList, NativeSyntheticEvent, NativeScrollEvent, Image, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import globalStyles from '@styles/global';
import ApiCall from '@network/api';
import uuid from 'react-native-uuid';
import { LIGHT } from '@constants/colors';

const Pagination = () => {
  const [songs, setSongs] = useState<Song[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMoreData, setHasMoreData] = useState(false);

  const apiCall = async (p: number) => {
    setLoading(true);
    const response = await ApiCall<SearchSong, SearchSongParams>({
      url: `https://saavn.dev/api/search/songs?query=Believer`,
      method: 'GET',
      params: {
        page,
      },
    });

    if (response.success) {
      const {
        responseData: {
          data: { results, total },
        },
      } = response;

      setHasMoreData(songs.length + results.length === total);
      setSongs(prev => [...prev, ...results]);
    }

    setLoading(false);
  };

  useEffect(() => {
    apiCall(page);
  }, [page]);

  function pagination(): void {
    setPage(page + 1);
  }

  return (
    <View style={[globalStyles().screen, globalStyles().flexColumn]}>
      <FlatList
        data={songs}
        keyExtractor={({ id }) => id + uuid.v1().toString()}
        onEndReached={pagination}
        ItemSeparatorComponent={() => <View style={{ height: 30 }} />}
        renderItem={({ item }: { item: Song }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: item.image[0].url }}
                height={40}
                width={40}
              />
              <Text>{item.name}</Text>
            </View>
          );
        }}
        ListFooterComponent={
          !hasMoreData ? (
            <ActivityIndicator
              size={40}
              animating={loading}
              color={LIGHT.accent900}
            />
          ) : (
            <Text>End of the list</Text>
          )
        }
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Pagination;
