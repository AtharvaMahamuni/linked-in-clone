import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
import { ThumbUpAltOutlined } from '@mui/icons-material';
import InputOptions from "./InputOptions";
import { ChatOutlined } from '@mui/icons-material';
import { ShareOutlined } from '@mui/icons-material';
import { SendOutlined } from '@mui/icons-material';

function Post({ name, description, message, photUrl}) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar />

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      
      </div>

      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOptions Icon={ThumbUpAltOutlined} title='Like' color="gray"/>
        <InputOptions Icon={ChatOutlined} title='Comment' color="gray"/>
        <InputOptions Icon={ShareOutlined} title='Share' color="gray"/>
        <InputOptions Icon={SendOutlined} title='Send' color="gray"/>
      </div>
      
    </div>
  )
}

export default Post