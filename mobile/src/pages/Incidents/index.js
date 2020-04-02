import React, {useState, useEffect}from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import api from '../../services/api'
import logoImg from '../../assets/logo.png';
import styles from './styles';

import { translate, getLanguageByDevice } from '../../locales'

export default function Incidents() {
    const [incidents, setIncidents] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();
    //console.log(getLanguageByDevice());
    async function loadIncidents(){
        if(loading){
            return;
        }

        if(total>0 && incidents.length ===total){
            return;
        }

        setLoading(true);

        const response = await api.get('/incidents',{
            params:{page},
            headers:{
                "language": getLanguageByDevice()
            }
        });

        //setIncidents(response.data);
        setIncidents([...incidents,...response.data]); //Concat os dados em response.data na array incidents
        setTotal(response.headers['x-total-count']);
        setPage(page+1);
        setLoading(false);
    }

    useEffect(()=>{
        loadIncidents();
    },[])
    
    function navigateToDetail(incident){
        navigation.navigate('Detail',{incident});
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    {translate('total_of')}<Text style={styles.headerTextBold}>{total} {translate('incidents')}</Text>
                </Text>
            </View>
            <Text style={styles.title}>{translate('welcome')}</Text>
            <Text style={styles.description}>{translate('select_incident')}</Text>

            <FlatList
                data={incidents}
                style={styles.incidentList}
                keyExtractor={incident=>String(incident.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadIncidents}
                onEndReachedThreshold={0.2}//Quando faltar 20% para acabar a lista o onEndReachd é disparado
                renderItem={({item:incident}) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>{translate('ngo')}:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>{translate('incident')}:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>{translate('value')}:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pr-BR',{ style: 'currency', currency:'BRL'}).format(incident.value)}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={()=>navigateToDetail(incident)}>
                            <Text style={styles.detailsButtonText}>{translate('see_details')}</Text>
                            <Feather name="arrow-right" size={16} color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
}