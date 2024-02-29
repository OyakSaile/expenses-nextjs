"use client";
import { DialogHTMLAttributes } from "react";
import { Modal as MuiModal } from "@mui/material";

export interface ModalProps extends DialogHTMLAttributes<HTMLDialogElement> {
  open: boolean;
  onClose: () => void;
  children?: any;
}

export const Modal = ({ onClose, open, children }: ModalProps) => {
  return (
    <MuiModal
      className="flex justify-center items-center"
      open={open}
      onClose={onClose}
    >
      {children}
    </MuiModal>
  );
};
