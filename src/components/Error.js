import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="flex items-center justify-center w-[100%] h-screen overflow-x-hidden bg-slate-200 font-bold text-xl">
      <h1>something went wrong</h1>
      {/* <h2>{error.error.message}</h2>
      <h3>{error.status} : {error.statusText}</h3> */}
    </div>
  );
};

export default Error;
