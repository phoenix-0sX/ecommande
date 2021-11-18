import { StyleSheet } from "react-native";
import { Color1, Color3, Greater, FormBorder } from "../components/colors/colors";

export const FormStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Color1,
    },
    body: {
      backgroundColor: Color3,
      borderRadius: 25,
      margin: 20,
      padding: 20
    },
    greaterText: {
      color: Greater,
      padding: 10,
      letterSpacing: 2,
      borderBottomWidth : 1,
      borderColor: FormBorder,
    },
    form: {
      margin: 10,
    },
    formLine: {
      flexDirection:'row',
      height: 40,
      margin: 10,
    },
    formLabel: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'flex-start',
    },
    formLabelText: {
        fontSize: 16,
        letterSpacing: 1,
    },
    formInput: {
      flex: 2,
      height: '100%',
      borderWidth: 1,
      borderColor: FormBorder,
      borderRadius: 15
    },
    lieuBtn: {
      flex: 2,
    },
    effectuerBtn: {
      margin: 5
    },
});