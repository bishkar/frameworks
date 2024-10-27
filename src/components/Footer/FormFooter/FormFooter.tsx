import { Formik, Field, Form, ErrorMessage } from 'formik';
import cn from 'classnames';

import { validationSchema } from './schemas';
import Submit from '../../Buttons/Submit/Submit';


function FormFooter() {
  return (
    <div className="grid grid-rows-2 sm:order-none order-last">
      <div className="text-lg h-1/6">Join the Club & Get Updates on Special Events</div>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form className='flex flex-col gap-4'>
            <label htmlFor="email" className='text-xs'>Email*</label> 
            <Field
              type="email"
              name="email"
              className={cn('border-b border-t-0 border-y-0 bg-transparent focus:outline-none', {
                'border-red-500': errors.email && touched.email,
              })}
            />
            <ErrorMessage name="email" component="div" className="text-red-500 text-xs" />
            
            <div className='mr-auto'><Submit text="Subscribe"/></div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormFooter;