import React,{ useState } from "react"

export interface IUseModal{
    openModal: () => void;
    closeModal: () => void;
    modalOpen: boolean;
}

const useModal = ():IUseModal => {

    const [modalOpen,setModalOpen] = useState<boolean>(false)

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return{
        openModal,
        closeModal,
        modalOpen
    }
}

export default useModal