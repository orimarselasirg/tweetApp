import {useState, useEffect} from 'react'
import { Modal } from 'react-responsive-modal';
import { SlLike, SlSpeech } from "react-icons/sl";
import { dummyapi } from '../../api/api';
import { Comments } from '../../interfaces/CommentsInterfaces';
import { Post } from '../../interfaces/PostInterfaces';
import { UserDetailScreen } from '../../screens/UserDetails/UserDetailScreen';
import { CommentsScreen } from '../../screens/Comments/CommentsScreen';
import 'react-responsive-modal/styles.css';
import './postcomponent.css'
// import '../Modals/rmodal.css'


export const PostComponent = ({image, likes, owner, publishDate, tags, text, id}: Post) => {
  const expresionRegular = /T\d{2}:\d{2}:\d{2}\.\d+Z$/;
  const [commnetsByPost, setCommnetsByPost] = useState<Comments[]>([])
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [type, setType] = useState<string>('')

  useEffect(()=> {
    commentByPost(id)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const commentByPost = async (id: string) => {
    const {data} = await dummyapi.get(`/post/${id}/comment`)
    setCommnetsByPost(data.data)
  }

  const handleOpenModal = (e:string) => {
    setOpenModal(true)

    if(e.length === 0){
      setOpenModal(!openModal)
    }

    if(e === 'user'){
      setType('user')
      setOpenModal(!openModal)
    }
    if(e === 'comments'){
      setType('comments')
      setOpenModal(!openModal)
    }

  }

  return (
    <>
      <section className='postContainer'>
        <div className='headerElements'>
          <img src={owner.picture} alt={'user'}  width={40} height={40} style={{borderRadius: '50%', cursor: 'pointer'}} onClick={()=>handleOpenModal('user')}/>
          <span className='postOwner' onClick={()=>handleOpenModal('user')}>{owner.title} {owner.firstName} {owner.lastName}</span>
          <span className='publishDate'>{publishDate.replace(expresionRegular, "")}</span>
        </div>
        <div className='postContentContainer'>
          <p className='postText'>{text}</p>
          <img src={image} alt={image} className='postImage' />
        </div>
        <div>
          {
            tags.map((t, index) => (
              <span key={index} className='postTags'>#{t}</span>
            ))
          }
          <div className='footerContainer'>
            <div className='footerElement'>
              <SlLike/>
              <span style={{marginLeft: 10, fontSize: 14}}>{likes}</span>
            </div>
            <div className='footerElement' onClick={()=>handleOpenModal('comments')}>
              <SlSpeech/>
              <span style={{marginLeft: 10, fontSize: 14}}>{commnetsByPost.length} Comments</span>
            </div>
          </div>
        </div>
      </section>
      <Modal 
        open={openModal} 
        onClose={()=>handleOpenModal('')} 
        showCloseIcon={false} 
        classNames={{
          modal: 'customModal',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation'
        }}
        >
        {
          type === 'user' &&
          <UserDetailScreen id={owner.id}/>
        }
        {
          type === 'comments' &&
          <CommentsScreen comments={commnetsByPost}/>
        }
        <div className="close-container" onClick={()=>handleOpenModal('')}>
          <div className="leftright"></div>
          <div className="rightleft"></div>
          <label className="close">Close</label>
        </div> 
      </Modal>
    </>
  )
}
