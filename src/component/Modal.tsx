import React, { ChangeEvent, useState } from "react";
import { UserType } from "../interfaces/UserType";
import { postData } from "../api/UserData";

import { Button, TextField } from "@mui/material";

const Modal = (props) => {
  const { handleOpen } = props;

  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number | string>("");
  const [email, setEmail] = useState<string>("");

  const handleValue = (set, event) => {
    set(event.target.value);
  };

  const handleClick = (event: React.SyntheticEvent): void => {
    event.stopPropagation();
  };

  return (
    <div
      onClick={() => handleOpen(false)}
      className="modal fixed h-full w-full top-0 left-0 bg-[#00000040] z-10"
    >
      <div
        onClick={handleClick}
        className="content bg-white w-[30%] rounded-md p-[20px] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <h1 className="mb-[15px] text-[20px] text-center">Список задач</h1>
        <form
          onSubmit={(event) => {
            const newObj: UserType = {
              id: Date.now(),
              name: name,
              age: age,
              email: email,
              status: false,
            };
            postData(newObj);
            event.preventDefault();
            handleOpen(false);
          }}
          className="flex flex-col gap-5"
        >
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleValue(setName, event)
            }
            value={name}
            label="Введите имя"
          />
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleValue(setAge, event)
            }
            value={age}
            label="Введите возраст"
          />
          <TextField
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              handleValue(setEmail, event)
            }
            value={email}
            label="Введите e-mail адресс"
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
