import { useEffect } from "react";
import { MdClose } from "react-icons/md";
import { useToastContext } from "../../context/toast-context";
import './toast.css';

const Toast = () => {
  const {
    toastState: { toastList },
    toastDispatch,
  } = useToastContext();

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (toastList.length) {
        toastDispatch({
          type: "REMOVE-TOAST",
          payload: [...toastList].filter(
            (toast) => toastList[0].id !== toast.id
          ),
        });
      }
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [toastList, toastDispatch]);

//   className:  toast--success, toast--info, toast--error

  return (
    <div className="toast-container">
      {toastList.length > 0 &&
        toastList.map((currToast) => (
          <div key={currToast.id} className={`toast ${currToast.className}`}>
            <div className="toast--header">
              <MdClose
                className="toast--close"
                onClick={() =>
                  toastDispatch({
                    type: "ReMOVE-TOAST",
                    payload: [...toastList].filter(
                      (toast) => toast.id !== currToast.id
                    ),
                  })
                }
              />
            </div>
            <div className="toast--body">
              <p>{currToast.message}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export { Toast };
