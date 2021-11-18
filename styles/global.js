import { StyleSheet } from 'react-native';
import { background, Blancs, Color2, FormBorder, RougeAnnuler } from '../components/colors/colors';

export const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Blancs,
    },
    bgImage: {
        width: '100%',
        height: '100%'
    },
    footer: {
      margin: 10,
      alignItems: 'center',
    },
    footerBtn: {
      width: '75%',
    },
    bodyForm: {
      flex: 1,
      backgroundColor: background,
      alignItems: 'center',
      alignContent: 'center',
    },
    profilImageView: {
      width: '30%',
      height: 100,
      margin: 5,
      padding: 1.5,
      borderRadius: 100,
      borderWidth: 3,
      borderColor: Color2
    },
    profilImage: {
      width: '100%',
      height: '100%',
      borderRadius: 100,
    },
    profilImageChange: {
      margin: 5,
      padding: 5,
      color: Color2,
      fontWeight: 'bold'
    },
    form: {
      width: '100%',
      padding: 20,
    },
    formContent: {
      margin: 5,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'flex-start',
      alignContent: 'center',
      justifyContent: 'center'
    },
    formContent2: {
      margin: 5,
      padding: 5,
      flexDirection: 'row',
      alignItems: 'flex-start',
      alignContent: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: RougeAnnuler,
      borderRadius: 25
    },
    formLabel: {
      flex: 1,
      padding: 10,
      fontWeight: 'bold',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    formLabelCritique: {
      flex: 1,
      padding: 10,
      color: RougeAnnuler,
      fontWeight: 'bold',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center'
    },
    formInput: {
      flex: 2,
      height: '100%',
      borderWidth: 1,
      borderColor: FormBorder,
      borderRadius: 15
    },
    maps: {
      flex: 1,
      width: '100%',
      height: '100%',
    }
});