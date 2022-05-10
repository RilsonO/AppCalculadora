import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 20,
  },
  DarkMode: {
    backgroundColor: "#333333",
  },
  ContainerResposta: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  HorizontalContainer: {
    flex: 1,
    flexDirection: "row",
  },
  Resposta: {
    flex: 1,
    color: "#000000",
    fontSize: 50,
    textAlign: "right",
    marginHorizontal: 10,
  },
  OrangeButton: {
    backgroundColor: "#fd9536",
  },
  DarkModeOrange: {
    backgroundColor: "#9400d3",
  },
  ResetButton: {
    flex: 3,
    backgroundColor: "#cccccc",
  },
  DarkModeReset: {
    backgroundColor: "#9999",
  },
  DarkModeContainerResposta: {
    backgroundColor: "#222222",
  },
  DarkModeResposta: {
    color: "#c6c6c6",
  },
  ContainerButtonMode: {
    backgroundColor: "#FFFFFF",
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#222222",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    margin: 5,
  },
  ButtonModeTitle: {
    color: "#222222",
  },
  DarkModeContainerButtonMode: {
    backgroundColor: "#222222",
    borderColor: "#c6c6c6",
  },
  DarkModeButtonModeTitle: {
    color: "#c6c6c6",
  },
});
