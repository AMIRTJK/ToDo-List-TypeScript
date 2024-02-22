export interface User {
  id: number;
  name: string;
  age: number | string;
  email: number;
  status: boolean;
}

export interface UserProps {
  item: User;
}

export interface ModalProps {
  handleModal: (stateModal: boolean) => void;
}
