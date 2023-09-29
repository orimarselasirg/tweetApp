import { Comments } from '../../interfaces/CommentsInterfaces'
import './commnets.css'

interface Props {
  comments: Comments[]
}

export const CommentsScreen = ({comments}: Props) => {

  const expresionRegular = /T\d{2}:\d{2}:\d{2}\.\d+Z$/;

  return (
    <div className='commentContainer'>
      {comments.length === 0 && 
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <p style={{fontSize: 25, color: 'grey'}}>
        There is not any comments
      </p>
      </div>}
      {
        comments.map(c => (
          <div key={c.id} className='postCommentContainer'>
            <div className='userInfoComment'>
              <img src={c.owner.picture} alt={c.owner.firstName} className='pictureOwnerComment' />
              <span style={{marginRight: 10, fontWeight: 'bolder'}}>{c.owner.title} {c.owner.firstName} {c.owner.lastName} - </span>
              <span style={{fontSize: 12, color: 'grey'}}>{c.publishDate.replace(expresionRegular, "")}</span>
            </div>
            <div className='commmentPost'>
              <p style={{fontSize: 14, color: 'GrayText', fontWeight: 'lighter'}}>{c.message}</p>
            </div>
          </div>
        ))
      }

    </div>
  )
}
