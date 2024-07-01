"use client";
import { Suspense, useEffect } from "react";
import Auth from "./(Auth)/Auth";
import Guest from "./(Guest)/Guest";
import Loading from "./loading";
import { useDispatch, useSelector } from "react-redux";
import { CheckLoginLocal } from "@/Toolkit/Slices/UserSlice";

function App() {
  const Dispatch = useDispatch();
  const { IsLogin } = useSelector((state) => state.User);

  useEffect(() => {
    Dispatch(CheckLoginLocal());
    // eslint-disable-next-line
  }, [IsLogin]);

  return (
    <Suspense fallback={<Loading />}>{IsLogin ? <Auth /> : <Guest />}</Suspense>
  );
}
export default App;
