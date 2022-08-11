import React from 'react';
import { useState } from 'react';
import { View,  Image, Text } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import AppFormFill from '../../component/AppFormFill';
import SubmitButton from '../../component/SubmitButton';

//for validation we use yup
const validationSchema = yup.object().shape({
    title: yup.string().min(3).max(15).required().label("Name"),
    subtitle: yup.string().min(8).required().label("subtitle"),
    number: yup.string().min(11,).max(11).required().label("Number"),
    requirements: yup.string().min(2).max(50).required().label("Requirements"),
    money: yup.string().min(3).max(6).required().label("Money"),
})



function LoginScreen(props) {
    const [imageUri, setImageUri] = useState();

    return (
        <View style={[styles.screen, styles.container]}>
            <View style={{ position: 'absolute', top: 0, left: 0, flex: 1, marginVertical: 20 }}>
                <Image source={require('../../assets/upperdesign.png')}></Image>
            </View>

            <View style={styles.logocontainer}>
                <Text style={{ paddingTop: 150, paddingBottom: 15, fontWeight: 'bold', fontSize: 30 }}>Charity Pool posting</Text>
            </View>
            <Formik
                initialValues={{ title: ' ', subtitle: ' ', number: ' ', requirements: ' ', money: ' ' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {() => (
                    <>

                        <AppFormFill
                            //component that we made it already have basic functionality 
                            //that is used for all input parameters
                            name='title'
                            maxLength={20}
                            placeholder="Name"
                            autoCapitilize='none'
                            autocorrect={false}
                            keyboardType={'default'}
                        />

                        <AppFormFill
                            //component that we made it already have basic functionality 
                            //that is used for all input parameters
                            name='subtitle'
                            placeholder="detail"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType='default'
                        />
                        <AppFormFill
                            //component that we made it already have basic functionality 
                            //that is used for all input parameters
                            name='number'

                            placeholder="Phone Number"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'numeric'}
                        />
                        <AppFormFill
                            //component that we made it already have basic functionality 
                            //that is used for all input parameters
                            name='requirements'
                            placeholder="Requirements"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'default'}
                        />
                        <AppFormFill
                            //component that we made it already have basic functionality 
                            //that is used for all input parameters
                            name='money'
                            placeholder="money"
                            autoCapitilize='none'
                            autocorrect={false}
                            secureTextEntry={false}
                            keyboardType={'numeric'}
                        />

                        <SubmitButton title={'Post'} />

                    </>
                )

                }
            </Formik>
        </View>
    );
}

export default LoginScreen;