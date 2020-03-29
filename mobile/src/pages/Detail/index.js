import React from 'react';
import { Feather } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';
import styles from './styles';

import { translate } from '../../locales'

export default function Detail() {
    const navigation = useNavigation();
    const route = useRoute();
    const incident = route.params.incident;

    const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL"}).format(incident.value)}`;
    
    function navigateBack(){
        navigation.goBack();
    }
    function sendMail(){
        MailComposer.composeAsync({
            subject:`Herói do caso ${incident.title}`,
            recipients:[incident.email],
            body: message
        })
    }
    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity style={styles.detailsButton} onPress={navigateBack}>
                    <Feather name="arrow-left" size={28} color="#E02041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, {marginTop:0}]}>{translate('ngo')}:</Text>
                <Text style={styles.incidentValue}>{incident.name}</Text>

                <Text style={styles.incidentProperty}>{translate('description')}:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>{translate('value')}:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pr-BR',{ style: 'currency', currency:'BRL'}).format(incident.value)}</Text>

            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>{translate('save_the_day')}</Text>
                <Text style={styles.heroTitle}>{translate('be_hero')}</Text>
                <Text style={styles.heroDescription}>{translate('contact')}</Text>
                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}