import React, { createContext, useState, useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import NotificationList from './components/NotificationList/NotificationList';

export const Context = createContext(null);

const NotificationContext = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const timeoutList = useRef([]);

  const defaultDuration = 6000;

  const deleteNotification = useCallback(id => {
    timeoutList.current.filter(item => item.id === id);
    setNotifications(prevNotifications => prevNotifications.filter(item => item.id !== id));
  }, []);

  const createNotification = useCallback(
    notificationBase => {
      const id = +new Date();

      const newNotification = {
        ...notificationBase,
        id,
        duration: defaultDuration,
      };

      const timeout = setTimeout(() => deleteNotification(id), newNotification.duration);

      setNotifications(prevNotifications => [...prevNotifications, newNotification]);
      timeoutList.current.push({ id, timeout });
    },
    [deleteNotification]
  );

  useEffect(() => {
    return () => {
      timeoutList.current.forEach(({ timeout }) => clearTimeout(timeout));
    };
  }, []);

  return (
    <Context.Provider value={{ notifications, createNotification, deleteNotification }}>
      {children}
      <NotificationList />
    </Context.Provider>
  );
};

NotificationContext.propTypes = {
  children: PropTypes.any,
};

export default NotificationContext;
