import { useContext } from 'react';
import { Context } from './NotificationContext';

const useNotification = () => {
  const context = useContext(Context);

  if (!context) throw new Error('useNotification have to be used within NotificationProvider');

  return context;
};

export default useNotification;
