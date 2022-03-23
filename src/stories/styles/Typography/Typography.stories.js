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
      <p className="ds-text-browserh1 ds-font-bold ds-pb-4">Typography</p>
      <p>
        Note: Some styles change based on the size of the device. Differences
        are specified for each individual set of styles. To see the difference
        adjust your screen size and the "Example Text" will change accordingly
      </p>
      <p className="ds-heading2">Display</p>
      <div className="ds-display ds-m-4">Example Text: Display</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-display</p>
        <p className="ds-body">Styles: Smaller Devices</p>
        <ul>
          <li>font-size: 60px</li>
          <li>line-height: 60px</li>
          <li>font-weight: 400</li>
          <li>color: grey100</li>
        </ul>
        <p className="ds-body">Styles: Desktop and Tablet</p>
        <ul>
          <li>font-size: 40px</li>
          <li>line-height: 40px</li>
          <li>font-weight: 400</li>
          <li>color: grey100</li>
        </ul>
      </div>
      <p className="ds-heading2">Headings</p>
      <div className="ds-heading1 ds-m-4">Example Text: Heading 1</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-heading1</p>
        <p className="ds-body">Styles: Smaller Devices</p>
        <ul>
          <li>font-size: 34px</li>
          <li>line-height: 38px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
          <li>border-bottom: 4px solid #af3c43</li>
        </ul>
        <p className="ds-body">Styles: Desktop and Tablet</p>
        <ul>
          <li>font-size: 38px</li>
          <li>line-height: 42px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
          <li>border-bottom: 4px solid #af3c43</li>
        </ul>
      </div>

      <div className="ds-heading2 ds-p-4">Example Text: Heading 2</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-heading2</p>
        <p className="ds-body">Styles: Smaller Devices</p>
        <ul>
          <li>font-size: 32px</li>
          <li>line-height: 36px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
        <p className="ds-body">Styles: Desktop and Tablet</p>
        <ul>
          <li>font-size: 36px</li>
          <li>line-height: 40px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <div className="ds-heading3 ds-p-4">Example Text: Heading 3</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-heading3</p>
        <p className="ds-body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 24px</li>
          <li>line-height: 26px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <div className="ds-heading4 ds-p-4">Example Text: Heading 4</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-heading4</p>
        <p className="ds-body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 22px</li>
          <li>line-height: 24px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <div className="ds-heading5 ds-p-4">Example Text: Heading 5</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-heading5</p>
        <p className="ds-body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 20px</li>
          <li>line-height: 22px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <div className="ds-heading6 ds-p-4">Example Text: Heading 6</div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-heading6</p>
        <p className="ds-body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 19px</li>
          <li>line-height: 21px</li>
          <li>font-weight: 400</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <p className="ds-heading2">Body</p>
      <div className="ds-body ds-p-4">
        Example Text: Body - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-body</p>
        <p className="ds-body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 20px</li>
          <li>line-height: 33px</li>
          <li>font-weight: 400</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <div className="ds-body-bold ds-p-4">
        Example Text: Body Bold - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-body-bold</p>
        <p className="ds-body">Styles: Smaller Devices/Desktop and Tablet</p>
        <ul>
          <li>font-size: 20px</li>
          <li>line-height: 33px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
      </div>

      <p className="ds-heading2">Cards</p>
      <div className="ds-card-title-non-link ds-p-4">
        Example Text: Card Non Link - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-card-title-non-link</p>
        <ul>
          <li>font-size: 22px</li>
          <li>line-height: 28px</li>
          <li>font-weight: 700</li>
          <li>color: grey100</li>
        </ul>
      </div>
      <div className="card-body-text ds-p-4">
        Example Text: Card Body text - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-card-body-text</p>
        <ul>
          <li>font-size: 20px</li>
          <li>line-height: 26px</li>
          <li>font-weight: 500</li>
          <li>color: grey90</li>
        </ul>
      </div>

      <p className="ds-heading2">Captions</p>
      <div className="ds-caption-large ds-p-4">
        Example Text: Caption Large - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-caption-large</p>
        <ul>
          <li>font-size: 18px</li>
          <li>line-height: 22px</li>
          <li>font-weight: 500</li>
          <li>color: grey85a</li>
        </ul>
      </div>
      <div className="ds-caption-regular ds-p-4">
        Example Text: Caption Regular - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-caption-regular</p>
        <ul>
          <li>font-size: 16px</li>
          <li>line-height: 20px</li>
          <li>font-weight: 500</li>
          <li>color: grey85a</li>
        </ul>
      </div>
      <div className="ds-caption-small ds-p-4">
        Example Text: Caption Small - Lorem Ipsum is simply dummy text.
      </div>
      <div className="ds-bg-gray-200 ds-p-4 ds-m-4">
        <p className="ds-body-bold">class-name: ds-caption-small</p>
        <ul>
          <li>font-size: 14x</li>
          <li>line-height: 18px</li>
          <li>font-weight: 500</li>
          <li>color: grey85a</li>
        </ul>
      </div>
    </>
  ),
};
