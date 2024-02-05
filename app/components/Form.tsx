"use client";
import {useRouter} from "next/navigation";
import {useRef, useState} from "react";
import createNewRoom from "../lib/createNewRoom";

const Form = () => {
  const router = useRouter();
  const modal = useRef<HTMLDialogElement | null>(null);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name && name.length > 3) {
      const response = await createNewRoom(name);
      console.log(response);
      if (response?.data?.name) {
        router.push(`/room/${response.data.name}`);
      }
    }
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length < 4) {
      setMessage("Please input a valid name for the room. (min 4 characters)");
      return;
    }
    setMessage("nice one!");
    setName(e.target.value);
  };
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => modal.current && modal.current.showModal()}
      >
        Create a new Room
      </button>
      <dialog id="my_modal_1" ref={modal} className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Give your room a name</h3>
          <p className="py-4">
            If the name is unique, well & good else we will append some random
            numbers to the name, so good luck.
          </p>
          <div className="modal-action">
            <form
              className="w-[90%] m-auto flex gap-2 justify-between"
              method="dialog"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Type a name for your chat room"
                className="input input-bordered input-primary w-full max-w-xs"
                onChange={handleInput}
              />
              <button className="btn btn-primary" type="submit">
                Create
              </button>
            </form>
          </div>
          {message && (
            <p
              className={`my-4 ${
                message.length < 12 ? "text-primary" : "text-[#ff3939]"
              }`}
            >
              {message}
            </p>
          )}
        </div>
      </dialog>
    </>
  );
};

export default Form;
