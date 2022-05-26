import React, { Fragment } from "react";
import PropTypes from "prop-types";

import { Dialog, Transition } from "@headlessui/react";

export default function Modal({
  children,
  isOpen,
  handleModalClose,
  ModalTitle,
  ModalContentClass,
  ModalClass
}) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleModalClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="hidden"
            enterTo="block"
            leave="ease-in duration-200"
            leaveFrom="block"
            leaveTo="hidden"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="hidden scale-95"
            enterTo="block scale-100"
            leave="ease-in duration-200"
            leaveFrom="block scale-100"
            leaveTo="hidden scale-95"
          >
            <div className={`inline-block w-full max-w-2xl p-6 my-8 text-left align-middle transition-all transform shadow-xl rounded-2xl ${ModalClass}`}>
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900"
              >
                {ModalTitle}
              </Dialog.Title>
              <div className={`mt-2 ${ModalContentClass}`}>{children}</div>
            </div>
          </Transition.Child>

        </div>

      </Dialog>
    </Transition>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  ModalTitle: PropTypes.string,
  ModalContentClass: PropTypes.string,
  ModalClass: PropTypes.string,
  children: PropTypes.any,
  handleModalClose: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  isOpen: false,
};
