const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto text-base lg:text-lg text-center font-inter my-8">
      <p className="text-[#D99904] font-normal italic mb-2">
        ---{subHeading}---
      </p>
      <h3 className="text-2xl lg:text-4xl font-normal uppercase border-y-4 py-4">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
