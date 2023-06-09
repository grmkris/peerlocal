import { APP_MODALS_ID, useModalStore } from "./useModalStore";

export const AppModals = () => {
  return (
    <>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={APP_MODALS_ID} className="modal-toggle" />
      <label
        htmlFor={APP_MODALS_ID}
        className="modal modal-bottom cursor-pointer sm:modal-middle"
      >
        <label className="modal-box relative" htmlFor="">
          <ModalViews />
        </label>
      </label>
    </>
  );
};

const ModalViews = () => {
  const view = useModalStore((state) => state.view);
  switch (view) {
    case "HelloWorldView1":
      return <HelloWorldView1 />;
    case "HelloWorldView2":
      return <HelloWorldView2 />;
    default:
      return <>Hello</>;
  }
};

const HelloWorldView1 = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));
  console.log("HelloWorldModal1", data);
  return (
    <>
      <h3 className="text-lg font-bold">
        Congratulations random Internet user! {data?.HelloWorldView1?.name}
      </h3>
      <p className="py-4">
        You are selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
      <div className="modal-action">
        <button className="btn" onClick={() => close()}>
          Close
        </button>
      </div>
    </>
  );
};

const HelloWorldView2 = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));
  return (
    <>
      <h3 className="text-lg font-bold">
        Congratulations random Internet user! {data?.HelloWorldView2?.name}
      </h3>
      <p className="py-4">
        You are selected for a chance to get one year of subscription to use
        Wikipedia for free!
      </p>
      <div className="modal-action">
        <button className="btn" onClick={() => close()}>
          Close
        </button>
      </div>
    </>
  );
};
