import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const PostCard = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={styles.userInfo}>
        <Image style={styles.image} source={item.userImg} />
        <View style={styles.userInfoText}>
          <Text style={styles.username}>{item.userName}</Text>
          <Text style={styles.postTime}>{item.postTime}</Text>
        </View>
      </View>
      <Text style={styles.postText}>{item.post}</Text>
      {item.postImg !== 'none' ? (
        <Image
          style={styles.imagepost}
          source={require('../assets/posts/post-img-2.jpg')}
        />
      ) : (
        <Text style={styles.divider}></Text>
      )}
      <View style={styles.like}>
        <TouchableOpacity style={styles.button}>
          <Text>Dil</Text>
          <Text style={styles.likeText}>14 Like</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text>Dil</Text>
          <Text style={styles.likeText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    width: '100%',
    marginBottom: 30,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: 'bold',
  },
  userInfoText: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
  },
  postTime: {
    fontSize: 12,
    fontStyle: 'italic',
    color: '#666',
  },
  postText: {
    fontSize: 14,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imagepost: {
    width: '100%',
    height: 250,
    marginTop: 15,
  },
  like: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 5,
  },
  likeText: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 5,
  },
  divider: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    width: '90%',
    alignSelf: 'center',
    marginTop: 15,
  },
});
