const Contact = () => {
  return (
    <div className="w-2/5 shadow-xl rounded-xl p-4 mx-auto mt-10 border-2">
      <div className="w-full mx-auto text-center my-10 text-xl font-bold">
        <h1>Contact Us</h1>
      </div>
      <div className="my-4 w-2/3 mx-auto flex justify-evenly items-center">
        <div>
          <label htmlFor="name" className="text-lg font-medium">
            Name:
          </label>
        </div>
        <div>
          <input
            type="text"
            className="m-4 px-4 py-2 border text-lg border-red-500 rounded-lg"
            id="name"
            placeholder="Enter your name"
          ></input>
        </div>
      </div>
      <div className="my-4 w-2/3 mx-auto flex justify-evenly items-center">
        <div>
          <label htmlFor="message" className="text-lg font-medium">
            Message:
          </label>
        </div>
        <div>
          <input
            type="text"
            id="message"
            className="text-lg m-4 px-4 py-2 border border-red-500 rounded-lg"
            placeholder="Enter your message"
          ></input>
        </div>
      </div>
      <div className="w-full mx-auto text-center mt-7">
        <button className="border text-center font-bold border-red-700 py-2 px-4 rounded-lg bg-red-500 text-white">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Contact;
