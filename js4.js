<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<html>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Learn the Date Object by Building a Date Formatter</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <main>
      <div class="title-container">
        <h1 class="title">Today's Date</h1>

        <svg
          class="date-svg"
          xmlns="http://www.w3.org/2000/svg"
          version="1.0"
          width="512.000000pt"
          height="512.000000pt"
          viewBox="0 0 512.000000 512.000000"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
            fill="#fff"
            stroke="none"
          >
            <path
              d="M1145 4777 c-71 -24 -120 -54 -164 -102 -59 -64 -83 -124 -89 -216 l-4 -77 -147 -3 c-142 -4 -149 -5 -213 -37 -81 -40 -149 -111 -177 -188 -21 -54 -21 -64 -21 -1789 0 -1725 0 -1735 21 -1789 28 -77 96 -148 177 -188 l67 -33 1950 0 1950 0 67 33 c74 36 133 96 170 170 l23 47 0 1760 0 1760 -23 47 c-37 74 -96 134 -169 170 -63 31 -71 32 -213 36 l-148 4 -4 77 c-8 133 -82 242 -200 297 -54 25 -75 29 -148 29 -94 -1 -151 -20 -220 -75 -75 -59 -130 -181 -130 -287 l0 -43 -954 0 -954 0 -7 74 c-12 137 -89 251 -201 303 -66 30 -179 39 -239 20z m209 -164 c23 -16 52 -49 66 -73 l25 -45 0 -365 0 -365 -28 -47 c-30 -52 -88 -92 -149 -103 -54 -10 -137 17 -175 57 -65 69 -64 60 -61 471 l3 373 27 41 c17 26 45 50 80 68 71 35 151 31 212 -12z m2594 11 c41 -20 59 -37 82 -78 l30 -51 0 -360 c0 -329 -2 -364 -19 -401 -36 -79 -137 -133 -222 -119 -57 10 -125 58 -151 107 -23 42 -23 50 -26 388 -3 377 -1 403 51 465 62 76 162 95 255 49z m537 -2717 l0 -1239 -24 -19 c-23 -19 -67 -19 -1916 -19 -1849 0 -1893 0 -1916 19 l-24 19 -3 1241 -2 1241 1942 -2 1943 -3 0 -1238z"
            />
            <path
              d="M1112 2493 l3 -158 318 -3 317 -2 0 160 0 160 -320 0 -321 0 3 -157z"
            />
            <path
              d="M2230 2490 l0 -160 315 0 315 0 0 160 0 160 -315 0 -315 0 0 -160z"
            />
            <path
              d="M3342 2493 l3 -158 310 0 310 0 3 158 3 157 -316 0 -316 0 3 -157z"
            />
            <path
              d="M1110 1855 l0 -155 320 0 320 0 0 155 0 155 -320 0 -320 0 0 -155z"
            />
            <path
              d="M2230 1855 l0 -155 315 0 315 0 0 155 0 155 -315 0 -315 0 0 -155z"
            />
            <path
              d="M3340 1855 l0 -155 315 0 315 0 0 155 0 155 -315 0 -315 0 0 -155z"
            />
            <path
              d="M1117 1383 c-4 -3 -7 -78 -7 -165 l0 -158 320 0 320 0 0 165 0 165 -313 0 c-173 0 -317 -3 -320 -7z"
            />
            <path
              d="M2230 1225 l0 -165 315 0 315 0 0 165 0 165 -315 0 -315 0 0 -165z"
            />
            <path
              d="M3347 1383 c-4 -3 -7 -78 -7 -165 l0 -158 315 0 315 0 -2 163 -3 162 -306 3 c-168 1 -308 -1 -312 -5z"
            />
          </g>
        </svg>
      </div>
      <div class="divider"></div>

      <div class="dropdown-container">
        <select name="date-options" id="date-options">
          <option value="dd-mm-yyyy">Day, Month, Year</option>
          <option value="yyyy-mm-dd">Year, Month, Day</option>
          <option value="mm-dd-yyyy-h-mm">
            Month, Day, Year, Hours, Minutes
          </option>
        </select>
        <div class="select-icon">
          <svg
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="35"
            viewBox="0 0 24 24"
          >
            <rect x="0" fill="none" width="24" height="24" />

            <g>
              <path d="M7 10l5 5 5-5" />
            </g>
          </svg>
        </div>
      </div>

      <p id="current-date"></p>
    </main>

    <script src="./script.js"></script>
  </body>
</html>
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<css>>>>>>>>>>>>>>>>>>>>>>>>>
    *,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --dark-grey: #0a0a23;
  --white: #ffffff;
  --yellow: #f1be32;
}

body {
  color: var(--white);
  background-color: var(--dark-grey);
}

.title-container {
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.title {
  font-size: 2.5rem;
}

.date-svg {
  width: 30px;
  height: 30px;
}

.divider {
  margin: auto;
  width: 150px;
  height: 10px;
  background-color: var(--yellow);
}

.dropdown-container {
  width: 50%;
  margin: 40px auto;
  position: relative;
}

select {
  display: block;
  margin: 20px auto 0;
  width: 100%;
  height: 50px;
  font-size: 100%;
  font-weight: bold;
  cursor: pointer;
  background-color: var(--white);
  border: none;
  color: var(--dark-grey);
  appearance: none;
  padding: 10px;
  padding-right: 38px;
  -webkit-appearance: none;
  -moz-appearance: none;
  transition: color 0.3s ease, background-color 0.3s ease,
    border-bottom-color 0.3s ease;
}

.select-icon {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 30px;
  height: 36px;
  pointer-events: none;
  padding-left: 5px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.select-icon svg.icon {
  transition: fill 0.3s ease;
  fill: var(--dark-grey);
}

#current-date {
  font-size: 2rem;
  text-align: center;
}

@media (max-width: 375px) {
  .title {
    font-size: 2rem;
  }

  .dropdown-container {
    width: 80%;
  }

  .date-svg {
    display: none;
  }
}
          
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<js>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const currentDateParagraph = document.getElementById("current-date");
const dateOptionsSelectElement = document.getElementById("date-options");

const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
const hours = date.getHours();
const minutes = date.getMinutes();

const formattedDate = `${day}-${month}-${year}`;
currentDateParagraph.textContent = formattedDate;

dateOptionsSelectElement.addEventListener("change", () => {

  switch (dateOptionsSelectElement.value) {
    case "yyyy-mm-dd":
      currentDateParagraph.textContent = formattedDate
        .split("-")
        .reverse()
        .join("-");
      break;
    case "mm-dd-yyyy-h-mm":
      currentDateParagraph.textContent = `${month}-${day}-${year} ${hours} Hours ${minutes} Minutes`;
      break;
      default:
    currentDateParagraph.textContent = formattedDate;
    console.log("It's the weekend!");
  }
});

