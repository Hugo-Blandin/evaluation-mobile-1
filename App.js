import React from "react";
import { Text, View, ViewPagerAndroidBase } from 'react-native';
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';


const UselessTextInput = () => {

  const [poid, onChangeNumber] = React.useState(null);
  const [taille, onChangeNumber] = React.useState(null);

  function surpoids() {
    return (
      <div>
        <h2>Vous êtes en surpoids</h2>
      </div>    
    );
  }
  function CalculDeIcm(poid, taille){
    // let icm = 0

    icm = poid/taille


    if(icm > 20) return surpoids
  }
  return (
    <SafeAreaView>

      <Text>Calcul automatique de votre ICM</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={poid}
        placeholder="Veuillez rentrer votre poix en kg"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={taille}
        placeholder="veuillez rentrer votre tailles en m²"
        keyboardType="numeric"
      />{
      <Button variant="primary" onClick={CalculDeIcm}>
        Calculer
      </Button>}
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



