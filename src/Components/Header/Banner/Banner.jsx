const Banner = () => {
  return (
    <div className="relative h-[50vh] w-full flex justify-center flex-col items-center">
      {/* Background image with opacity */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-10 rounded-xl blur-md"
        style={{
          backgroundImage: "url('https://i.ibb.co/W6Z88Cs/doctor-cover.jpg')",
        }}
      ></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full z-10 w-3/4">
        <h3 className="text-5xl font-bold ">
          I Grow By Helping People In Need
        </h3>

        <div className="bg-white rounded-md mt-5 border border-stone-200 w-1/2">
            <input className="p-3" type="text" placeholder="Search here..." />
            <button className="bg-[#FF444A] rounded-r-md p-4 relative left-48">Search</button>
          </div>

      </div>
    </div>
  );
};

export default Banner;
