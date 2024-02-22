import React, { useState, SyntheticEvent, ChangeEvent } from "react";

import { postUser } from "../api/UserData";

import { Button, TextField } from "@mui/material";
import { ModalProps } from "../interfaces/UserType";

const Modal = (props: ModalProps) => {
  const { handleModal } = props;

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [email, setEmail] = useState<string>("");

  const handlePropagation = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const handlePostValue = (
    set: any,
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    set(event.target.value);
  };

  const handleSubmit = (event: SyntheticEvent) => {
    const newObj = {
      id: Date.now(),
      name: name,
      age: age,
      email: email,
      status: false,
    };
    postUser(newObj);
    event.preventDefault();
    handleModal(false);
  };

  return (
    <div
      onClick={() => handleModal(false)}
      className="modal w-full h-full z-10 fixed top-0 left-0 bg-[#00000040]"
    >
      <div
        onClick={(event) => handlePropagation(event)}
        className="content w-[90%] md:w-[30%] bg-[#fff] rounded-md px-[30px] py-[20px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <h1 className="text-center mb-5 text-xl">Список задач</h1>
        <form
          onSubmit={(event) => handleSubmit(event)}
          className="flex flex-col gap-5"
        >
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handlePostValue(setName, event)
            }
            value={name}
            label="Введите имя..."
          />
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handlePostValue(setAge, event)
            }
            value={age}
            label="Введите возраст..."
          />
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handlePostValue(setEmail, event)
            }
            value={email}
            label="Введите e-mail адресс..."
          />
          <Button type="submit" variant="contained">
            Добавить задачу
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
