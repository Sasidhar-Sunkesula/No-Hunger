import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div>
        <h1 className="font-extrabold text-red-700 text-9xl">404</h1>
      </div>
      <div >
        <h1 className="text-2xl mt-6 font-extrabold ">This is an amazing Error Component by React Router</h1>
      </div>
      <div>
        <h2 className="text-2xl m-6">{err.data}</h2>
      </div>
    </div>
  );
};
export default Error;
