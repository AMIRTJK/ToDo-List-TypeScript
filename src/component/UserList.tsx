import React from "react";
import { UserListProps, UserType } from "../interfaces/UserType";
import { deleteData } from "../api/UserData";
import { putData } from "../api/UserData";

import { Avatar, IconButton, Checkbox } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList: React.FC<UserListProps> = (props) => {
  const { id, name, age, email, status } = props.item;
  return (
    <li
      className={`${
        status ? "line-through text-[red]" : ""
      } flex items-center justify-between border-b-[1px] pb-[10px]`}
    >
      <div className="wrapper-user flex items-center gap-10">
        <Avatar />
        <p>{name}</p>
        <p>{age}</p>
        <p>{email}</p>
      </div>
      <div className="panel-control flex items-center gap-5">
        <IconButton>
          <EditIcon sx={{ color: "green" }} />
        </IconButton>
        <Checkbox
          checked={status}
          onChange={() => {
            const newObj: UserType = {
              id: id,
              name: name,
              age: age,
              email: email,
              status: !status,
            };
            putData(newObj, id);
          }}
        />
        <IconButton onClick={() => deleteData(id)}>
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </div>
    </li>
  );
};

export default UserList;
