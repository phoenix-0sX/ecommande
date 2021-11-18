import { Alert } from 'react-native';
import { CodePages } from "../routes/routesName";

export const verifyMailHandler = (mailText, clientData, navigation) => {
    var valide = false;
    clientData.forEach(element => {
      if (element.login == mailText) {
        valide = true;
      }
    });
    if (valide == true) {
      console.log('Verification OK');
      var data = {fone:'', id: null};
      clientData.forEach(element => {
        if (element.login == mailText) {
          data.id = element.id;
          data.fone = element.fone;
        }
      });
      //console.log(data);
      navigation.navigate( CodePages, data);
    }
    else if ( mailText == '' ) {
      console.log('Verification failed');
      Alert.alert('ERROR!', 'Please, fill in the Adress Mail field', [
        {text: 'close'},
      ]);
    } else {
      console.log('Verification failed');
      Alert.alert('ERROR!', 'There is no one registered having that mail', [
        {text: 'close'},
      ]);
    }
};