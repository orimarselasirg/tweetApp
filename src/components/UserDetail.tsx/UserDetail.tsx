/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState, useEffect} from 'react'
import { UserResponse } from '../../interfaces/UserInterfaces'
import { dummyapi } from '../../api/api'
import { Row } from '../Row/Row'

interface Props {
  id: string
}

export const UserDetail = ({id}: Props) => {
  const [userData, setUserData] = useState<UserResponse>({
    dateOfBirth: '',
    email: '',
    firstName: '',
    gender: '',
    id: '',
    lastName: '',
    location: {street: '', city: '', state: '', country: '', timezone: ''},
    phone: '',
    picture: '',
    registerDate: '',
    title: '',
    updatedDate: '',
  })
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [userPost, setUserPost] = useState({} as any)
  const expresionRegular = /T\d{2}:\d{2}:\d{2}\.\d+Z$/;

  useEffect(()=> {
    if(id) {
      getUserData(id)
    }
  },[id])

  useEffect(()=>{
    getUserPost(id)
  },[id])

  const getUserData = async (id: string) => {
    setIsLoading(true)
    try {
      const {data} = await dummyapi.get(`/user/${id}`)
      setUserData(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }

  const getUserPost = async (id: string) => {
    setIsLoading(true)
    try {
      const {data} = await dummyapi.get(`/user/${id}/post`)
      setUserPost(data)
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <>
    <div style={{display: 'flex', flexDirection: 'column', padding: 0}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <img src={userData?.picture} alt={userData?.firstName} className='picture'/>
        <div style={{backgroundColor: '#D6DCF2', width: '100%', padding: -10, marginLeft: -40, marginRight: -20, height: 130}}>
          <span style={{fontSize: 30, color: 'grey', marginLeft: 50}}>{userData?.title}. </span>
          <span style={{fontSize: 60}}>{userData?.firstName}</span>
          <span style={{fontSize: 25}}>{userData?.lastName}</span>
          <div>
            {/* <span>followers: 200</span> */}
            <span style={{marginLeft: 50, fontSize: 12, fontWeight: 400, marginTop: 30}}>Total Posts: {userPost?.data?.length}</span>
          </div>
        </div>
      </div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{width: '50%', margin: 10}}>
          {/* <span>Email: {userData?.email}</span> */}
          <Row info={userData.email} label='Email'/>
          <Row info={userData.phone} label='Phone'/>
          <Row info={userData?.dateOfBirth.replace(expresionRegular, "")} label='Birthday'/>
          <Row info={userData.gender} label='Genre'/>
        </div>
        <div style={{width: '50%', margin: 10}}>
          <Row info={userData.location.country} label='Country'/>
          <Row info={userData.location.state} label='State'/>
          <Row info={userData.location.city} label='City'/>
          <Row info={userData.location.street} label='Address'/>
          <Row info={userData.location.timezone} label='TimeZone'/>
        </div>

      </div>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <span style={{fontSize: 12, color: 'grey'}}> Register date: {userData.registerDate.replace(expresionRegular, "")}</span>
        <span style={{fontSize: 12, color: 'grey'}}>Last post: {userData.updatedDate.replace(expresionRegular, "")}</span>
      </div>

    </div>

    {/* <div className="close-container" onClick={setOpen}>
      <div className="leftright"></div>
      <div className="rightleft"></div>
      <label className="close">Close</label>
    </div> */}
    </>
  )
}
