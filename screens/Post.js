import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import React from 'react';
import PostCard from './PostCard';

const Posts = [
  {
    id: '1',
    userName: 'Jenny Doe',
    userImg: require('../assets/users/user-3.jpg'),
    postTime: '4 mins ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-3.jpg'),
    liked: true,
    likes: '14',
    comments: '5',
  },
  {
    id: '2',
    userName: 'John Doe',
    userImg: require('../assets/users/user-1.jpg'),
    postTime: '2 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '8',
    comments: '0',
  },
  {
    id: '3',
    userName: 'Ken William',
    userImg: require('../assets/users/user-4.jpg'),
    postTime: '1 hours ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-2.jpg'),
    liked: true,
    likes: '1',
    comments: '0',
  },
  {
    id: '4',
    userName: 'Selina Paul',
    userImg: require('../assets/users/user-6.jpg'),
    postTime: '1 day ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: require('../assets/posts/post-img-4.jpg'),
    liked: true,
    likes: '22',
    comments: '4',
  },
  {
    id: '5',
    userName: 'Christy Alex',
    userImg: require('../assets/users/user-7.jpg'),
    postTime: '2 days ago',
    post: 'Hey there, this is my test for a post of my social app in React Native.',
    postImg: 'none',
    liked: false,
    likes: '0',
    comments: '0',
  },
];

export default function Post() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.card}>
        <View style={styles.userInfo}>
          <Image
            style={styles.image}
            source={require('../../assets/users/user-3.jpg')}
          />
          <View style={styles.userInfoText}>
            <Text style={styles.username}>Jonny</Text>
            <Text style={styles.postTime}>4 hours ago</Text>
          </View>
        </View>
        <Text style={styles.postText}>Hlo My Self Roshan</Text>
        <Image
          style={styles.imagepost}
          source={require('../../assets/posts/post-img-2.jpg')}
        />
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
      </View> */}
      <FlatList
        data={Posts}
        renderItem={({item}) => <PostCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

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
