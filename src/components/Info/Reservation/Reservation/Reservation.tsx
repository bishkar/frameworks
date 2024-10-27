import './Reservation.css';
import { Formik, Field, Form } from 'formik';
import { ReservationProps } from './Reservation.props';
import { guestOptions, timeOptions } from '../helper';
import ReserveItem from '../ReserveItem/ReserveItem';
import Submit from '../../../Buttons/Submit/Submit';
import { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Reservation = forwardRef<HTMLDivElement, ReservationProps>(({ children }, ref) => {
  return (
    <div className='my-10' ref={ref}>
      <div className='flex justify-center'>
        {children}
      </div>
      <Formik
        initialValues={{
          numberOfPeople: 0,
          date: new Date(),
          time: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ setFieldValue, values }) => (
          <Form className='grid sm:grid-cols-5 grid-cols-1 gap-5 px-9'>
            <div className='sm:col-start-2'>
              <label htmlFor="numberOfPeople" className='block'>Party size</label>
              <Field as="select" name="numberOfPeople" id="numberOfPeople" className='option-border'>
                <ReserveItem data={guestOptions} /> 
              </Field>
            </div>

            <div className='grid'>
              <label htmlFor="date" className="block">Date</label>
              <DatePicker
                selected={values.date}
                onChange={(date: Date | null) => {
                  if (date) {
                    setFieldValue('date', date);
                  }
                }}
                dateFormat="dd/MM/yyyy"
                className="option-border w-full"
              />

            </div>

            
            <div>
              <label htmlFor="time" className='block'>Time</label>
              <Field as="select" name="time" id="time" className='option-border'>
                <ReserveItem data={timeOptions} /> 
              </Field>
            </div>

            <div className='mt-auto'><Submit text="Reserve a Table"/></div>
            
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default Reservation;
