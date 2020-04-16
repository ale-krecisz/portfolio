import React from 'react';
import PropTypes from 'prop-types';

import { Container, Button } from './styled';
import useNotification from '../../useNotification';

const NotificationItem = ({ notification }) => {
  const { deleteNotification } = useNotification();
  const { id, message, type } = notification;

  return (
    <Container type={type}>
      {message}
      <Button onClick={() => deleteNotification(id)} aria-label="discard notification" />
    </Container>
  );
};

NotificationItem.propTypes = {
  notification: PropTypes.node,
};

export default NotificationItem;
