import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Defs, ClipPath, Path, Image as SvgImage } from 'react-native-svg';

const FeaturedEventsCard = ({ camp }) => {
  const handleViewDetails = () => {
    console.log(`Navigate to Event ID: ${camp?.id}`);
    // navigation.navigate('EventDetails', { id: camp?.id });
  };

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ClippedImage photoUrl={camp?.photoUrl} width="100%" clipId={`clip-path`} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{camp?.title}</Text>
        <Text style={styles.location}>{camp?.location}</Text>
        <Text style={styles.dateText}>📆 {camp?.dateRange}</Text>
        <View style={styles.divider} />

        <View style={styles.row}>
          <View style={styles.infoBox}>
            <Text style={styles.label}>Ages</Text>
            <Text style={styles.value}>{camp?.ages}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Sport</Text>
            <Text style={styles.value}>{camp?.sport}</Text>
          </View>

          <View style={styles.infoBox}>
            <Text style={styles.label}>Reviews</Text>
            <Text style={styles.value}>🌟 {camp?.rating} ({camp?.reviewCount})</Text>
          </View>
        </View>

        <TouchableOpacity onPress={handleViewDetails} style={styles.button}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedEventsCard;

const ClippedImage = ({ photoUrl, width, clipId }) => {
  return (
    <Svg width={width} height={200} viewBox={`0 0 ${width} 200`}>
      <Defs>
        <ClipPath id={clipId}>
          <Path d="M191.318 19.4224C192.324 20.6744 193.649 21.3708 195.025 21.3708H317.306C319.016 21.3708 320.627 22.4442 321.653 24.2681L324.913 30.0631C325.619 31.3172 326 32.8426 326 34.4103V210.089C326 214.09 323.567 217.333 320.567 217.333H28.4368C26.7765 217.333 25.2074 216.321 24.1768 214.586L1.17335 175.843C0.413455 174.563 0 172.979 0 171.346V7.24445C0 3.24345 2.43259 0 5.43333 0H173.569C174.945 0 176.27 0.696332 177.276 1.94837L191.318 19.4224Z" />
        </ClipPath>
      </Defs>

      <SvgImage
        href={photoUrl}
        width={width}
        height={200}
        preserveAspectRatio="xMidYMid cover"
        clipPath={`url(#${clipId})`}
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 1,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#eee',
    padding: 0,
  },
  clippedImageContainer: {
    height: 180,
    width: '100%',
  },
  imageContainer: {
    height: 200,
    position: 'relative',
    padding: 0,
    paddingTop: 12,
  },
  dateText: {
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  content: {
    padding: 16,
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },
  location: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoBox: {
    alignItems: 'center',
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  value: {
    fontSize: 12,
    color: '#666',
  },
  button: {
    backgroundColor: '#E6ECF5',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 15,
    width: "100%",
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000',
    fontWeight: '600',
  },
});
