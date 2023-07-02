import React, { createContext, useState, useEffect, useRef } from "react";
import InactiveScreen from "./InactiveScreen";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/features/generalData/generalDataSlice";
import IdleTimer, { IdleTimerProvider } from "react-idle-timer";
const MouseActivityContext = createContext({
    resetTimer: () => {},
});

export interface IProps {
    children?: JSX.Element;
}
const MouseActivityProvider = ({ children }: IProps) => {
    const [isInactive, setIsInactive] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isInactive) {
            const timeout = setTimeout(() => {
                console.log("desloga");
                logout();
            }, 50000);
            return () => clearTimeout(timeout);
        }
    }, [isInactive]);

    const logout = async () => {
        await dispatch(logOut());
    };
    const onIdle = () => {
        setIsInactive(true);
    };
    const onPresenceChange = () => {
        setIsInactive(false);
    };
    return (
        <div style={{ width: "100%", height: "100%" }}>
            {children}
            <IdleTimerProvider
                timeout={1000 * 10 * 3}
                onIdle={onIdle}
                onActive={onPresenceChange}
            ></IdleTimerProvider>
            {isInactive && <InactiveScreen />}
        </div>
    );
};

export { MouseActivityProvider, MouseActivityContext };
