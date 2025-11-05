import React, { useState } from 'react';

interface IModalProps {
    isOpen: boolean;
    title: string;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}

const Modal: React.FC<IModalProps> = ({ isOpen, title, message, onConfirm, onCancel }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-lg">
                <h2 className="text-2xl mb-4">{title}</h2>
                <p className="mb-8">{message}</p>
                <button className="mr-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={onConfirm}>Sim</button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={onCancel}>Não</button>
            </div>
        </div>
    );
};

export default Modal;