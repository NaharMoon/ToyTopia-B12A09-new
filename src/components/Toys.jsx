import ToyCard from "./ToyCard";

const Toys = ({ toys }) => {
  return (
    <div id="popular-toys" className="w-11/12 mx-auto mt-30">
      <h1 className="text-center font-bold text-baloo text-4xl md:text-5xl text-primary">Popular Toys</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
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
