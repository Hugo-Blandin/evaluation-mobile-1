import React from "react";
import { Text, View, ViewPagerAndroidBase } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

/*functionMyComp() {
  return (
  <div>
    <h2>Mon premier composant</h2>
  </div>    
  );
}*/
const UselessTextInput = () => {
  //const [text, onChangeText] = React.useState("Useless Text");
  const [poid, poid] = React.useState(null);
  const [taille, taille] = React.useState(null);
/*
  function surpoids() {
    return (
      <div>
        <h2>Vous êtes en surpoids</h2>
      </div>    
    );
  }*//*
  function CalculDeIcm(poid, taille){
    let icm = 0
    if (poid === null || taille === null){
      icm = poid/taille
    }

    if(icm >= 20) return "Vous êtes en surpoids"
  }*/
  return (
    <SafeAreaView>

      <Text>Calcul automatique de votre ICM</Text>
      <TextInput
        style={styles.input}
        onChangeText={poid}
        value={number}
        placeholder="Veuillez rentrer votre poix en kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={taille}
        value={number2}
        placeholder="veuillez rentrer votre tailles en m²"
        keyboardType="numeric"
      />{/*
      <Button variant="primary" onClick={CalculDeIcm}>
        Calculer
      </Button>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default UselessTextInput;

