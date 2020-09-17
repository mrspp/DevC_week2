import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
  TouchableOpacity,
  Button,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";

const SEND_MESSAGE_COLOR = "#56d8ff";
const imageArr = [
  { id: 1, imgSource: require("./assets/screen-0.jpg") },
  { id: 2, imgSource: require("./assets/screen-1.jpg") },
  { id: 3, imgSource: require("./assets/screen-2.jpg") },
  { id: 4, imgSource: require("./assets/screen-3.jpg") },
  { id: 5, imgSource: require("./assets/screen-4.jpg") },
  { id: 6, imgSource: require("./assets/screen-5.jpg") },
  { id: 7, imgSource: require("./assets/screen-6.jpg") },
  { id: 8, imgSource: require("./assets/screen-7.jpg") },
  { id: 9, imgSource: require("./assets/screen-8.jpg") },
  { id: 10, imgSource: require("./assets/screen-9.jpg") },
];
const centerImgArr = Math.floor(imageArr.length / 2);

const ButtonHandler = () => {
  Alert.alert("Followed");
};

const SendMessageBtn = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.msgBtn}>
    <Text style={{ color: "white" }}>{title}</Text>
  </TouchableOpacity>
);

const CustomButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.followBtn}>
    <Text style={styles.followText}>{title}</Text>
  </TouchableOpacity>
);

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Ionicons
            style={styles.headerBtn}
            name="ios-arrow-round-back"
            size={44}
          />
        </View>
        <View>
          <Fontisto name="nav-icon-grid-a" size={24} color="black" />
          {/* <Entypo name="grid" size={24} color="black" /> */}
        </View>
      </View>
      <View style={styles.infoGroup}>
        <View style={styles.avatarImg}>
          <Image
            style={styles.avatar}
            source={require("./assets/avatar.jpg")}
          ></Image>
        </View>

        <View style={styles.infoText}>
          <Text style={styles.nameText}>Cao Phương</Text>
          <Text style={styles.jobText}>Developer</Text>

          <View style={styles.contactBtn}>
            {/* <TouchableOpacity style={styles.followBtn}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity> */}
            <CustomButton
              title="Follow"
              onPress={ButtonHandler()}
            ></CustomButton>
            <TouchableOpacity style={styles.msgBtn}>
              <MaterialCommunityIcons name="send" size={18} color="white" />
            </TouchableOpacity>
            {/* <SendMessageBtn title="" onPress={ButtonHandler}>
              <MaterialCommunityIcons name="send" size={18} color="white" />
            </SendMessageBtn> */}
          </View>
        </View>
      </View>
      <View style={styles.statusGroup}>
        <View style={styles.photoCount}>
          <Text style={styles.statusCount}>210</Text>
          <Text style={styles.statusText}>Photos</Text>
        </View>
        <View style={styles.followerCount}>
          <Text style={styles.statusCount}>15k</Text>
          <Text style={styles.statusText}>Followers</Text>
        </View>
        <View style={styles.followingCount}>
          <Text style={styles.statusCount}>605</Text>
          <Text style={styles.statusText}>Followings</Text>
        </View>
      </View>
      <ScrollView style={{ flex: 0.25 }}>
        <View style={styles.imageGroup}>
          <View style={styles.imageColumn}>
            {imageArr.slice(0, centerImgArr).map((item) => {
              return (
                <Image
                  source={item.imgSource}
                  style={styles.imageWrapper}
                  key={item.id}
                />
              );
            })}
          </View>
          <View style={styles.imageColumn}>
            {imageArr.slice(centerImgArr).map((item) => {
              return (
                <Image
                  source={item.imgSource}
                  style={styles.imageWrapper}
                  key={item.id}
                />
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View>
          <Ionicons name="ios-options" size={24} color="black" />
        </View>
        <View>
          <Ionicons name="ios-add-circle-outline" size={24} color="black" />
        </View>
        <View>
          <Feather name="user" size={24} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 25,
    marginTop: 10,
  },
  headerBtn: {
    color: "black",
  },
  infoGroup: {
    flex: 0.25,
    flexDirection: "row",
  },
  statusGroup: {
    flex: 0.2,
    flexDirection: "row",
  },
  footer: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageGroup: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarImg: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
  },
  infoText: {
    flex: 0.6,
    flexDirection: "column",
    justifyContent: "center",
  },
  followBtn: {
    backgroundColor: "#3b73ff",
    width: 110,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  msgBtn: {
    backgroundColor: SEND_MESSAGE_COLOR,
    height: 25,
    width: 60,
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contactBtn: {
    flexDirection: "row",
    marginTop: 15,
  },
  nameText: {
    fontWeight: "bold",
    color: "#212d4c",
    fontSize: 20,
  },
  jobText: {
    fontSize: 16,
    fontWeight: "400",
    color: "rgb(148,161,180)",
  },
  followText: {
    fontSize: 14,
    color: "white",
  },
  photoCount: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  followerCount: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  followingCount: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  statusCount: {
    color: "#2a3653",
    fontWeight: "bold",
    fontSize: 22,
  },
  statusText: {
    color: "rgb(148,161,180)",
    fontWeight: "200",
    fontSize: 14,
  },
  imageWrapper: {
    borderRadius: 10,
    height: 170,
    width: 170,
    margin: 5,
  },
  imageColumn: {
    flexDirection: "column",
  },
});

export default App;
