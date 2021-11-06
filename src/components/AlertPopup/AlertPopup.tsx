import React, { useRef } from 'react';
import {AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent,
    AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button} from '@chakra-ui/react';

type propsType = {
    text: string,
    desc?: string,
    confirmText?: string,
    declineText?: string,
    isOpen: boolean,
    onClose: React.MouseEventHandler<Element, MouseEvent>
    confirmFunc: Function
}

export const AlertPopup = (
    { text, isOpen, onClose, confirmFunc, desc, declineText = 'Нет', confirmText = 'Да' } : propsType
) => {
    const cancelRef = useRef(null);

    const handleConfirm = () => {
        confirmFunc();
        onClose();
    }

    return (
        <AlertDialog
            motionPreset="scale"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            // isCentered
        >
            <AlertDialogOverlay />

            <AlertDialogContent>
                <AlertDialogHeader>{text}</AlertDialogHeader>
                <AlertDialogCloseButton />
                <AlertDialogBody>
                    {desc}
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                        {declineText}
                    </Button>
                    <Button colorScheme="red" ml={3} onClick={handleConfirm}>
                        {confirmText}
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
};