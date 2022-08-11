import React from 'react';
import { View, StyleSheet, Image, Platform, StatusBar,Text } from 'react-native';
import AppButton from '../../component/AppButton';
import { Formik } from 'formik';
import * as yup from 'yup';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import AppFormFill from '../../component/AppFormFill';
import styles from './styles';


//we use yup for validation the form 
const validationSchema = yup.object().shape({
    fullName:yup.string().min(3).max(20).required().label('Name'),
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

function RegisterSignUp(props) {
    return (
        <View style={styles.container}>
        <View style={{position: 'absolute', top: 0, left:0,flex:1}}>

            <Image  source={require('../../assets/upperdesign.png')}></Image>

        </View>
        
        <View style={styles.logocontainer}>
        <Text style={{ paddingTop: 150, paddingBottom: 15, fontWeight: 'bold', fontSize: 30 }}>Create Account !</Text>
            <Image
                style={styles.logo}
                source={require("../../assets/icons/signup.png")}
            ></Image>
        </View>
        <Formik
            initialValues={{ fullName:' ',email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
        >
            {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                <>

                <AppFormFill
                //
                        name='fullName'
                        icon="account"
                        placeholder="Full Name"
                        autoCapitilize='none'
                        autocorrect={false}
                        keyboardType={'default'}
                    />

                    <AppFormFill
                        name='email'
                        icon="email"
                        maxLength={20}
                        placeholder="Email"
                        autoCapitilize='none'
                        autocorrect={false}
                        keyboardType="email-address"
                    />

                    <AppFormFill
                        name='password'
                        icon="lock"
                        placeholder="Password"
                        autoCapitilize='none'
                        autocorrect={false}
                        secureTextEntry={true}
                        keyboardType={'default'}
                    />
                    
                    <AppButton style={styles.submitbutton} title="Register"
                     onPress={handleSubmit} />



                </>
            )}

        </Formik>
    </View>
    );
}

export default RegisterSignUp;