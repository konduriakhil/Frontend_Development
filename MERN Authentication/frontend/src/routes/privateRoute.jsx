import { useAuth } from "../context/auth";
import { useEffect, useEffectEvent, useState } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../pages/Spinner";

export default function PrivateRoute() {

      const [ok, setOkay] = useState(false)
      const { auth, setAuth } = useAuth()

      useEffect(() => {
            const authCheck = async () => {
                  const response = await axios.get("http://localhost:8080/product", {
                        headers: {
                              "Authorization": auth?.token
                        }
                  })

                  if (response.status === 200) {
                        setOkay(true)
                        console.log(response.data);
                  }
                  else {
                        setOkay(false)
                        console.log(response.data);

                  }

            }
            if (auth?.token) {
                  authCheck();
            }
      }, [auth?.token])

      return ok ? <Outlet /> : <Spinner></Spinner>

}