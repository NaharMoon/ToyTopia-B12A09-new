import { FaStar, FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router";

const ToyCard = ({ toy }) => {
    const {
        toyName,
        price,
        rating,
        availableQuantity,
        pictureURL,
    } = toy;

    const fullStars = Math.floor(rating); // 4.7 -> 4
    const stars = Array.from({ length: 5 }, (_, i) => i < fullStars);

    return (
        <div className="card bg-base-100 border border-base-200 rounded-2xl hover:shadow-xl transition-all duration-500 hover:scale-105">
            {/* image area */}
            <figure className="relative p-4">
                {/* <span className="badge badge-error badge-sm text-white absolute left-4 top-4">
                    SALE
                </span> */}

                {/* right top icons */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                    <button className="btn btn-ghost btn-sm btn-circle border border-base-200">
                        <FaRegHeart className="text-base-content/70" />
                    </button>
                    <button className="btn btn-ghost btn-sm btn-circle border border-base-200">
                        <FiShoppingCart className="text-base-content/70" />
                    </button>
                </div>

                <div className="w-full h-40 flex items-center justify-center">
                    <img
                        src={pictureURL}
                        alt={toyName}
                        className="h-full object-contain scale-110 hover:scale-130 transition-all duration-300"
                        loading="lazy"
                    />
                </div>
            </figure>

            {/* content */}
            <div className="card-body pt-0">
                <h3 className="font-semibold text-base md:text-[15px] leading-snug line-clamp-2">
                    {toyName}
                </h3>

                {/* price */}
                <p className="font-bold text-lg">
                    ${Number(price).toFixed(2)}
                </p>

                {/* rating + qty */}
                <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-1">
                        {stars.map((isFull, idx) => (
                            <FaStar
                                key={idx}
                                className={isFull ? "text-warning" : "text-base-300"}
                            />
                        ))}
                        <span className="text-sm text-base-content/60 ml-1">
                            ({rating})
                        </span>
                    </div>

                    <span className="text-sm text-base-content/70">
                        Qty: <span className="font-semibold">{availableQuantity}</span>
                    </span>
                </div>

                {/* button */}
                <div className="card-actions mt-3">
                    <button className="w-full hover:scale-105 transition-all duration-500">
                        <Link
                            className="btn bg-primary/70 text-secondary btn-sm rounded-full w-full"
                            to={`/toy-details/${toy.toyId}`}>
                            View Details
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ToyCard;
