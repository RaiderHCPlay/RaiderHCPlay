export default function FavouritesSection() {
  return (
    <div className="fav-section">
      <h2>Favourites</h2>
      <div className="fav-wrapper">
        <div className="fav-div">
          <h3>
            <svg
              width="40px"
              height="40px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#7366d3"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M6 12H10M8 10V14M15 13H15.01M18 11H18.01M5.2 18H18.8C19.9201 18 20.4802 18 20.908 17.782C21.2843 17.5903 21.5903 17.2843 21.782 16.908C22 16.4802 22 15.9201 22 14.8V9.2C22 8.0799 22 7.51984 21.782 7.09202C21.5903 6.71569 21.2843 6.40973 20.908 6.21799C20.4802 6 19.9201 6 18.8 6H5.2C4.07989 6 3.51984 6 3.09202 6.21799C2.71569 6.40973 2.40973 6.71569 2.21799 7.09202C2 7.51984 2 8.07989 2 9.2V14.8C2 15.9201 2 16.4802 2.21799 16.908C2.40973 17.2843 2.71569 17.5903 3.09202 17.782C3.51984 18 4.0799 18 5.2 18Z"
                  stroke="#7366d3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>
            Games
          </h3>
          <ul>
            <li>DOOM series</li>
            <li>Persona 3 Reload</li>
            <li>Resident Evil series</li>
            <li>Atomic Heart</li>
            <li>Metal Gear Rising Revengeance</li>
          </ul>
        </div>
        <div className="fav-div">
          <h3>
            <svg
              width="40px"
              height="40px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#7366d3"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M15.4862 9C15.5559 9.45126 15.5119 10.0367 15.3595 10.7008M15.3595 10.7008C14.647 13.8037 11.5647 18.6233 6.63251 19.4919C6.63251 19.4919 5.28441 19.7802 4.54266 19.0227C3.28198 17.7351 3.41266 14.3283 14.0208 11.0015C14.456 10.865 14.9075 10.764 15.3595 10.7008ZM15.3595 10.7008C19.6125 10.1058 23.899 12.8624 14.8758 21M7.53125 6C9 6 13 5.5 15.5352 5M11.5306 3C10.5 7 9.5 10.5 11.5306 19"
                  stroke="#7366d3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{" "}
              </g>
            </svg>{" "}
            Anime & Manga
          </h3>
          <ul>
            <li>Jojo&apos;s Bizarre Adventure (peak)</li>
            <li>Shikanoko nokonoko koshitantan</li>
            <li>Spy x Family</li>
            <li>Devil May Cry (old and a new one)</li>
            <li>Oshi no ko</li>
            <li>Attack on Titan</li>
          </ul>
        </div>
        <div className="fav-div">
          <h3>
            <svg
              width="40px"
              height="40px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#7366d3"
              viewBox="0 0 24 24"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M14.3187 2.50498C13.0514 2.35716 11.8489 3.10033 11.4144 4.29989C11.3165 4.57023 11.2821 4.86251 11.266 5.16888C11.2539 5.40001 11.2509 5.67552 11.2503 6L11.25 6.45499C11.25 6.4598 11.25 6.4646 11.25 6.46938V14.5359C10.4003 13.7384 9.25721 13.25 8 13.25C5.37665 13.25 3.25 15.3766 3.25 18C3.25 20.6234 5.37665 22.75 8 22.75C10.6234 22.75 12.75 20.6234 12.75 18V9.21059C12.8548 9.26646 12.9683 9.32316 13.0927 9.38527L15.8002 10.739C16.2185 10.9481 16.5589 11.1183 16.8378 11.2399C17.119 11.3625 17.3958 11.4625 17.6814 11.4958C18.9486 11.6436 20.1511 10.9004 20.5856 9.70089C20.6836 9.43055 20.7179 9.13826 20.7341 8.83189C20.75 8.52806 20.75 8.14752 20.75 7.67988L20.7501 7.59705C20.7502 7.2493 20.7503 6.97726 20.701 6.71946C20.574 6.05585 20.2071 5.46223 19.6704 5.05185C19.4618 4.89242 19.2185 4.77088 18.9074 4.6155L16.1999 3.26179C15.7816 3.05264 15.4412 2.88244 15.1623 2.76086C14.8811 2.63826 14.6043 2.53829 14.3187 2.50498Z"
                  fill="#7366d3"
                  stroke="#7366d3"
                ></path>{" "}
              </g>
            </svg>
            OSTs / Music
          </h3>
          <ul>
            <li>Persona 3 OST (original and Reload)</li>
            <li>DOOM series OST (especially 2016)</li>
            <li>Initial D OST</li>
            <li>Attack on Titan OST</li>
            <li>Atomic Heart OST</li>
            <li>Resident Evil 4 Remake OST</li>
            <li>Devil May Cry 5 OST</li>
            <li>Jojo&apos;s Bizarre Adventure OST</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
