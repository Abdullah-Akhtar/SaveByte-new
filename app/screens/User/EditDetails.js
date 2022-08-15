import React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, Platform, StatusBar, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppFormFill from '../../component/AppFormFill';
import SubmitButton from '../../component/SubmitButton';
import ImageInput1 from '../../component/ImageInput1';
const validationSchema = yup.object().shape({
    // firstName: yup.string().required().min(3).label("First Name"),
    // lastName: yup.string().required().min(3).label("Last Name"),
    // phone: yup.string().required().min(11).max(11).label("Phone"),
    // email: yup.string().required().email().label("email"),
    // country: yup.string().required().min(3).max(15).label("Country"),
    // city: yup.string().min(3).max(15).required().label("City"),
    
})

function EditDetails(props) {
    const [imageUri,setImageUri]=useState();
    
    return (
        
        
        <View style={styles.container}>
            <View style={{ position: 'absolute', top: 0, left: 0, }}>
                <Image source={require('../../assets/upperdesign.png')}></Image>
            </View>

            <View style={styles.logocontainer}>
                <Text style={{ paddingTop: 50,  fontWeight: 'bold', fontSize: 25 }}>Edit Details </Text>
            </View>
            <Formik
                //initialValues={{ firstName: ' ', lastName: ' ',phone:' ',email:' ',country:' ',city:' ' }}
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
                       <Text style={{fontSize:18,color:'grey'}}>Profile Picture</Text>


                        {/* <AppFormFill
                       //component that have basic functionlity of input fields
                       name='firstName'
                       icon="account-outline"
                       maxLength={20}
                       placeholder="First Name"
                       autoCapitilize='none'
                       autocorrect={false}
                       keyboardType={'default'}
                       /> */}

                        <AppFormFill
                       //component that have basic functionlity of input fields
                       name='fullName'
                       icon="account-outline"
                       placeholder="Full Name"
                       autoCapitilize='none'
                       autocorrect={false}
                       secureTextEntry={false}
                       keyboardType='default'
                       />
                        <AppFormFill
                            //component that have basic functionlity of input fields
                            name='phone'
                            icon="phone"
                            placeholder="Phone"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'numeric'}
                            />
                        <AppFormFill
                            //component that have basic functionlity of input fields
                            name='email'
                            icon="email-variant"
                     
                            placeholder="Email"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'email-address'}
                        />
                        {/* <AppFormFill
                            //component that have basic functionlity of input fields
                            name='country'
                            icon="earth"
                            placeholder="Country"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'default'}
                        /> */}
                        <AppFormFill
                            //component that have basic functionlity of input fields
                            name='city'
                            icon="city"                     
                            placeholder="City"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'default'}
                        />
                        <SubmitButton 
                        //component
                        title={'Save Changes'} />

                    </>
                )
                }
            </Formik>
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        //paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop:Platform.OS=== 'android' ? StatusBar.currentHeight:0,
        flex: 1,
        backgroundColor: '#FDF6F6',
        alignItems: 'center',
        position: 'relative',
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight:0
    },
    
    // img: {

    //     marginTop: 20,
    //     marginBottom: 20

    // },
    logocontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop:0,
        marginTop:0

    },
    
    inputcontainer: {
        flex: 1,
        alignItems: 'center'

    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        width: 329,
        marginVertical: 8,
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    }, btncontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 0

    },
})
export default EditDetails;