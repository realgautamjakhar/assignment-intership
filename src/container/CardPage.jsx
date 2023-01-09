import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchCards } from "../features/cardSlice";
import BucketDetails from "../components/BucketDetails";
import CreateCard from "../components/CreateCard";
import IframeModal from "../components/Modals/IframeModal";
import { useState } from "react";
import Card from "../components/Card";
import EditCardModal from "../components/Modals/EditCardModal";
import ConfirmModal from "../components/Modals/ConfirmModal";
import { motion } from "framer-motion";
import { Staggercontainer, Staggeritem } from "../utils/animation";
const CardPage = () => {
  const { id } = useParams();
  const [isDeleting, setisDeleting] = useState(false);
  const [isEditOpen, setisEditOpen] = useState(false);
  const [isIframeOpen, setIframeOpen] = useState(false);
  const [selectedCard, setselectedCard] = useState();
  const buckets = useSelector((state) => state.buckets.value);
  const cards = useSelector((state) => state.cards.value);
  const loading = useSelector((state) => state.cards.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCards({ bucketid: id }));
  }, [id]);
  //Handle Preview Iframe Modal
  function handleCardModal(card) {
    setselectedCard(card);
    setIframeOpen(true);
  }

  function handleCardEdit(card) {
    setselectedCard(card);
    setisEditOpen(true);
  }

  function handleCardDelete(card) {
    setselectedCard(card);
    setisDeleting(true);
  }

  return (
    <div className=" grid gap-4 px-4 pt-4">
      {/* Top Bucket Details  */}
      <BucketDetails id={id} />

      {/* Open modal for video preview */}
      {isIframeOpen && (
        <IframeModal
          isOpen={isIframeOpen}
          setIsOpen={setIframeOpen}
          card={selectedCard}
        />
      )}

      {/* Edit Modal  */}
      {isEditOpen && (
        <EditCardModal
          isOpen={isEditOpen}
          setIsOpen={setisEditOpen}
          card={selectedCard}
          buckets={buckets}
        />
      )}

      {isDeleting && (
        <ConfirmModal
          isOpen={isDeleting}
          setIsOpen={setisDeleting}
          card={selectedCard}
        />
      )}

      {!loading ? (
        <>
          {/* Card List  */}
          <motion.div
            variants={Staggercontainer}
            initial="hidden"
            animate="show"
            className="grid gap-6 w-full  grid-cols-[repeat(auto-fit,minmax(auto,450px))] justify-center"
          >
            {cards?.map((card, index) => {
              return (
                <Card
                  card={card}
                  key={index}
                  iframe={() => handleCardModal(card)}
                  editCard={() => handleCardEdit(card)}
                  deleteCard={() => handleCardDelete(card)}
                />
              );
            })}
          </motion.div>
        </>
      ) : (
        <div className="grid place-content-center">Loading</div>
      )}

      {/* Create Card Button  */}
      <div className="grid justify-center">
        <CreateCard id={id} />
      </div>
    </div>
  );
};

export default CardPage;
