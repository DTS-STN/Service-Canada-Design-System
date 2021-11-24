import React from "react";
import Typography from "./Typography";

export default {
  title: "Styles/Typography",
  component: Typography,
};

const Template = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <>
      <p className="text-browserh1 font-bold pb-4">Typography</p>
      <p>
        Note: Some styles change based on the size of the device. Differences
        are specified for each individual set of styles. To see the difference
        adjust your screen size and the "Example Text" will change accordingly
      </p>
      <p className="heading2 p-4">Headings</p>
      <div className="bg-gray-200 p-4 m-4">
        <div className="heading1">Example Text: Heading 1</div>
        <p className="body-bold">class-name: heading1</p>
        <p className="body">Styles: Smaller Devices</p>
        <ul>
          <li>font-size: 34px</li>
          <li>ling-height: 38px</li>
          <li>font-weight: 700</li>
          <li>border-bottom: 4px solid #af3c43</li>
        </ul>
        <p className="body">Styles: Desktop and Tablet</p>
        <ul>
          <li>font-size: 38px</li>
          <li>ling-height: 42px</li>
          <li>font-weight: 700</li>
          <li>border-bottom: 4px solid #af3c43</li>
        </ul>
        <br />

        <div className="heading2">Example Text: Heading 2</div>
        <p className="body-bold">class-name: heading2</p>
        <p className="body">Styles: Smaller Devices</p>
        <ul>
          <li>font-size: 32px</li>
          <li>ling-height: 36px</li>
          <li>font-weight: 700</li>
        </ul>
        <p className="body">Styles: Desktop and Tablet</p>
        <ul>
          <li>font-size: 36px</li>
          <li>ling-height: 40px</li>
          <li>font-weight: 700</li>
        </ul>
        <br />

        <div className="heading3">Example Text: Heading 3</div>
        <p className="body-bold">class-name: heading3</p>
        <p className="body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 24px</li>
          <li>ling-height: 26px</li>
          <li>font-weight: 700</li>
        </ul>
        <br />

        <div className="heading4">Example Text: Heading 4</div>
        <p className="body-bold">class-name: heading4</p>
        <p className="body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 22px</li>
          <li>ling-height: 24px</li>
          <li>font-weight: 700</li>
        </ul>
        <br />

        <div className="heading5">Example Text: Heading 5</div>
        <p className="body-bold">class-name: heading5</p>
        <p className="body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 20px</li>
          <li>ling-height: 22px</li>
          <li>font-weight: 700</li>
        </ul>
        <br />

        <div className="heading6">Example Text: Heading 6</div>
        <p className="body-bold">class-name: heading6</p>
        <p className="body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 19px</li>
          <li>ling-height: 21px</li>
          <li>font-weight: 400</li>
        </ul>
      </div>

      <p className="heading2 p-4">Body</p>
      <div className="bg-gray-200 p-4 m-4">
        <div className="body">
          Example Text: Body - Lorem Ipsum is simply dummy text.
        </div>
        <p className="body-bold">class-name: body</p>
        <p className="body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 20px</li>
          <li>ling-height: 33px</li>
          <li>font-weight: 400</li>
        </ul>
        <br />

        <div className="body-bold">
          Example Text: Body Bold - Lorem Ipsum is simply dummy text.
        </div>
        <p className="body-bold">class-name: body-bold</p>
        <p className="body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 20px</li>
          <li>ling-height: 33px</li>
          <li>font-weight: 700</li>
        </ul>
      </div>
    </>
  ),
};
