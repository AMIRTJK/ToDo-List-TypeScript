import React, { useEffect, useState } from "react";

import "./App.css";
import { getData } from "./api/UserData";
import { UserType } from "./interfaces/UserType";
import Modal from "./component/Modal";

import { Button, TextField } from "@mui/material";
import UserList from "./component/UserList";

const App = () => {
  const [data, setData] = useState<UserType[]>([]);
  const [modal, setModal] = useState<boolean>(false);

  const handleOpen = (modal: boolean): void => {
    setModal(modal);
  };

  useEffect(() => {
    const handlePromise = async () => {
      const promise = await getData();
      setData(promise);
    };
    handlePromise();
  }, [data]);

  return (
    <>
      <main className="px-[60px]">
        <header className="flex items-center gap-5 justify-between py-[20px] mb-[100px]">
          <h1 className="text-[20px]">TODO LIST</h1>
          <TextField placeholder="Search..." sx={{ width: "70%" }} />
          <Button
            onClick={() => handleOpen(true)}
            variant="contained"
            sx={{ height: "56px", width: "20%" }}
          >
            Add
          </Button>
        </header>
        {/* Modal Add */}
        {modal && <Modal handleOpen={handleOpen} />}
        {/* TODO LIST */}
        <ul className="flex flex-col gap-7">
          {data.map((e) => {
            return <UserList key={e.id} item={e} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default App;
