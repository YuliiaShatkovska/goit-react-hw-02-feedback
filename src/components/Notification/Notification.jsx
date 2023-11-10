import css from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={css.notification_text}>{message}</p>;
};

export default Notification;
