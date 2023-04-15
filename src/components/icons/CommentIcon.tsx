type Props = {
  margin: boolean
}

export default function CommentIcon(props: Props) {
  return (
    <svg
      style={props.margin ? {marginRight: '16px'} : {}}
      width="24"
      height="24"
      fill="#262626"
      color="#262626"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z"
      ></path>
    </svg>
  );
}
