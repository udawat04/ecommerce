import React, { useState } from 'react'
import {ErrorMessage, Field, Form, Formik} from 'formik'
import Yup from 'yup'

const Log = () => {

    const [formSubmitted,setFormSubmitted] =useState(false);

    const intialValues = {
        name:"",
        email:"",
        password:"",
    }
    const validationSchema = Yup.Object({
        name:Yup.string()
        .required('Name is required')
    })
  return (
    <div>
<h1>my form</h1>
 <Formik initialValues={intialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
 >
    <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name"/>
        <ErrorMessage name='name' component="span"/>
    </Form>

 </Formik>

    </div>
  )
}

export default Log