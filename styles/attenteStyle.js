import { StyleSheet } from "react-native";
import { background, BleuClair, BleuVif } from './../components/colors/colors';

export const AttenteStyles = StyleSheet.create({
  header: {
    height: 50,
    padding: 5,
    marginBottom: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BleuVif,
  },
  menuBtn: {
    flex: 1,
    width: '100%',
    height: '100%',
    marginHorizontal: 3,
    padding: 3,
    borderWidth: 1,
    borderColor: BleuClair,
    borderRadius: 10,
    backgroundColor: BleuVif,
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
    color: BleuVif,
  },
  body: {
    flex: 1,
    backgroundColor: background,
  },
  Touchable: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  Avatar: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  ListView: {
    flex: 2,
    backgroundColor: BleuClair,
    marginVertical: 1,
    padding: 10
  },
  ListTitle: {
    padding: 5,
    alignItems: 'stretch',
    fontSize: 16,
  },
  ListHour: {
    fontSize: 12,
    alignItems: 'flex-start',
    fontWeight: '300',
    letterSpacing: 2,
  }
})