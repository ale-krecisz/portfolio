import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Notification, Button } from './styled';
import useNotification from '../../useNotification';

const NotificationItem = ({ notification }) => {
  const [isClosed, setIsClosed] = useState(false);
  const { deleteNotification } = useNotification();
  const { id, message, type } = notification;

  const handleDelete = () => {
    setIsClosed(true);
    setTimeout(() => {
      deleteNotification(id);
    }, 500);
  };

  return (
    <Notification type={type} isClosed={isClosed}>
      {message}
      <Button onClick={handleDelete} aria-label="discard notification" />
    </Notification>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.node,
};

export default NotificationItem;
