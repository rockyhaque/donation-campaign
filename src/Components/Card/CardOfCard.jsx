import swal from "sweetalert";

const CardOfCard = ({card}) => {

    const {id, picture, title, category, price, text_bg, category_bg,  card_bg} = card || {}

    const handleDonate = () => {

      localStorage.setItem("selectedDonation", JSON.stringify(card));

    }

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div style={{backgroundColor: card_bg}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={picture}
            alt="image"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="p-6">
          <h6 style={{color: category_bg}} className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
            {category}
          </h6>
          <h4 style={{color: text_bg}} className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>

          <p style={{color: text_bg}} className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {price}
            </p>
          
          <a className="inline-block" href="#">
            <button
            onClick={handleDonate}
              className="flex select-none  gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Donate
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardOfCard;
