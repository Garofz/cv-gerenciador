import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../redux/features/generalData/generalDataSelectors";
import { useAsyncDispatch } from "../../../redux/store";
import {
    logIn,
    setLoaded,
    setLoading,
} from "../../../redux/features/generalData/generalDataSlice";
import { postLogin } from "../../../redux/features/generalData/generalDataThunk";

export interface IUseLogin {
    email: string;
    senha: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setSenha: React.Dispatch<React.SetStateAction<string>>;
    submitForm: () => boolean;
    loading: boolean;
    toast: boolean;
    toastMessage: string;
    setToast: React.Dispatch<React.SetStateAction<boolean>>;
}

const UseLogin = () => {
    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");
    const [toast, setToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState<string>("");
    const loading = useSelector(selectLoading);
    const dispatch = useAsyncDispatch();

    const submitForm = async (): Promise<boolean> => {
        try {
            const response = await dispatch(postLogin({ email, senha }))
                .unwrap()
                .then((res) => res)
                .catch((err) => console.log(err));

            console.log(response);

            if (response && response.error == null) {
                await dispatch(logIn());
                return true;
            }

            setToastMessage(response.controle.message);
            setToast(true);

            return false;
        } catch (err) {
            return false;
        }
    };

    return {
        email,
        senha,
        setEmail,
        setSenha,
        submitForm,
        loading,
        toast,
        toastMessage,
        setToast,
    };
};

export default UseLogin;
