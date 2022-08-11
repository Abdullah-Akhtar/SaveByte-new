import React from 'react';
import { View, StyleSheet, Image, Platform, StatusBar, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppFormFill from '../../component/AppFormFill';
import SubmitButton from '../../component/SubmitButton';
import styles from './styles';

const validationSchema = yup.object().shape({
    email: yup.string().required().email().label("Email"),
    password: yup.string().required().min(4).label("Password")
})

function LoginScreen(props) {
    return (
        <View style={[styles.screen, styles.container]}>
            <View style={{ position: 'absolute', top: 0, left: 0, flex: 1}}>
                <Image source={require('../../assets/upperdesign.png')}></Image>
            </View>

            <View style={styles.logocontainer}>
                <Text style={{ paddingTop: 150, paddingBottom: 15, fontWeight: 'bold', fontSize: 30 }}>Welcome Back !</Text>
                <Image
                    style={styles.logo}
                    source={require("../../assets/icons/signin.png")}
                ></Image>
            </View>
            <Formik
                initialValues={{ email: ' ', password: ' ' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {()=>(
                    <>               
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
                <SubmitButton title={'Login'} />                 
                    
                    </>
                )

                }
                
            </Formik>
        </View>
    );
}

export default LoginScreen;