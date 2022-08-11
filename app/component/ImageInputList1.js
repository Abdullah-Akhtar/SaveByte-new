import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import ImageInput1 from './ImageInput1';
export default function ImageInputList1({ imageUris = [], onRemoveImage, onAddImage }) {
   const scrollView=useRef();
   const handleAdd=uri=>{
    setImageUris([...imageUris,uri])
     }
     const handleRemove=uri=>{
    setImageUris(imageUris.filter(imageUri=>imageUri!==uri))
     }

    return (
        <View>
        <ScrollView ref={scrollView} horizontal onContentSizeChange={() =>scrollView.current.scrollToEnd()} >
        <View style={styles.container}>
            {imageUris.map((uri) => (
                <View key={uri} style={styles.image}>
                    <ImageInput1
                        imageUri={uri}

                        onChangeImage={() => onRemoveImage(uri)}
                    />
                </View>
            ))}
            <ImageInput1 onChangeImage={uri => onAddImage(uri)} />
        </View>
        </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    image: {
        marginRight: 10
    }
})


//when we have to access this
    // <ImageInputList1 
    //  imageUris={imageUris}
    // onAddImage={handleAdd}
    // onRemoveImage={handleRemove}
    //  />