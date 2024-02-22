import React from "react";

import { UserProps } from "../interfaces/UserType";
import { deleteUser, putUser } from "../api/UserData";

import { Avatar, Checkbox, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const UserList = (props: UserProps) => {
  const { id, name, age, email, status } = props.item;

  const handleChange = () => {
    const newObj = {
      id: id,
      name: name,
      age: age,
      email: email,
      status: !status,
    };
    putUser(newObj, id);
  };

  return (
    <li
      className={`${
        status === true && id === 1
          ? "bg-[#6e93c830] hover:bg-[#6e93c848] rounded-t-md"
          : status === true && id !== 1
          ? "bg-[#6e93c830] hover:bg-[#6e93c848] rounded-b-md"
          : ""
      } flex flex-wrap justify-center md:justify-between items-center gap-5 border-b-[1px] p-[15px] cursor-pointer hover:bg-[#6e93c810] transition-all duration-150`}
    >
      <div className="flex flex-wrap justify-center md:justify-start items-center gap-10">
        <Avatar />
        <p>{name}</p>
        <p>{age}</p>
        <p>{email}</p>
      </div>
      <div className="panel-control flex items-center gap-5">
        <IconButton>
          <EditIcon sx={{ color: "green" }} />
        </IconButton>
        <Checkbox onChange={handleChange} checked={status} />
        <IconButton onClick={() => deleteUser(id)}>
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </div>
    </li>
  );
};

export default UserList;
