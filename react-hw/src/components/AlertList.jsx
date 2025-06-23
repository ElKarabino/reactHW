import { Alert } from "./Alert";
import NotificationIcon  from "./icons/notification_icon";
import WarningIcon  from "./icons/warning_icon";
import InfoIcon  from "./icons/info_icon";
import ErrorIcon  from "./icons/error_icon";
import SuccessIcon  from "./icons/success_icon";

export const AlertList = () => {
    const alerts = [
    {id:1, text: "Loren Ipsum", type: "warning", icon: <WarningIcon /> },
    {id:2, text: "Loren Ipsum", type: "error", icon: <ErrorIcon /> },
    {id:3, text: "Loren Ipsum", type: "success", icon: <SuccessIcon /> },
    {id:4, text: "Loren Ipsum", type: "info", icon: <InfoIcon /> },
    {id:5, text: "Loren Ipsum", type: "notification", icon: <NotificationIcon /> },
  ];
  return (
    <div>
        {alerts.map(({ id, type, icon, text }) => (
        <Alert
          key={id}
          type={type}
          icon={icon}
          text={text}
        />
      ))}
    </div>
  )
}