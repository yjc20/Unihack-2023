import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps } from 'react-native';
import tw from 'twrnc';

interface ButtonProps extends TouchableOpacityProps {
  variant?:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'disabled'
    | 'danger'
    | 'warning';
  children: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  const buttonStyles = tw`rounded-md py-2 px-4`;

  let selectedStyles = [];

  switch (variant) {
    case 'primary':
      selectedStyles.push(buttonStyles, tw`bg-blue-500`);
      break;
    case 'secondary':
      selectedStyles.push(buttonStyles, tw`bg-gray-500`);
      break;
    case 'outline':
      selectedStyles.push(buttonStyles, tw`border border-blue-500 bg-white`);
      break;
    case 'disabled':
      selectedStyles.push(buttonStyles, tw`bg-gray-400`);
      break;
    case 'danger':
      selectedStyles.push(buttonStyles, tw`bg-red-500`);
      break;
    case 'warning':
      selectedStyles.push(buttonStyles, tw`bg-yellow-500`);
      break;
    default:
      selectedStyles.push(buttonStyles, tw`bg-blue-500`);
  }

  return (
    <TouchableOpacity
      style={selectedStyles}
      {...props}
      disabled={variant === 'disabled'}
    >
      <Text style={tw`font-bold text-lg text-center text-white`}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;