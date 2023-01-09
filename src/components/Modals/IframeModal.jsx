import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Iframe from "react-iframe";
export default function IframeModal({ isOpen, setIsOpen, card }) {
  function closeModal() {
    setIsOpen(false);
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
            <div className="fixed inset-0 bg-black bg-opacity-60" />
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
                <Dialog.Panel className="w-full text-center max-w-4xl transform overflow-hidden rounded-2xl bg-whiteGD pt-4 align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-gray-900"
                  >
                    {card?.name}
                  </Dialog.Title>
                  <div className="mt-4">
                    <Iframe
                      className=" w-full h-96"
                      src={`https://www.youtube.com/embed/${
                        card?.link.split("=")[1]
                      }`}
                      title={card?.name}
                    ></Iframe>
                  </div>

                  {/* <div className="mt-4">
                    <button
                      type="button"
                      className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-lg font-semibold"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
