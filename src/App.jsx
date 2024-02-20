import { useState } from "react";
import "./App.css";
import { TbSquareRotatedFilled } from "react-icons/tb";

function App() {
  {
    /* Setting variables of each bar chart*/
  }
  const width1 = 19;
  const width2 = 23;
  const width3 = 17;
  const width4 = 21;
  const width5 = 19;
  const width6 = 100 - width1 - width2 - width3 - width4 - width5;

  const cautious_width1 = 21;
  const cautious_width2 = 21;
  const cautious_width3 = 17;
  const cautious_width4 = 19;
  const cautious_width5 = 21;
  const cautious_width6 =
    100 -
    (cautious_width1 +
      cautious_width2 +
      cautious_width3 +
      cautious_width4 +
      cautious_width5);

  const comp_width1 = 16;
  const comp_width2 = 24;
  const comp_width3 = 19;
  const comp_width4 = 28;
  const comp_width5 = 10;
  const comp_width6 =
    100 - (comp_width1 + comp_width2 + comp_width3 + comp_width4 + comp_width5);

  const confident_width1 = 19;
  const confident_width2 = 22;
  const confident_width3 = 19;
  const confident_width4 = 23;
  const confident_width5 = 17;
  const confident_width6 =
    100 -
    (confident_width1 +
      confident_width2 +
      confident_width3 +
      confident_width4 +
      confident_width5);

  const [group, setGroup] = useState(0);
  const [cautiousGroup, setCautiousGroup] = useState(0);
  const [compGroup, setCompGroup] = useState(0);
  const [confidentGroup, setConfidentGroup] = useState(0);
  const [showMenu, setShowMenu] = useState("");
  const [numerator, setNumerator] = useState(Math.floor(Math.random() * 29));
  const [showText, setShowText] = useState("opacity-100");
  const [isClicked, setIsClicked] = useState(false);

  {
    /* Function to hide hover effect of a menu on the left pane for 0.3 seconds when it is clicked */
  }
  const hideMenu = () => {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, 300);
  };

  {
    /* Show numerator in the donut chart and make it appear slowly */
  }
  const showNumerator = () => {
    setShowText("");
    setTimeout(() => {
      setShowText(" transition-opacity duration-1000 opacity-100");
    }, 0);
  };

  {
    /* Get random number of numerator between 0 and 28 */
  }

  const setRandom = () => {
    setNumerator(Math.floor(Math.random() * 29));
  };

  return (
    <div className=" mx-auto min-w-fit min-h-fit max-w-[2360px] max-h-[1640px] flex flex-row font-bold tracking-wider border-2 border-gray-200 max-w-dvw">
      {/* Side menu on the left pane */}
      <div className="flex flex-col justify-start w-3/12 gap-16 py-20 text-xl font-light tracking-wider bg-sidebar-grey shadow-sidebar font-montserrat text-global-white ">
        <div className="flex flex-col gap-6 pl-10">
          <h2 className=" text-sidebar-subheading">Welcome,</h2>
          <h2>Andy Repp</h2>
        </div>
        <div className="flex flex-col gap-12 ">
          <h2 className="pl-10 text-sidebar-subheading">Metrics</h2>
          <div className="flex flex-col">
            <div
              onClick={() =>
                showMenu === ""
                  ? setShowMenu(" bg-sidebar-active font-bold")
                  : setShowMenu("")
              }
              className={` cursor-pointer py-6 tracking-widest ${showMenu}`}
            >
              <h2 className="pl-10">Overview</h2>
            </div>
            <div className="flex flex-col gap-10 ">
              <div
                className={`py-6 cursor-pointer ${
                  !isClicked
                    ? "hover:bg-sidebar-active hover:delay-200 hover:font-bold"
                    : null
                }`}
                onClick={() => {
                  hideMenu();
                }}
              >
                <h2 className="pl-10">Detailing</h2>
              </div>
            </div>
            <div className="flex flex-col gap-10 ">
              <div
                className={`py-6 cursor-pointer ${
                  !isClicked
                    ? "hover:bg-sidebar-active hover:delay-200 hover:font-bold"
                    : null
                }`}
                onClick={() => {
                  hideMenu();
                }}
              >
                <h2 className="pl-10">Calls</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 ">
          <div className="text-sidebar-subheading">
            <h2 className="pl-10">Information</h2>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-10 ">
              <div
                className={`py-6 cursor-pointer ${
                  !isClicked
                    ? "hover:bg-sidebar-active hover:delay-200 hover:font-bold"
                    : null
                }`}
                onClick={() => {
                  hideMenu();
                }}
              >
                <h2 className="pl-10">About profiles</h2>
              </div>
            </div>
            <div className="flex flex-col gap-10 ">
              <div
                className={`py-6 cursor-pointer ${
                  !isClicked
                    ? "hover:bg-sidebar-active hover:delay-200 hover:font-bold"
                    : null
                }`}
                onClick={() => {
                  hideMenu();
                }}
              >
                <h2 className="pl-10">Detailing targets</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main area for Overview of dashboard */}
      <div className="flex flex-col justify-start w-4/5 gap-12 py-10 ml-10 mr-14 text-sidebar-grey font-montserrat">
        <h1 className="mt-12 text-4xl tracking-wider ">Overview</h1>
        <div className="flex flex-col justify-between gap-10 text-xl ">
          <div className="flex flex-row justify-start gap-10 ">
            <h2 className="w-1/2">Next call</h2>
            <h2 className="w-1/2">Calls this month</h2>
          </div>
          <div className="flex flex-row items-start gap-12 ">
            <div className="flex flex-col w-7/12 gap-6 text-xl ">
              <div className="flex flex-row justify-start">
                <h2 className="w-1/3">Date:</h2>
                <div className="w-2/6 pr-1 font-normal tracking-wider font-roboto">
                  Tomorrow, 3PM <br /> 18 February 2023
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <h2 className="w-1/3">Account:</h2>
                <div className="w-3/6 font-normal tracking-wider font-roboto">
                  Dr. Clinton Ackerman
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <h2 className="w-1/3">Specialty:</h2>
                <div className="w-3/6 font-normal tracking-wider font-roboto">
                  Respiratory therapist Assistive therapy
                </div>
              </div>
              <div className="flex flex-row justify-start">
                <h2 className="w-1/3">Profiling:</h2>
                <div className="w-3/6 font-normal tracking-wider font-roboto">
                  Confident
                </div>
              </div>
            </div>

            <div
              className="flex font-bold cursor-pointer select-none"
              onClick={() => {
                setRandom();
                showNumerator();
              }}
            >
              {/* Dynamic donut chart to generate random numerator when it is clicked or the page is reloaded */}
              <svg height="250" width="250" viewBox="0 0 20 20">
                <circle r="8.7" cx="10" cy="10" fill="#DDDDDD" />
                <circle
                  r="5"
                  cx="10"
                  cy="10"
                  fill="transparent"
                  stroke="#F68B15"
                  strokeWidth="8"
                  transform="rotate(-90 10 10)"
                  strokeDasharray={`calc(${numerator}/28*100 * 31.4 / 100) 31.4`}
                />
                <circle
                  r="5"
                  cx="10"
                  cy="10"
                  fill="transparent"
                  stroke="#DDDDDD"
                  strokeWidth="6.7"
                  transform="rotate(-90 10 10)"
                  strokeDasharray={`calc(${numerator}/28*100 * 31.4 / 100) 31.4`}
                />
                <circle r="8" cx="10" cy="10" fill="#F5F5F5" />
                <text
                  x="8"
                  y="8"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="5.5"
                  fontFamily="montserrat"
                  letterSpacing={0.1}
                  className={`opacity-0 ${showText}`}
                >
                  {numerator}
                </text>
                <text
                  x="10"
                  y="11.1"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="7.5"
                  fontWeight={400}
                  fontFamily="montserrat"
                  transform="rotate(45 10 13)"
                  fill="#666666"
                >
                  |
                </text>

                <text
                  x="13"
                  y="14"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="3"
                  fontFamily="montserrat"
                  fill="grey"
                  letterSpacing={0.05}
                  fontWeight={400}
                >
                  28
                </text>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-8 mt-2 text-xl font-semibold">
            <h2>Detailing topic breakdown</h2>
            <div className="flex flex-row justify-between text-lg font-light font-roboto ">
              <div className="flex flex-row items-center gap-2">
                <TbSquareRotatedFilled className="text-xl text-chart-blue" />
                <span>Adherence</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <TbSquareRotatedFilled className="text-xl text-chart-green" />
                <span>Combination therapy</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <TbSquareRotatedFilled className="text-xl text-chart-yellow" />
                <span>Dosing</span>
              </div>{" "}
              <div className="flex flex-row items-center gap-2">
                <TbSquareRotatedFilled className="text-xl text-chart-orange" />
                <span>Guidelines</span>
              </div>{" "}
              <div className="flex flex-row items-center gap-2">
                <TbSquareRotatedFilled className="text-xl text-chart-purple" />
                <span>Safety</span>
              </div>
              <div className="flex flex-row items-center gap-2">
                <TbSquareRotatedFilled className="text-xl text-global-grey" />
                <span>Other</span>
              </div>
            </div>
            {/* Sectioin for Bar charts among various topics with levels of Average, Cautious, Complacement and Confident ,  */}
            <div className="flex flex-col gap-6 chart_titles">
              <div className="relative flex flex-col gap-3">
                <div>Avg. all</div>
                <div
                  className=" group flex flex-row overflow-hidden text-center h-[22px] rounded-md text-sm w-full"
                  onClick={() => (!group ? setGroup(100) : setGroup(0))}
                >
                  <div
                    className={`bg-chart-blue flex justify-center w-[${width1}%]`}
                  >
                    <span
                      className={`absolute bg-global-white shadow-sidebar rounded-md px-2 top-[68px] w-max opacity-${group}`}
                    >
                      {width1}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-green flex justify-center w-[${width2}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-[68px] w-max opacity-${group}`}
                    >
                      {width2}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-yellow flex justify-center w-[${width3}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md  top-[68px] w-max opacity-${group}`}
                    >
                      {width3}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-orange flex justify-center w-[${width4}%]`}
                  >
                    <span
                      className={`absolute bg-global-white shadow-sidebar px-2 rounded-md  top-[68px] w-max opacity-${group}`}
                    >
                      {width4}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-purple flex justify-center w-[${width5}%]`}
                  >
                    <span
                      className={`absolute bg-global-white shadow-sidebar px-2 rounded-md  top-[68px] w-max opacity-${group}`}
                    >
                      {width5}%
                    </span>
                  </div>
                  <div
                    className={`bg-global-grey flex justify-center w-[${width6}%]`}
                  ></div>
                </div>
              </div>
              <div className="relative flex flex-col gap-2">
                <div>Cautious</div>
                <div
                  className=" group flex flex-row overflow-hidden text-center h-[22px] rounded-md text-sm w-full"
                  onClick={() =>
                    !cautiousGroup ? setCautiousGroup(100) : setCautiousGroup(0)
                  }
                >
                  <div
                    className={`bg-chart-blue flex justify-center w-[${cautious_width1}%]`}
                  >
                    <span
                      className={`absolute bg-global-white shadow-sidebar px-2 rounded-md  top-16 w-max opacity-${cautiousGroup}`}
                    >
                      {cautious_width1}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-green flex justify-center w-[${cautious_width2}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${cautiousGroup}`}
                    >
                      {cautious_width2}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-yellow flex justify-center w-[${cautious_width3}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${cautiousGroup}`}
                    >
                      {cautious_width3}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-orange flex justify-center w-[${cautious_width4}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${cautiousGroup}`}
                    >
                      {cautious_width4}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-purple flex justify-center w-[${cautious_width5}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${cautiousGroup}`}
                    >
                      {cautious_width5}%
                    </span>
                  </div>
                  <div
                    className={`bg-global-grey flex justify-center w-[${cautious_width6}%]`}
                  ></div>
                </div>
              </div>
              <div className="relative flex flex-col gap-2">
                <div>Complacement</div>
                <div
                  className=" group flex flex-row overflow-hidden text-center h-[22px] rounded-md text-sm w-full"
                  onClick={() =>
                    !compGroup ? setCompGroup(100) : setCompGroup(0)
                  }
                >
                  <div
                    className={`bg-chart-blue flex justify-center w-[${comp_width1}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${compGroup}`}
                    >
                      {comp_width1}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-green flex justify-center w-[${comp_width2}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${compGroup}`}
                    >
                      {comp_width2}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-yellow flex justify-center w-[${comp_width3}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${compGroup}`}
                    >
                      {comp_width3}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-orange flex justify-center w-[${comp_width4}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${compGroup}`}
                    >
                      {comp_width4}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-purple flex justify-center w-[${comp_width5}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16  w-max opacity-${compGroup}`}
                    >
                      {comp_width5}%
                    </span>
                  </div>
                  <div
                    className={`bg-global-grey flex justify-center w-[${comp_width6}%]`}
                  ></div>
                </div>
              </div>
              <div className="relative flex flex-col gap-2">
                <div>Confident</div>
                <div
                  className=" group flex flex-row overflow-hidden text-center h-[22px] rounded-md text-sm w-full"
                  onClick={() =>
                    !confidentGroup
                      ? setConfidentGroup(100)
                      : setConfidentGroup(0)
                  }
                >
                  <div
                    className={`bg-chart-blue flex justify-center w-[${confident_width1}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16 w-max opacity-${confidentGroup}`}
                    >
                      {confident_width1}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-green flex justify-center w-[${confident_width2}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16 w-max opacity-${confidentGroup}`}
                    >
                      {confident_width2}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-yellow flex justify-center w-[${confident_width3}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16 w-max opacity-${confidentGroup}`}
                    >
                      {confident_width3}%
                    </span>
                  </div>
                  <div
                    className={`bg-chart-orange flex justify-center w-[${confident_width4}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16 w-max opacity-${confidentGroup}`}
                    >
                      {confident_width4}%
                    </span>
                  </div>
                  <div
                    className={` bg-chart-purple flex justify-center w-[${confident_width5}%]`}
                  >
                    <span
                      className={`absolute  bg-global-white shadow-sidebar px-2 rounded-md top-16 w-max opacity-${confidentGroup}`}
                    >
                      {confident_width5}%
                    </span>
                  </div>
                  <div
                    className={`bg-global-grey flex justify-center w-[${confident_width6}%]`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
