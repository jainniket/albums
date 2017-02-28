import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from '../Card';
import CardSection from '../CardSection';
import Button from '../Button';
import { styles } from './styles';

const AlbumDetail = (props) => {
  const { title, artist, thumbnail_image, image, url } = props.album;
  return (
    <Card>
      <CardSection>
        <View style={styles.thumbnailContainerStyle}>
          <Image
            style={styles.thumbnailStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: image }}
        />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};

AlbumDetail.propTypes = {
  album: React.PropTypes.object,
};

export default AlbumDetail;
