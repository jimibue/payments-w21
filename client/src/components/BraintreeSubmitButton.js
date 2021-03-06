import React from 'react';
import { Button, } from 'semantic-ui-react';

const BraintreeSubmitButton = ({onClick, isDisabled, text}) => {
  return (
    <Button
      primary
      onClick={onClick}
      disabled={isDisabled}
    >
      { text }
    </Button>
  )
}

export default BraintreeSubmitButton;
