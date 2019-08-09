import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import RegistrationForm from './RegistrationForm.js';

describe('<RegistrationForm />', () => {
  it('renders without crashing', () => {
    render(<RegistrationForm />);
  })
  // it('displays username input', () => {
  //   const { getByTestId } = render(<RegistrationForm />);
  //   const username = getByTestId('username');
  //   expect(username).toBeVisible();
  // })
  // it('displays courses upon submit', () => {
  //   const { getByText } = render(<RegistrationForm />);
  //   const submitButton = getByText(/submit/i);
  //   fireEvent.click(submitButton);
  //   const registeredText = getByText(/main course/i)
  //   expect(registeredText).toBeInTheDocument();
  // })
})