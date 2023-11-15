import service from "../../../assets/home/chef-service.jpg";

const Service = () => {
  return (
    <div className="relative h-80">
      <img
        className="h-full w-full object-cover object-center"
        src={service}
        alt="service"
      />
      <div className="absolute inset-y-12 inset-x-2/4 w-4/5 -translate-x-2/4 bg-white py-10 px-6">
        <div className="max-w-lg mx-auto text-center space-y-3">
          <h1 className="text-4xl font-normal font-cinzel">Bistro Boss</h1>
          <p className="text-sm font-normal font-inter text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus, libero accusamus laborum deserunt ratione dolor
            officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
            nihil iusto ducimus incidunt quibusdam nemo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
