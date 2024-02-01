import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {Bounce, ToastContainer} from "react-toastify";

function Providers({children}: {children: React.ReactNode}) {
  return (
    <BrowserRouter>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Provider store={store}>{children}</Provider>
      
    </BrowserRouter>
  );
}

export default Providers;
