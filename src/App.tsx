import React, { ChangeEvent, useEffect, useState } from "react";

import "./App.css";
import { User } from "./interfaces/UserType";
import Modal from "./component/Modal";

import { Button, TextField } from "@mui/material";
import UserList from "./component/UserList";
import { getUser } from "./api/UserData";

const App = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const [modal, setModal] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");

  const handleModal = (stateModal: boolean): void => {
    setModal(stateModal);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    const handlePromise = async () => {
      const promise = await getUser(search);
      setUserData(promise);
    };
    handlePromise();
  }, [userData, search]);

  return (
    <>
      <div className="px-[60px]">
        <header className="py-[30px] pb-[100px]">
          <ul className="flex justify-between items-center gap-10">
            <li className="w-[10%]">
              <a href="" className="text-[20px]">
                TODO LIST
              </a>
            </li>
            <li className="w-full">
              <TextField
                value={search}
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  handleChange(event)
                }
                fullWidth
                placeholder="Search..."
              />
            </li>
            <li>
              <Button
                onClick={() => handleModal(true)}
                variant="contained"
                sx={{ height: "56px" }}
              >
                Добавить
              </Button>
            </li>
          </ul>
          {modal && <Modal handleModal={handleModal} />}
        </header>
        <main>
          <section>
            <ul className="flex flex-col">
              {userData.map((e) => {
                return <UserList item={e} key={e.id} />;
              })}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
