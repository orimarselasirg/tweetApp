import './row.css'

interface Props {
  label:string;
  info :string;
}

export const Row = ({info, label}: Props) => {
  return (
    <div className='rowContainer'>
      <label className='labelStyle'>{label}: </label>
      <span className='infoStyle'>{info}</span>
    </div>
  )
}
