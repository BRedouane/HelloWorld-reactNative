import { StyleSheet, Text, View } from 'react-native';

//c'est un peu comme les fonction react, on peu ajouter des variable et des sous fonction.
export default function App() {
  return (
    //ici, le view est plus l'equivalent de <div><div> dans HTML, tout les element doivent etre "entouré" d'un view,
    // meme si il y a 2 view, ces dernier doivent etre dans un view qui les englobe,
    //essayer de copier coller ces 3 ligne, et les coller juste en bas, ca fera un bug, ensuite entourer les par un view et ca fonctionnera
    //la balise texte est comme le <p></p>, ca permet d'afficher le texte.
    <View style={styles.container}>
      <Text>Hello World!</Text>
    </View>
  );
}
//voir package.json...section script. c'est la ou on definie le comportement de l'application au demarage.

//similaire au style dans Css, ici il crée des "bloc" de style avec un ID chacun, 
//vous pouvez essayer de changer le backgroundColor à 'blue' pour voir
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
