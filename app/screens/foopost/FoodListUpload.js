import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, Platform, StatusBar, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppFormFill from '../../component/AppFormFill';
import SubmitButton from '../../component/SubmitButton';
import ImageInput1 from '../../component/ImageInput1';


const validationSchema = yup.object().shape({
    name: yup.string().required().min(3).label("Name"),
    price: yup.string().required().min(1).label("Price"),
    time: yup.string().required().min(2).label("Time"),
    rating: yup.string().required().max(1).label("Rating"),
    
})

function LoginScreen(props) {
    const [imageUri,setImageUri]=useState();
    
    return (
        <View style={[styles.screen, styles.container]}>
            <View style={{ position: 'absolute', top: 0, left: 0, flex: 1, marginVertical: 20 }}>
                <Image source={require('../../assets/upperdesign.png')}></Image>
            </View>

            <View style={styles.logocontainer}>
                <Text style={{ paddingTop: 150, paddingBottom: 15, fontWeight: 'bold', fontSize: 30 }}>Food Post</Text>
            </View>
            <Formik
                initialValues={{ name: ' ', price: ' ',time:' ',rating:' ' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <>
                       <ImageInput1 
                       //we make a component that take access and select pic from gallery
                       imageUri={imageUri}
                       onChangeImage={(uri)=>setImageUri(uri)}
                       />
                       <Text style={{fontSize:18,fontWeight:'500'}}>upload picture</Text>


                        <AppFormFill
                       //component that have basic functionlity of input fields
                       name='Name'
                       
                       maxLength={20}
                       placeholder="Name"
                       autoCapitilize='none'
                       autocorrect={false}
                       keyboardType={'default'}
                       />

                        <AppFormFill
                       //component that have basic functionlity of input fields
                       name='price'
                       
                       placeholder="Price"
                       autoCapitilize='none'
                       autocorrect={false}
                       secureTextEntry={false}
                       keyboardType='numeric'
                       />
                        <AppFormFill
                            //component that have basic functionlity of input fields
                            name='time'
                            
                            placeholder="time"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'numeric'}
                            />
                        <AppFormFill
                            //component that have basic functionlity of input fields
                            name='rating'
                     
                            placeholder="rating"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'numeric'}
                        />
                        <SubmitButton 
                        //component
                        title={'Post'} />

                    </>
                )
                }
            </Formik>
        </View>
    );
}

export default LoginScreen;