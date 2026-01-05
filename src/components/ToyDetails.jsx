import { FaArrowAltCircleLeft, FaStar } from "react-icons/fa";
import leftImage from "../assets/Rectangle 15 - Copy.png"
import { Link } from "react-router";
const ToyDetailsLayout = ({ toy, children }) => {
  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = toy || {};

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  const starFillCount = Math.round(Number(rating || 0));

  return (
    <div className="lg:mx-6 py-4 bg-primary-content/50">
      <div className="w-11/12 h-7/12 mx-auto p-4 py-8">
        {/* main layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* LEFT: big image panel */}
          <div className="card w-full shrink-0 shadow-2xl  overflow-hidden bg-secondary-content rounded-l-3xl flex items-center justify-center 
           hover:scale-105 transition-all duration-1000"
          style={{
                  backgroundImage: `url("${leftImage}")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
            >
        <div className=" bg-white/50 backdrop-blur-sm w-full h-full flex flex-col justify-center items-center">
        <Link to={"/"}
        className="btn btn-sm border-0 absolute top-7 left-7 text-primary bg-primary-content hover:bg-secondary rounded-full text-sm"><FaArrowAltCircleLeft></FaArrowAltCircleLeft>back</Link>
            <img
              src={pictureURL}
              alt={toyName}
              className="max-h-95 w-full object-contain drop-shadow scale-120 hover:scale-140 transition-all duration-300"
              loading="lazy"
            />
        </div>
          </div>

          {/* RIGHT: details + (TryNow slot) */}
          <div className="bg-base-100 rounded-r-3xl p-6 lg:p-8 border border-base-200 shadow-sm">
            {/* top badge + category */}
            <div className="flex items-center gap-2">
              <span className="badge badge-error text-white badge-sm">
                HOTSALE
              </span>
              <span className="text-xs text-base-content/60 uppercase tracking-wide">
                {subCategory}
              </span>
            </div>

            {/* title */}
            <h1 className="text-2xl md:text-3xl text-baloo mt-3 leading-tight">
              {toyName}
            </h1>

            {/* rating row */}
            <div className="flex items-center gap-3 mt-3">
              <div className="flex items-center gap-1">
                {stars.map((s) => (
                  <FaStar
                    key={s}
                    className={s <= starFillCount ? "text-amber-400" : "text-amber-200"}
                    size={16}
                  />
                ))}
              </div>
              <span className="text-sm text-base-content/60">
                {rating} rating
              </span>
            </div>

            {/* price + quantity */}
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <p className="text-2xl font-bold text-green-600">
                ${Number(price || 0).toFixed(2)}
              </p>
              <p className="text-sm text-base-content/60">
                Available:{" "}
                <span className="font-semibold">{availableQuantity}</span>
              </p>
            </div>

            {/* seller info */}
            <div className="mt-4 text-sm text-base-content/70 space-y-1">
              <p>
                Seller: <span className="font-semibold">{sellerName}</span>
              </p>
              <p>
                Email: <span className="font-semibold">{sellerEmail}</span>
              </p>
            </div>

            {/* description */}
            <div className="mt-5">
              <h3 className="font-medium mb-2 text-baloo">Description:</h3>
              <p className="text-base-content/70 leading-relaxed">
                {description}
              </p>
            </div>

            {/* divider */}
            <div className="divider my-7"></div>

            {/* TryNow Component slot */}
            {/* তুমি পরে এখানে <TryNowForm /> বসাবে */}
            <div className="">
              {children ? (
                children
              ) : (
                <p className="text-sm text-base-content/60">
                  ✅ Try Now form will be placed here.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetailsLayout;
