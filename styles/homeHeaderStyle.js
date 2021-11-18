import { StyleSheet } from 'react-native';
import { Color3, Color1, Blancs, Placeholder1, Color2 } from '../components/colors/colors';

export const HomeHeaderstyles = StyleSheet.create({
    header: {
        backgroundColor: Color3,
    },
    searchView: {
        flexDirection: 'row',
        margin: 3,
        height: 40,
    },
    searchForm: {
        flex: 8,
        flexDirection: 'row',
        marginHorizontal: 3,
    },
    searchInput: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: Placeholder1,
        borderColor: Color1,
    },
    headerTitle: {
        backgroundColor: Color2,
        //borderRadius: 10,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        color: Blancs,
        fontWeight: '300',
    },
    profilBtn: {
        flex: 1,
        width: 50,
        height: '100%',
        marginHorizontal: 3,
        borderWidth: 1,
        padding: 3,
        borderColor: Color2,
        borderRadius: 10,
        backgroundColor: Color1,
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
    Image: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
    },
    menuImage: {
        width: '100%',
        height: '100%',
    }
});