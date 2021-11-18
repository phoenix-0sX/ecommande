import { Alert } from 'react-native';
import { PasswordPages } from "../routes/routesName";

export const verifyCodeHandler = (id, code, codeData, navigation) => {
    var valide = false;
    for (let i = 0; i < codeData.length; i++) {
        if (code == codeData[i]) {
            valide = true;
        }
        
    }
    if (valide == true) {
      console.log('Verification OK');
      //console.log(data);
      navigation.navigate( PasswordPages, id);
    }
    else if ( code == '' ) {
      console.log('Verification failed');
      Alert.alert('ERROR!', 'Please, fill in the Adress Mail field', [
        {text: 'close'},
      ]);
    } else {
      console.log('Verification failed');
      Alert.alert('ERROR!', 'Code invalid', [
        {text: 'close'},
      ]);
    }
};