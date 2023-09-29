/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from 'react';
import PuffLoader from "react-spinners/PuffLoader";
import './loading.css'

const override: CSSProperties = {
  marginTop: '120px',
  display: "block",
  margin: "0 auto",
  borderColor: "#0E309E",
};

 
const Loading = (loading: any) => {
  return (
    <div className='loadingContainer'>
      <PuffLoader
        loading={loading}
        cssOverride={override}
        size={100}
        aria-label="Loading Spinner"
        data-testid="GridLoader"
    />
    </div>
  )
};
 
export default Loading;