import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { createCard } from "../../features/cardSlice";

export default function CreateCardModal({ isOpen = false, setIsOpen, id }) {
  const [name, setname] = useState();
  const [link, setlink] = useState();
  const [bucket, setbucket] = useState();
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  function handleCreateBucket() {
    dispatch(
      createCard({
        id: new Date().getTime(),
        name: name,
        link: link,
        bucket: id,
        createdAt: new Date(),
      })
    );
    closeModal();
    toast.success("Card Created Successfully");
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
                <Dialog.Panel className="w-full text-center max-w-md transform overflow-hidden rounded-2xl bg-whiteGD p-6 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    Create Card
                  </Dialog.Title>
                  <div className="mt-2 grid">
                    <label htmlFor="name" className="text-lg mb-4">
                      Name of the card
                    </label>
                    <input
                      className=" bg-transparent text-black text-lg focus:outline-none border-2 rounded-lg px-2 py-2"
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Type name here"
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 grid">
                    <label htmlFor="name" className="text-lg mb-4">
                      Link
                    </label>
                    <input
                      className=" bg-transparent text-black text-lg focus:outline-none border-2 rounded-lg px-2 py-2"
                      type="text"
                      name="link"
                      id="link"
                      placeholder="Link Goes here"
                      onChange={(e) => setlink(e.target.value)}
                    />
                    <p className=" text-start text-xs">
                      Please enter iframe enable links only
                    </p>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-lg font-semibold"
                      onClick={handleCreateBucket}
                    >
                      Create
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
