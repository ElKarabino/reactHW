import { Alert } from "./Alert";
import FifthIcon  from "./icons/fifth_icon";
import  FirstIcon  from "./icons/first_icon";
import  FourthIcon  from "./icons/fourth_icon";
import  SecondIcon  from "./icons/second_icon";
import  ThirdIcon  from "./icons/third_icon";

export const AlertList = () => {
    const alerts = [
    {id:1, message: "Loren Ipsum", color: "yellow", icon: {FirstIcon} },
    {id:2, message: "Loren Ipsum", color: "red", icon: {SecondIcon} },
    {id:3, message: "Loren Ipsum", color: "green", icon: {ThirdIcon} },
    {id:4, message: "Loren Ipsum", color: "black", icon: {FourthIcon} },
    {id:5, message: "Loren Ipsum", color: "blue", icon: {FifthIcon} },
  ];
  return (
    <div>
        {alerts.map(({ id, color, icon, text }) => (
        <Alert
          key={id}
          color={color}
          icon={icon}
          text={text}
        />
      ))}
    </div>
  )
}