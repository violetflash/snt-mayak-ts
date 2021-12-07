import React, { useRef } from 'react';
import {AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent,
    AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button} from '@chakra-ui/react';
import {useTypedSelector} from "../redux";


export const ModalAlert = () => {
    const cancelRef = useRef(null);
    const {isOpened, alertData: {onConfirm, text, declineText, confirmText, onClose, description}} = useTypedSelector(state => state.modalAlert);

    const handleConfirm = () => {
        onConfirm();
        onClose();
    }

    return (
        <AlertDialog
            motionPreset="scale"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpened}
        >
            <AlertDialogOverlay />
            <AlertDialogContent>
                <AlertDialogHeader>{text}</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    {description}
                </AlertDialogBody>
                <AlertDialogFooter>
                    {declineText && <Button ref={cancelRef} onClick={onClose}>
                        {declineText}
                    </Button>}
                    <Button colorScheme="red" ml={3} onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};
