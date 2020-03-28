import Constants from 'expo-constants';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop:Constants.statusBarHeight+20,
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },





    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:48,
        marginBottom:16
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        marginTop: 24,
        fontWeight: 'bold'
    },
    incidentValue:{
        marginTop:8,
        fontSize: 15,
        color: '#737380'
    },
    contactBox:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginTop:48,
        marginBottom:16
    },

    heroTitle:{
        fontWeight: 'bold',
        fontSize: 20,
        lineHeight: 30,
        color: '#13131a'
    },
    heroDescription:{
        fontSize: 15,
        marginTop: 16,
        color: '#737380'
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    action:{
        height: 50,
        width: '48%',
        borderRadius: 8,
        backgroundColor: '#e02041',
        justifyContent:'center',
        alignItems: 'center'
    },
    actionText:{
        color:"#FFF",
        fontSize:15,
        fontWeight: 'bold'
    }
})