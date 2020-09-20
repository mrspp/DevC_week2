import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    margin: 10,
  },
  header: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerIcon: {
    flexDirection: "column",
  },
  accInfo: {
    flex: 0.15,
    flexDirection: "row",
  },
  avatar: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarWrapper: {
    borderRadius: 60,
    height: 100,
    width: 100,
  },
  accText: {
    flex: 6,
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: 10,
  },
  accName: {
    fontWeight: "bold",
    color: "#212d4c",
    fontSize: 20,
  },
  accJob: {
    fontSize: 16,
    fontWeight: "400",
    color: "#7883a9",
  },
  accAction: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 15,
  },
  follow: {
    backgroundColor: "#3b73ff",
    width: 110,
    height: 30,
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
  followText: {
    color: "white",
    fontSize: 14,
  },
  sendMessage: {
    marginLeft: 20,
    backgroundColor: "#56d8ff",
    height: 30,
    width: 55,
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
  accStatus: {
    flex: 0.15,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  statusOneFeed: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    color: "#7883a9",
    fontWeight: "200",
    fontSize: 16,
  },
  statusCount: {
    color: "#2a3653",
    fontWeight: "bold",
    fontSize: 20,
  },
  accImages: {
    flex: 0.5,
  },
  safeViewColumn: {
    flexDirection: "column",
  },
  safeViewFlatlist: {},
  column: {
    flex: 1,
    flexDirection: "column",
  },
  feedImage: {
    resizeMode: "contain", //optional
    minHeight: 150,
    margin: 5,
  },
  footer: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
