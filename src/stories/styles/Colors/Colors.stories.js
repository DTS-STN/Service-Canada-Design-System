import React from "react";
import Colors from "./Colors";

export default {
  title: "Styles/Colors",
  component: Colors,
};

const Template = (args) => <Colors {...args} />;

// color docs
export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <p className="ds-text-browserh1 ds-font-bold ds-pb-4">Colors</p>
      <p className="ds-heading2 ds-p-4">Multi Use Colors</p>
      <p className="ds-heading3 ds-p-4">Neutrals</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-black"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: black</li>
              <br />
              <li>className: multi-neutrals-black</li>
              <br />
              <li>colorCode:#000000</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey100"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey100</li>
              <br />
              <li>className: multi-neutrals-grey100</li>
              <br />
              <li>colorCode: #333333</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey90"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey90</li>
              <br />
              <li>className: multi-neutrals-grey90</li>
              <br />
              <li>colorCode: #555555</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey90a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey90a</li>
              <br />
              <li>className: multi-neutrals-grey90a</li>
              <br />
              <li>colorCode: #5C5C5C</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey85"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey85</li>
              <br />
              <li>className: multi-neutrals-grey85</li>
              <br />
              <li>colorCode: #666666</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey85a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey85a</li>
              <br />
              <li>className: multi-neutrals-grey85a</li>
              <br />
              <li>colorCode: #6F6F6F</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey70"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey70</li>
              <br />
              <li>className: multi-neutrals-grey70</li>
              <br />
              <li>colorCode: #ACACAC</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey70a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey70a</li>
              <br />
              <li>className: multi-neutrals-grey70a</li>
              <br />
              <li>colorCode: #989DA6</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey60"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey60</li>
              <br />
              <li>className: multi-neutrals-grey60</li>
              <br />
              <li>colorCode: #BBBFC5</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey50"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey50</li>
              <br />
              <li>className: multi-neutrals-grey50</li>
              <br />
              <li>colorCode: #CCCCCC</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey50a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey50a</li>
              <br />
              <li>className: multi-neutrals-grey50a</li>
              <br />
              <li>colorCode: #CFD1D5</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey50b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey50b</li>
              <br />
              <li>className: multi-neutrals-grey50b</li>
              <br />
              <li>colorCode: #D4D6DA</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey40"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey40</li>
              <br />
              <li>className: multi-neutrals-grey40</li>
              <br />
              <li>colorCode: #DDDDDD</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey40a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey40a</li>
              <br />
              <li>className: multi-neutrals-grey40a</li>
              <br />
              <li>colorCode: #DCDEE1</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey40b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey40b</li>
              <br />
              <li>className: multi-neutrals-grey40b</li>
              <br />
              <li>colorCode: #E0E0E0</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey40c"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey40c</li>
              <br />
              <li>className: multi-neutrals-grey40c</li>
              <br />
              <li>colorCode: #E3E3E3</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey40d"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey40d</li>
              <br />
              <li>className: multi-neutrals-grey40d</li>
              <br />
              <li>colorCode: #E5E5E5</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey30"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey30</li>
              <br />
              <li>className: multi-neutrals-grey30</li>
              <br />
              <li>colorCode: #EEEEEE</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey30a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey30a</li>
              <br />
              <li>className: multi-neutrals-grey30a</li>
              <br />
              <li>colorCode: #EAEBED</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-grey5"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: grey5</li>
              <br />
              <li>className: multi-neutrals-grey5</li>
              <br />
              <li>colorCode: #F5F5F5</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-neutrals-white"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: white</li>
              <br />
              <li>className: multi-neutrals-white</li>
              <br />
              <li>colorCode: #FFFFFF</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading3 ds-p-4">Blue</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue90"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue90</li>
              <br />
              <li>className: multi-blue-blue90</li>
              <br />
              <li>colorCode: #091C2D</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue70"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue70</li>
              <br />
              <li>className: multi-blue-blue70</li>
              <br />
              <li>colorCode: #26374A</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue70a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue70a</li>
              <br />
              <li>className: multi-blue-blue70a</li>
              <br />
              <li>colorCode: #38414D</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue70b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue70b</li>
              <br />
              <li>className: multi-blue-blue70b</li>
              <br />
              <li>colorCode: #284162</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue65"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue65</li>
              <br />
              <li>className: multi-blue-blue65</li>
              <br />
              <li>colorCode: #16446C</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue65a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue65a</li>
              <br />
              <li>className: multi-blue-blue65a</li>
              <br />
              <li>colorCode: #083C6C</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60a</li>
              <br />
              <li>className: multi-blue-blue60a</li>
              <br />
              <li>colorCode: #2E5274</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60b</li>
              <br />
              <li>className: multi-blue-blue60b</li>
              <br />
              <li>colorCode: #335075</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60c"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60c</li>
              <br />
              <li>className: multi-blue-blue60c</li>
              <br />
              <li>colorCode: #2B4380</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60d"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60d</li>
              <br />
              <li>className: multi-blue-blue60d</li>
              <br />
              <li>colorCode: #295376</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60e"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60e</li>
              <br />
              <li>className: multi-blue-blue60e</li>
              <br />
              <li>colorCode: #31708F</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60f"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60f</li>
              <br />
              <li>className: multi-blue-blue60f</li>
              <br />
              <li>colorCode: #0E62C9</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue60g"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue60g</li>
              <br />
              <li>className: multi-blue-blue60g</li>
              <br />
              <li>colorCode: #1C578A</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue50a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue50a</li>
              <br />
              <li>className: multi-blue-blue50a</li>
              <br />
              <li>colorCode: #2572B4</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue50b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue50b</li>
              <br />
              <li>className: multi-blue-blue50b</li>
              <br />
              <li>colorCode: #0535D2</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue30"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue30</li>
              <br />
              <li>className: multi-blue-blue30</li>
              <br />
              <li>colorCode: #7B92B0</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue15"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue15</li>
              <br />
              <li>className: multi-blue-blue15</li>
              <br />
              <li>colorCode: #B0C1D7</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue5"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue5</li>
              <br />
              <li>className: multi-blue-blue5</li>
              <br />
              <li>colorCode: #DBE5F2</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue2"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue2</li>
              <br />
              <li>className: multi-blue-blue2</li>
              <br />
              <li>colorCode: #EBF2FC</li>
            </ul>
          </span>
        </li>

        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-blue-blue1"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: blue1</li>
              <br />
              <li>className: multi-blue-blue1</li>
              <br />
              <li>colorCode: #F2F8FF</li>
            </ul>
          </span>
        </li>
      </ul>

      <p className="ds-heading3 ds-p-4">Red</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-red-red50a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red50a</li>
              <br />
              <li>className: multi-red-red50a</li>
              <br />
              <li>colorCode: #AF3C43</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-red-red30"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red30</li>
              <br />
              <li>className: multi-red-red30</li>
              <br />
              <li>colorCode: #D47076</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-red-red15"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red15</li>
              <br />
              <li>className: multi-red-red15</li>
              <br />
              <li>colorCode: #ECABAE</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-red-red5"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red5</li>
              <br />
              <li>className: multi-red-red5</li>
              <br />
              <li>colorCode: #F9DBDC</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-red-red1"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red1</li>
              <br />
              <li>className: multi-red-red1</li>
              <br />
              <li>colorCode: #FFF5F5</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading3 ds-p-4">Green</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-green-green30"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green30</li>
              <br />
              <li>className: multi-green-green30</li>
              <br />
              <li>colorCode: #65B234</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-green-green15"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green15</li>
              <br />
              <li>className: multi-green-green15</li>
              <br />
              <li>colorCode: #A3D881</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-multi-green-green0"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green0</li>
              <br />
              <li>className: multi-green-green0</li>
              <br />
              <li>colorCode: #F9FFF5</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading2 ds-p-4">Specific Use Colors</p>
      <p className="ds-heading3 ds-p-4">Red</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red100"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red100</li>
              <br />
              <li>className: specific-red-red100</li>
              <br />
              <li>colorCode: #3B100F</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red100a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red100a</li>
              <br />
              <li>className: specific-red-red100a</li>
              <br />
              <li>colorCode: #060202</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red90"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red90</li>
              <br />
              <li>className: specific-red-red90</li>
              <br />
              <li>colorCode: #77201F</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red90a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red90a</li>
              <br />
              <li>className: specific-red-red90a</li>
              <br />
              <li>colorCode: #6B1D1C</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red70"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red70</li>
              <br />
              <li>className: specific-red-red70</li>
              <br />
              <li>colorCode: #942826</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red50"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red50</li>
              <br />
              <li>className: specific-red-red50</li>
              <br />
              <li>colorCode: #BC3331</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red50b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red50b</li>
              <br />
              <li>className: specific-red-red50b</li>
              <br />
              <li>colorCode: #D3080C</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-red-red2"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: red2</li>
              <br />
              <li>className: specific-red-red2</li>
              <br />
              <li>colorCode: #F3E9E8</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading3 ds-p-4">Green</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green90"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green90</li>
              <br />
              <li>className: specific-green-green90</li>
              <br />
              <li>colorCode: #102900</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green90a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green90a</li>
              <br />
              <li>className: specific-green-green90a</li>
              <br />
              <li>colorCode: #192F20</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green70"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green70</li>
              <br />
              <li>className: specific-green-green70</li>
              <br />
              <li>colorCode: #1D4D00</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green70a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green70a</li>
              <br />
              <li>className: specific-green-green70a</li>
              <br />
              <li>colorCode: #305A3E</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green50"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green50</li>
              <br />
              <li>className: specific-green-green50</li>
              <br />
              <li>colorCode: #318000</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green50a"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green50a</li>
              <br />
              <li>className: specific-green-green50a</li>
              <br />
              <li>colorCode: #278400</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green50b"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green50b</li>
              <br />
              <li>className: specific-green-green50b</li>
              <br />
              <li>colorCode: #458259</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-green-green5"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: green5</li>
              <br />
              <li>className: specific-green-green5</li>
              <br />
              <li>colorCode: #D8EECA</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading3 ds-p-4">Orange</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-orange-orange50"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: orange50</li>
              <br />
              <li>className: specific-orange-orange50</li>
              <br />
              <li>colorCode: #EE7100</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-orange-orange5"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: orange5</li>
              <br />
              <li>className: specific-orange-orange5</li>
              <br />
              <li>colorCode: #F9F4D4</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading3 ds-p-4">Cyan</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-cyan-cyan50"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: cyan50</li>
              <br />
              <li>className: specific-cyan-cyan50</li>
              <br />
              <li>colorCode: #269ABC</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-cyan-cyan10"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: cyan10</li>
              <br />
              <li>className: specific-cyan-cyan10</li>
              <br />
              <li>colorCode: #D7FAFF</li>
            </ul>
          </span>
        </li>
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-cyan-cyan5"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: cyan5</li>
              <br />
              <li>className: specific-cyan-cyan5</li>
              <br />
              <li>colorCode: #E8F2F4</li>
            </ul>
          </span>
        </li>
      </ul>
      <p className="ds-heading3 ds-p-4">Purple</p>
      <ul className="ds-grid ds-grid-cols-color-grid ds-gap-1 ds-text-xs">
        <li className="ds-flex-auto ds-p-1 ds-mr-1 ds-mb-1 ds-min-w-5em ds-max-w-14em ds-border-solid ds-border-2 ds-rounded-md">
          <span className="ds-block ds-h-16 ds-mb-4 ds-border ds-rounded-md ds-bg-specific-purple-purple50"></span>
          <span className="ds-leading-none">
            <ul>
              <li>color: purple50</li>
              <br />
              <li>className: specific-purple-purple50</li>
              <br />
              <li>colorCode: #7834BC</li>
            </ul>
          </span>
        </li>
      </ul>
    </>
  ),
};
