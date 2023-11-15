const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex space-x-4">
      <img
        className="w-28"
        style={{ borderRadius: "0 200px 200px 200px" }}
        src={image}
        alt=""
      />
      <div className="space-y-2">
        <h2 className="md:text-base lg:text-xl font-normal font-cinzel">
          {name} ---------<span className="max-sm:hidden">---------</span>
        </h2>
        <p className="text-sm md:text-base text-justify font-normal text-[#737373] font-inter">
          {recipe}
        </p>
      </div>
      <p className="md:text-lg font-normal text-[#BB8506] font-inter">
        ${price}
      </p>
    </div>
  );
};

export default MenuItem;
