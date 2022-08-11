import React from 'react'
import ErrorMessage from './ErrorMessage'
import ImageInputList1 from './ImageInputList1'
import { useFormikContext } from 'formik'
export default function FormImagePicker({name}) {
  const {errors,setFieldValue,touched,values}=useFormikContext();
  const imageUris=values[name];
  const handleAdd= uri =>
{
setFieldValue(name,[...imageUris,uri]);
}
const handleRemove = uri =>
{
  setFieldValue(name,imageUris.filter(imageUri=>imageUri !== uri));
}
    return (
        <>
            <ImageInputList1 
            imageUris={imageUris}
            onAddImage={handleAdd}
            onRemoveImage={handleRemove}
            />
            <ErrorMessage error={errors[name]} visible={touched[name]}/>  

        </>
    )
}

const styles = StyleSheet.create({})