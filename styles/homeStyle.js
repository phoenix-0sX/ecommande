import { StyleSheet } from 'react-native';
import { Color3, background, Color2 } from '../components/colors/colors';

export const HomeStyles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: Color3,
    },
    contentView: {
        borderColor: Color2,
        backgroundColor: background,
        borderRadius: 25,
        borderWidth: 1.5,
        height: 250,
        margin: 10
    },
    cotnentImage: {
        width: '100%',
        height: '65%',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    cotnentTitle: {
        fontWeight: '300',
        fontStyle: 'italic',
        fontSize: 20,
        margin: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    detailsBtn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal : 25,

    },
    detailsBtnText: {
        color: Color2,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        fontSize: 15,
        margin: 5,

    }
});