import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Button } from "../../components";

export default function Calculadora() {
  const [partes, setPartes] = useState([]);
  const [parte, setParte] = useState("0");
  const [darkMode, setDarkMode] = useState(true);

  function calcular(value) {
    if (value === "C") {
      setParte("0");
      setPartes([]);
      return;
    }

    if (value === "=") {
      setPartes((prev) => {
        let prevAux = [...prev, parte];
        prevAux = prevAux.map((item) => {
          if (item === "x") return "*";
          if (item === "÷") return "/";
          return item;
        });
        if (
          prevAux[prevAux.length - 1] === "*" ||
          prevAux[prevAux.length - 1] === "/" ||
          prevAux[prevAux.length - 1] === "+" ||
          prevAux[prevAux.length - 1] === "-"
        ) {
          prevAux = prevAux.slice(0, -1);
        }
        console.log("partes: ", prevAux);
        return [eval(prevAux.join(""))];
      });
      setParte("");
      return;
    }

    if (
      partes.length <= 0 &&
      parte === "0" &&
      (value === "x" || value === "÷" || value === "+")
    ) {
      return;
    }

    if (value === "x" || value === "÷" || value === "+" || value === "-") {
      if (
        partes.length > 0 &&
        (partes[partes.length - 1] === "x" ||
          partes[partes.length - 1] === "÷" ||
          partes[partes.length - 1] === "+" ||
          partes[partes.length - 1] === "-")
      ) {
        return;
      }
      setPartes((prev) => [...prev, parte, value]);
      setParte("");
      return;
    }

    if (parte === "0" && value !== ".") {
      setParte(value);
      return;
    }
    if (parte.indexOf(".") !== -1 && value === ".") return;
    setParte((prev) => prev + value);
  }

  return (
    <SafeAreaView style={[styles.Container, darkMode && styles.DarkMode]}>
      <View
        style={[
          styles.ContainerResposta,
          darkMode && styles.DarkModeContainerResposta,
        ]}
      >
        <TouchableOpacity
          onPress={() => setDarkMode((prev) => !prev)}
          style={[
            styles.ContainerButtonMode,
            darkMode && styles.DarkModeContainerButtonMode,
          ]}
        >
          <Text
            numberOfLines={1}
            adjustsFontSizeToFit
            style={[
              styles.ButtonModeTitle,
              darkMode && styles.DarkModeButtonModeTitle,
            ]}
          >
            {darkMode ? "Dark" : "Light"}
          </Text>
        </TouchableOpacity>
        <Text
          numberOfLines={2}
          adjustsFontSizeToFit
          style={[styles.Resposta, darkMode && styles.DarkModeResposta]}
        >
          {partes.map((value) => value)}
          {parte}
        </Text>
      </View>
      <View style={styles.HorizontalContainer}>
        <Button
          style={[styles.ResetButton, darkMode && styles.DarkModeReset]}
          title="C"
          onPress={() => calcular("C")}
        />
        <Button
          title="÷"
          style={[styles.OrangeButton, darkMode && styles.DarkModeOrange]}
          onPress={() => calcular("÷")}
        />
      </View>

      <View style={styles.HorizontalContainer}>
        <Button title="7" onPress={() => calcular("7")} />
        <Button title="8" onPress={() => calcular("8")} />
        <Button title="9" onPress={() => calcular("9")} />
        <Button
          title="x"
          style={[styles.OrangeButton, darkMode && styles.DarkModeOrange]}
          onPress={() => calcular("x")}
        />
      </View>

      <View style={styles.HorizontalContainer}>
        <Button title="4" onPress={() => calcular("4")} />
        <Button title="5" onPress={() => calcular("5")} />
        <Button title="6" onPress={() => calcular("6")} />
        <Button
          title="-"
          style={[styles.OrangeButton, darkMode && styles.DarkModeOrange]}
          onPress={() => calcular("-")}
        />
      </View>
      <View style={styles.HorizontalContainer}>
        <Button title="3" onPress={() => calcular("3")} />
        <Button title="2" onPress={() => calcular("2")} />
        <Button title="1" onPress={() => calcular("1")} />
        <Button
          title="+"
          style={[styles.OrangeButton, darkMode && styles.DarkModeOrange]}
          onPress={() => calcular("+")}
        />
      </View>

      <View style={styles.HorizontalContainer}>
        <Button style={{ flex: 2 }} title="0" onPress={() => calcular("0")} />
        <Button title="." onPress={() => calcular(".")} />
        <Button
          title="="
          style={[styles.OrangeButton, darkMode && styles.DarkModeOrange]}
          onPress={() => calcular("=")}
        />
      </View>
    </SafeAreaView>
  );
}
