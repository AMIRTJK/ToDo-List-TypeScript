export interface UserType {
  id: number;
  name: string;
  age: number | string;
  email: string;
  status: boolean;
}

export interface UserListProps {
  item: UserType;
}
