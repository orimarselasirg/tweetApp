import search from '../../assets/icons8-search.gif'

export const NotFound = () => {
  return (
    <div style={{marginTop: 100, display: 'flex', flexDirection: 'column', textAlign: 'center', justifyContent: 'center', alignItems: 'center'}}>
      <img src={search} alt='search' width={50} height={50} />
      <span style={{fontSize: 30, marginBottom: 10}}>Oops! There isn't any post with that tag.</span>
      <span style={{fontSize: 30}}>Why don't you try another tag?</span>
    </div>
  )
}
