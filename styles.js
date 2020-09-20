import { StyleSheet } from "react-native";

const SEND_MESSAGE_COLOR = "#56d8ff";

let styles = StyleSheet.create({
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

// export { styles };
