
import { getAuth } from "firebase/auth";
import { RouterProvider } from "react-router-dom";
import { AuthProvider, useFirebaseApp } from "reactfire";
import { router } from "./config/router";

const App = () => {
  const app = useFirebaseApp();
  const auth = getAuth(app);

  return (
    //aqui estamos activando un provedor que es el auth trayendole de firebase que lo activamos en firebase
    <AuthProvider sdk={auth}>
      <RouterProvider
        router={router}
      />
    </AuthProvider>

  );
};
export default App;