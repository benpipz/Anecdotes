import { UseNotficationState } from "./NotificationContext";

const Notification = () => {
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    marginBottom: 5,
  };

  const notifaction = UseNotficationState();

  return <div style={style}>{notifaction}</div>;
};

export default Notification;
