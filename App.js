/**
 * @ Author: caophuong1018
 * @ Create Time: 2020-09-18 15:53:28
 * @ Modified by: caophuong1018
 * @ Modified time: 2020-09-20 20:09:27
 * @ Description: DevC week 2 assignment: Let's build a beautiful profile page application using React Native & Expo
 */

import React, { useState, useEffect } from "react";
import MasonryList from "react-native-masonry-list";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  SafeAreaView,
} from "react-native";
import axios from "axios";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import data from "./data";

/**
 * TODO: Refactor source code
 * @Create a lib to fetch data from remote resource with axios
 * @Split view into components to make codes reusable
 * @BUG API could be blocked (error 429 or error 403)
 */
const url = "https://picsum.photos/v2/list?page=2&limit=20";
const imageArr = [];

const App = () => {
  
  // const [data, setData] = useState({ data: [] });
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios(url);
  //     setData(result.data);
  //   };
  // }, []);

  if (data.length) {
    data.map((item) => {
      imageArr.push({
        uri: item.download_url,
        dimensions: {
          width: item.width,
          height: item.height,
        },
      });
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#7883a9" />
        </View>
        <View>
          <Entypo name="grid" size={24} color="#7883a9" />
        </View>
      </View>

      <View style={styles.accInfo}>
        <View style={styles.avatar}>
          <Image
            style={styles.avatarWrapper}
            source={require("./assets/avatar.jpg")}
          />
        </View>
        <View style={styles.accText}>
          <Text style={styles.accName}>Cao Phương</Text>
          <Text style={styles.accJob}>Developer</Text>
          <View style={styles.accAction}>
            <TouchableOpacity style={styles.follow} onPress={followed}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <></>
            <TouchableOpacity style={styles.sendMessage} onPress={sent}>
              <MaterialIcons name="send" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.accStatus}>
        {statusInfo.map((item) => {
          return (
            <View style={styles.statusOneFeed} key={item.id}>
              <Text style={styles.statusCount}>{item.count}</Text>
              <Text style={styles.statusText}>{item.text}</Text>
            </View>
          );
        })}
      </View>

      <SafeAreaView style={styles.accImages}>
        <MasonryList
          spacing={3}
          imageContainerStyle={{ borderRadius: 10 }}
          images={imageArr}
        />
      </SafeAreaView>

      <View style={styles.footer}>
        <Feather name="link-2" size={24} color="#7883a9" />
        <Ionicons name="ios-add-circle-outline" size={24} color="#7883a9" />
        <Feather name="user" size={24} color="#7883a9" />
      </View>
    </View>
  );
};

const statusInfo = [
  { id: 1, count: "210", text: "Photos" },
  { id: 2, count: "15k", text: "Followers" },
  { id: 3, count: "605", text: "Followings" },
];

const followed = () => {
  Alert.alert("Followed");
};
const sent = () => {
  Alert.alert("Message sent");
};

export default App;
