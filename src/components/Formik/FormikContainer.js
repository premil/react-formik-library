import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

function FormikContainer() {

    const initialValues = {}
    const validationSchema = Yup.object({})
    const onSubmit = values => console.log("Form Dara =>", values)

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {formik => (
                <Form>
                    <submit type='submit'> Submit</submit>
                </Form>
            )}
        </Formik>
    )
}

export default FormikContainer
