import { Box } from '@mui/material'
import React from 'react'
import Header from '../components/Global/Header'
import Field from '../api/models/field'
import { useParams} from 'react-router-dom'
import { useField } from 'formik'
import useFields from '../hooks/useFields'

const FieldManagement = () => {
    const { id } = useParams();
    const {getSingleField} = useFields();
    const {data:field,isError,isLoading,error} = getSingleField(id as string);

  return (
    
    <Box>
        <Header title={'Field Management'} subtitle={field?.name} /> 
    <div>FieldManagement</div>

    <div>FieldManagement</div>

    <div>FieldManagement</div>
    </Box>
    )
}

export default FieldManagement