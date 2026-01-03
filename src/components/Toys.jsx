import ToyCard from "./ToyCard";

const Toys = ({ toys }) => {
  return (
    <div className="w-11/12 mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toys.slice(0, 8).map((toy) => (
          <ToyCard
            key={toy.toyId}
            toy={toy}
            onViewMore={(t) => console.log("view more:", t)}
          />
        ))}
      </div>
    </div>
  );
};

export default Toys;
