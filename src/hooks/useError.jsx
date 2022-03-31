import { useState } from 'react';

export default function useError() {
  const [myError, setMyError] = useState({
    message: '',
    success: false,
    successMessage: ''
  });

  const handleError = (message = '1', condition = false) => {
    setMyError({
      message,
      success: condition,
      successMessage: message
    });
  };
  return {
    handleError
  };
}
