import React from 'react';
import { Avatar } from "@chakra-ui/react";

export const UserAvatar = (props) => {
  return (
    <Avatar
      {...props}
      name="Dan Abrahmov"
      borderRadius="16px"
      ml="15px"
      boxSize="60px"
      objectFit="cover"
      src="https://bit.ly/dan-abramov"
    />
  )
};