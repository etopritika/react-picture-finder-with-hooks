import { RotatingLines } from 'react-loader-spinner';

export default function Loader(props) {
  return (
    <>
      <RotatingLines
        strokeColor="#3f51b5"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible={true}
      />
    </>
  );
}
