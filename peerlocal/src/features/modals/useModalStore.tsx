import { create } from "zustand";

export const APP_MODALS_ID = "app-modals";

interface ModalData {
  HelloWorldView1?: {
    name: string;
  };
  HelloWorldView2?: {
    name: string;
  };
}

export interface IModalStore {
  open: boolean;
  view?: "HelloWorldView1" | "HelloWorldView2";
  data?: ModalData;
  openModal: (props: { view: IModalStore["view"]; data?: ModalData }) => void;
  closeModal: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  open: false,
  view: undefined,
  data: undefined,
  openModal: (props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById(APP_MODALS_ID).checked = true;
    set({ open: true, view: props.view, data: props.data });
  },
  closeModal: () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById(APP_MODALS_ID).checked = false;
    set({ open: false, view: undefined, data: undefined });
  },
}));
