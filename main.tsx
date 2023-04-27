// @ts-nocheck
import { StyleSheet, Text, View } from 'react-native';
import { Card, Icon } from 'osmosys-ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  }
})

// Usando la card que deberia aceptar solo strings de texto
const Main = () => {
  return (
    <View style={styles.container}>
     <Card
  backgroundColor="primary_orange"
  data={[
    { title: "PROVEEDOR", description: "CWO" },
    {
      title: {
        includeIcon: true,
      },
      description: {
        text: "ando"
      }
    }
  ]}
/>
    </View>);
}

export default Main
