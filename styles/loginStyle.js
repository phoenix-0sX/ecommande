import { StyleSheet } from 'react-native';
import { Color1, Color3, LoginText1, LoginText2, LoginBackground1 } from './../components/colors/colors';

export const LoginStyles = StyleSheet.create({
    header: {
      padding: 15,
      alignItems: 'center',
      justifyContent: 'center'
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 22
      //fontStyle: 'italic'
    },
    headerText1: {
      fontWeight: '300',
      fontSize: 16,
      fontStyle: 'italic',
      color: LoginText1,
    },
    body: {
      borderColor: Color1,
      backgroundColor: Color3,
      borderWidth: 1.5,
      borderRadius: 15,
      margin: 15,
    },
    form: {
      backgroundColor: LoginBackground1,
      padding: 10,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
      //margin: 10, */
    },
    formText: {
      color: LoginText2,
      fontWeight: 'bold',
      fontSize: 18,
      fontFamily: 'verdana',
      padding: 5,
    },
    formTextInput: {
      borderBottomWidth: 2,
      borderLeftWidth: 0.1,
      borderRightWidth: 0.1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderColor: Color3,
      padding: 15,
      margin: 5
    },
    formTextInputFocused: {
      borderBottomWidth: 3,
      borderLeftWidth: 0.1,
      borderRightWidth: 0.1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      borderColor: '#fff',
      padding: 15,
      margin: 5
    },
    buttonStyle: {
      margin: 5,
      padding: 5,
    },
    other: {
      margin: 10,
      padding: 10
    },
    otherComponent: {
      flexDirection: 'row',
      height: 30,
      margin: 3,
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#333',
      shadowOpacity: 0.5,
      shadowOffset: { height: 2, width:2 },
      shadowRadius: 5,
    },
    otherIcon: {
      paddingHorizontal: 5
    },
    otherText: {
      fontWeight: '500',
      paddingHorizontal: 5,
      color: LoginText1,
    }
});