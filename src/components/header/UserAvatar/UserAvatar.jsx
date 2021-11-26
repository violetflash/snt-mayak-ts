import React from 'react';
import { Avatar } from "@chakra-ui/react";
import { useTypedSelector } from "../../../redux";

export const UserAvatar = (props) => {
  const {displayName, avatar} = useTypedSelector(state => state.auth);
  return (
    <Avatar
      name={displayName}
      borderRadius="16px"
      ml="15px"
      boxSize="60px"
      objectFit="cover"
      src={avatar}
      {...props}
    />
  )
};
