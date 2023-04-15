import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmojiIcon from '../../icons/EmojiIcon';
import styles from './CommentInput.module.scss';

const CommentInput: React.FC = () => {

  return (
    <form className={styles.container}>
      <TextField
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmojiIcon size={24}/>
            </InputAdornment>
          ),
        }}
        className={styles["text-field"]}
        variant="outlined"
        id="add-comment-input"
        placeholder="Add a comment..."
        disabled
      />
      <div className={styles["btn-container"]}>
        <button className={styles.button} type="submit" disabled>Post</button>
      </div>     
    </form>
  );
};

export default CommentInput;