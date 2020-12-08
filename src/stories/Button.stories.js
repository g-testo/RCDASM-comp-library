import React from 'react';

import { Button } from '../components/button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    textColor: { control: 'color' },
    theme: { control: {
      type: 'select',
      options: [
        'dark',
        'light',
        'sepia'
      ]
    }},
    text:{
      table:{
        disable:true
      }
    }
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "Button"
};

export const DarkMode = Template.bind({});

DarkMode.args = {
  text: "Button",
  theme: "dark"
};

export const Disabled = Template.bind({});

Disabled.args = {
  text: "Button",
  disabled: true,
  textColor: "blue"
};
