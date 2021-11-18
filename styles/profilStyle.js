import { StyleSheet } from "react-native";
import { background, Color1, Color2 } from "../components/colors/colors";

export const ProfilStyles = StyleSheet.create({
    header: {
      height: 50,
      padding: 5,
      marginBottom: 1,
      alignItems: 'center',
      flexDirection: 'row',
      borderBottomWidth: 1,
      borderBottomColor: Color1,
    },
    menuBtn: {
      flex: 1,
      width: '100%',
      height: '100%',
      marginHorizontal: 3,
      padding: 3,
      borderWidth: 1,
      borderColor: Color2,
      borderRadius: 10,
      backgroundColor: Color1,
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    headerTextView: {
      flex: 10,
      alignItems: 'center',
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: Color2,
    },
    body: {
      flex: 1,
      backgroundColor: background,
      marginVertical: 2,
    },
    bodyHeader: {
      flexDirection: 'row',
      height: 170,
      padding: 5,
    },
    nameView: {
      flex: 10,
      padding: 10,
      justifyContent: 'center',
      alignItems: 'flex-start'
    },
    nameText: {
      fontSize: 15,
      letterSpacing: 2
    },
    fornameText: {
      fontSize: 13,
    },
    profilView: {
      width: '100%',
      height: '100%',
      flex: 5,
      padding: 5,
      alignItems: 'center'
    },
    profilImage: {
      width: '100%',
      height: '100%',
      flex: 7,
      padding: 5,
      borderRadius: 100,
    },
    usernameText: {
      flex: 4,
      fontSize: 20,
      padding: 5,
      fontWeight: 'bold'
    },
    infoView: {
      padding: 10,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    infoTitle: {
        fontWeight: 'bold'
    },
    infoText: {
      fontSize: 12,
      letterSpacing: 3,
    }
})