import { useCallback } from 'react';
import get from 'lodash/get';
import useNotification from './useNotification';

import { messages } from './errorMessages';

const useErrorHandler = () => {
  const { createNotification } = useNotification();

  return useCallback(
    error => {
      const errorKeys = get(error, 'response.data.errors', ['unexpected']);

      errorKeys.forEach(errorKey => {
        const message = messages[errorKey] || messages.unexpected;

        createNotification({
          message: message,
        });
      });
    },
    [createNotification]
  );
};

export default useErrorHandler;
