import { useState } from "react";
import { toast } from "react-toastify";
import formBgImage from "../assets/Footer (1).png";
console.log(formBgImage)

const TryNowForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleTryNow = (e) => {
    e.preventDefault();
    toast("Thanks for supporting us.");
    setName("");
    setEmail("");
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="card w-full shrink-0 shadow-2xl  overflow-hidden rounded-tr-none rounded-bl-none rounded-4xl"
        style={{
          backgroundImage: `url("${formBgImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* overlay for readability */}
        <div className="">
          <form onSubmit={handleTryNow} className="card-body w-2/3 mx-auto text-white font-bold mt-5">
            <h1 className="text-primary text-xl text-center">Are you interested?</h1>
            <fieldset className="fieldset">
              {/* name */}
              <label className="label font-black">Your Name</label>
              <input
                type="text"
                name="name"
                className="border-2 p-1.5 rounded-md border-secondary"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              {/* email */}
              <label className="label font-black">Email</label>
              <input
                type="email"
                name="email"
                className="border-2 p-1.5 rounded-md border-secondary"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <button className="btn bg-primary-content hover:bg-secondary-content text-primary mt-4 rounded-xl border-none border-0 transition-colors duration-500 ">
                Try Now
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TryNowForm;
