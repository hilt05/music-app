import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import React, { Children } from "react";
import { normalize } from "../utils/normalize";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const gray = "#91A1BD";

const Neumorphism = () => {
  const NeuMorph = ({ children, size }: any) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || normalize(40),
                height: size || normalize(40),
                borderRadius: size / 2 || normalize(20),
              },
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ marginHorizontal: normalize(32), marginTop: normalize(32) }}
      >
        <View style={styles.topContainer}>
          <NeuMorph size={normalize(48)}>
            <AntDesign name="arrowleft" size={normalize(20)} color={gray} />
          </NeuMorph>
          <View>
            <Text style={styles.playing}> Playing Now </Text>
          </View>
          <NeuMorph size={normalize(48)}>
            <Entypo name="menu" size={normalize(20)} color={gray} />
          </NeuMorph>
        </View>
        <View style={styles.songArtContainer}>
          <NeuMorph size={normalize(250)}>
            <Image
              source={require("../assets/images/headphones.jpg")}
              style={styles.songArt}
            />
          </NeuMorph>
        </View>
        <View style={styles.songContainer}>
          <Text style={styles.title}>Fall Down</Text>
          <Text style={styles.artist}>R. Ramehan</Text>
        </View>
        <View style={styles.trackContainer}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.time}> 1:21</Text>
            <Text style={styles.time}>4:24</Text>
          </View>
          <Slider
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#8AAAFF"
            maximumTrackTintColor="#DAE6F4"
            thumbTintColor="#7B9BFF"
          />
        </View>
        <View style={styles.controlsContainer}>
          <NeuMorph size={normalize(80)}>
            <Ionicons name="play-back" size={24} color={gray} />
          </NeuMorph>
          <NeuMorph size={normalize(80)}>
            <Ionicons name="pause" size={24} color={gray} />
          </NeuMorph>
          <NeuMorph size={normalize(80)}>
            <Ionicons name="play-forward" size={24} color={gray} />
          </NeuMorph>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Neumorphism;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", backgroundColor: "#DEE9FD" },
  topContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  inner: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#E2ECFD",
    borderWidth: 1,
    elevation: 12,
  },
  // topShadow: {
  //   shadowOffset: {
  //     width: 0,
  //     height: -6,
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,
  //   shadowColor: "#FBFFFF",
  // },
  // bottomShadow: {
  //   shadowOffset: {
  //     width: 6,
  //     height: 6,
  //   },
  //   shadowOpacity: 1,
  //   shadowRadius: 6,
  //   shadowColor: "#B7C4DD",
  // },
  playing: {
    color: "gray",
    fontWeight: "800",
  },
  songArtContainer: {
    marginVertical: normalize(32),
    alignItems: "center",
  },
  songArt: {
    width: normalize(250),
    height: normalize(250),
    borderRadius: normalize(125),
    borderColor: "#D7E1F3",
    borderWidth: normalize(10),
  },

  songContainer: { alignItems: "center" },
  title: { fontSize: normalize(25), color: "#6C7A93", fontWeight: "600" },
  artist: {
    fontSize: normalize(15),
    marginTop: normalize(5),
    color: "gray",
    fontWeight: "500",
  },
  trackContainer: {
    marginTop: normalize(32),
    marginBottom: normalize(30),
  },
  time: {
    fontSize: normalize(10),
    color: "gray",
    fontWeight: "700",
  },
  controlsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    bottom: normalize(10),
  },
});
