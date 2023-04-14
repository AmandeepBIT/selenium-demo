import React from "react";
import AuthRouting from "../router/AuthRouting";
import DashBoardRouting from "../router/DashboarRouting";
import { AuthContext } from "../reducer/context/AuthContext";
function Pages() {
  const [isLogged, setisLogged] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setisLogged(true);
      },
      signOut: () => {
        setisLogged(false);
      },
    };
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
      {(isLogged ? <DashBoardRouting /> : <AuthRouting />)}
    </AuthContext.Provider>
  );
}

export default Pages;
