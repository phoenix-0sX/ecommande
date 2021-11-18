import { StyleSheet } from "react-native";
import { background } from "../components/colors/colors";

export const CreditStyles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: background,
      padding: 30,
    },
    bodyHeader: {
      height: 70,
      padding: 20,
      justifyContent: 'center',
      alignItems: 'center'
    },
    bodyHeaderText: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    infoView: {
      padding: 10,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    infoTitle: {
      padding: 5,
      fontWeight: 'bold',
      fontSize: 16,
    },
    infoSubtitle: {
      padding: 3,
      fontWeight: '700',
    },
    infoText: {
      fontSize: 12,
      letterSpacing: 3,
    }
})