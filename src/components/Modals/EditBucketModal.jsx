import { Dialog, Transition } from "@headlessui/react";
import { useEffect } from "react";
import { Fragment, useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteBucket, updateBucketNameDb } from "../../features/bucketSlice";

export default function EditBucketModal({ isOpen, setIsOpen, bucket }) {
  const navigate = useNavigate(); // To navigate user to the home page on delete
  const [name, setname] = useState("");
  const dispatch = useDispatch();

  function closeModal() {
    setIsOpen(false);
  }

  //Update bucket (for now only name is present)
  function handleUpdate() {
    dispatch(updateBucketNameDb({ bucketid: bucket.id, name }));
    closeModal();
    toast.success("Bucket Updated Successfully");
  }

  //Handle bucket delete on click and navigate to the home page
  function handleDelete() {
    dispatch(deleteBucket({ id: bucket.id }));
    closeModal();
    navigate("/");
    toast.success("Bucket Deleted Successfully");
  }

  // handle input and update on save
  useEffect(() => {
    setname(bucket?.name);
  }, [bucket]);
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
                <Dialog.Panel className="w-full grid gap-6 max-w-md transform overflow-hidden rounded-2xl bg-whiteGD p-4 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-medium leading-6 text-black flex items-center justify-between"
                  >
                    Edit Bucket
                    <button onClick={handleDelete} title="Delete Bucket">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </Dialog.Title>
                  <div className=" grid">
                    <label htmlFor="name" className="text-lg text-black">
                      Name of the Bucket
                    </label>{" "}
                    <input
                      className=" bg-transparent text-black text-lg focus:outline-none border-2 rounded-lg px-2 py-2"
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                    />
                  </div>

                  <button
                    type="button"
                    className="px-4 py-2 bg-accent text-white hover:bg-accent/80 rounded-lg font-semibold"
                    onClick={handleUpdate}
                  >
                    Save
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
