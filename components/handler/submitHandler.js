import { Alert } from 'react-native';
import { ContentPages } from "../routes/routesName";

export const submitHandler = (loginText, mdpText, clientData, navigation) => {
    var valide = false;
    clientData.forEach(element => {
      if (element.login == loginText && element.mdp == mdpText) {
        valide = true;
      }
    });
    if (valide == true) {
      console.log('AUTHENTIFICATION OK');
      var data = { id: null, name: '', forname: '', username: '', login: '', mdp: '', bio: '', domicile: '', fone: '', imgProfil:  null };
      clientData.forEach(element => {
        if (element.login == loginText && element.mdp == mdpText) {
          data.id = element.id;
          data.name = element.name;
          data.forname = element.forname;
          data.username = element.username;
          data.login = element.login;
          data.mdp = element.mdp;
          data.bio = element.bio;
          data.domicile = element.domicile;
          data.fone = element.fone;
          data.imgProfil = element.imgProfil;
        }
      });
      //console.log(data);
      navigation.navigate( ContentPages, data);
    }
    else if ( loginText == '' ) {
      console.log('AUTHENTIFICATION UNAUTORISED');
      Alert.alert('ERROR!', 'Please, fill in the Login field', [
        {text: 'close'},
      ]);
    }
    else if ( mdpText == '' ) {
      console.log('AUTHENTIFICATION UNAUTORISED');
      Alert.alert('ERROR!', 'Please, fill in the Password field', [
        {text: 'close'},
      ]);
    }
    else if ( mdpText.length < 8 ) {
      console.log('AUTHENTIFICATION UNAUTORISED');
      Alert.alert('ERROR!', 'Password must be more than 8 characters', [
        {text: 'close'},
      ]);
    } else {
      console.log('AUTHENTIFICATION UNAUTORISED');
      Alert.alert('ERROR!', 'Login or Password incorrect', [
        {text: 'close'},
      ]);
    }
};