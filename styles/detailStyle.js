import { StyleSheet } from "react-native";

export const DetailStyles = StyleSheet.create({
    header: {
      width: '100%',
      height: 250,
    },
    body: {
      marginVertical: 10,
      marginHorizontal: 20,
      padding: 10,
    },
    bodyTitle: {
      paddingTop: 20,
      paddingLeft: 20,
    },
    bodyLabel: {
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      letterSpacing: 2,
      fontSize: 20,
      paddingVertical: 5,
    },
    bodyContent: {
      letterSpacing: 2,
    }
});