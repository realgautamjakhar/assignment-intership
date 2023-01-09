import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { createCard, editCard } from "../../features/cardSlice";
import SelectComponent from "../SelectComponent";

export default function EditCardModal({
  isOpen = false,
  setIsOpen,
  card,
  buckets,
}) {
  const [name, setname] = useState(card.name);
  const [link, setlink] = useState(card.link);
  const [bucket, setbucket] = useState(
    buckets.find((bucket) => bucket.id == card.bucket)
  );
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function handleEdit() {
    dispatch(
      editCard({
        id: card.id,
        name,
        link,
        bucket: bucket.id,
      })
    );
    closeModal();
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full text-center max-w-md transform rounded-2xl bg-whiteGD grid gap-6 p-4 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-black"
                  >
                    Edit Card
                  </Dialog.Title>
                  <div className="grid">
                    <label htmlFor="name" className="text-lg mb-2 text-start">
                      Name
                    </label>
                    <input
                      className=" bg-transparent text-black text-lg focus:outline-none border-2 rounded-lg px-2 py-2"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Type name here"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 grid">
                    <label htmlFor="link" className="text-lg mb-2 text-start">
                      Link
                    </label>
                    <input
                      className=" bg-transparent text-black text-lg focus:outline-none border-2 rounded-lg px-2 py-2"
                      type="text"
                      name="link"
                      id="link"
                      value={link}
                      placeholder="Link Goes here"
                      onChange={(e) => setlink(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 grid">
                    <p className="text-lg mb-2 text-start">Bucket</p>

                    <SelectComponent
                      buckets={buckets}
                      selected={bucket}
                      setSelected={setbucket}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-lg font-semibold"
                      onClick={handleEdit}
                    >
                      Save Changes
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
