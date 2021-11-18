import { StyleSheet } from "react-native";

export const CommandeDetailStyles = StyleSheet.create({
    body: {
      // color='rgb(200, 70, 10)'
      flex: 1,
      padding: 20,
      backgroundColor: '#fff'
    },
    bodyTitle: {
      height: 100,
      flexDirection: 'row',
      marginBottom: 10
    },
    Avatar: {
      flex: 1,
      width: '100%',
      height: '100%',
    },
    titleView: {
      flex: 2,
      padding: 20
    },
    titleValue: {
      fontWeight: '500',
      fontSize: 20,
      letterSpacing: 1
    },
    titleHour: {
      fontWeight: '500',
      fontSize: 14,
      letterSpacing: 2
    },
    bodyContent: {
      margin: 10,
      padding: 5,
      alignItems: 'flex-start',
    },
    bodyContentLabel: {
      padding: 5,
      fontSize: 16,
      alignItems: 'flex-start',
    },
    bodyContentValue: {
      fontWeight: '500',
      padding: 5,
      fontSize: 22,
      letterSpacing: 2,
      alignItems: 'flex-start',
    }
  
})