import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { updateBucketNameDb } from "../../features/bucketSlice";
import { deleteCard } from "../../features/cardSlice";

export default function ConfirmModal({ isOpen = false, setIsOpen, card }) {
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function handleUpdate() {
    dispatch(deleteCard({ id: card.id }));
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-whiteGD p-4 text-left align-middle shadow-xl transition-all grid gap-6">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-black"
                  >
                    Confirm Delete
                  </Dialog.Title>
                  <p className=" capitalize">{card?.name}</p>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-lg font-semibold"
                      onClick={handleUpdate}
                    >
                      Delete
                    </button>
                    <button
                      type="button"
                      className="px-4 py-2 outline-2 outline outline-accent text-black hover:text-white hover:bg-accent/50 rounded-lg font-semibold"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
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
