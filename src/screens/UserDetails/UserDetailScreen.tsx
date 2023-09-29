/* eslint-disable @typescript-eslint/no-explicit-any */
import {useState, useEffect} from 'react'
import { UserResponse } from '../../interfaces/UserInterfaces'
import { dummyapi } from '../../api/api'
import { Row } from '../../components/Row/Row'
import './userdetail.css'
import Loading from '../../components/Loading/Loading'

interface Props {
  id: string
}

export const UserDetailScreen = ({id}: Props) => {
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
    {
      isLoading
      ?
      <Loading/>
      :
      <div className='userDetailContainer'>
        <div className='userHeaderContainer'>
          <img src={userData?.picture} alt={userData?.firstName} className='picture'/>
          <div className='headerStyles'>
            <span className='headerTitle'>{userData?.title}. </span>
            <span style={{fontSize: 60}}>{userData?.firstName}</span>
            <span style={{fontSize: 25, marginRight: 20}}>{userData?.lastName}</span>
            <div>
              <span className='postStyleLabel'>Total Posts: {userPost?.data?.length}</span>
            </div>
          </div>
        </div>
        <div className='infoContainer'>
          <div className='infoSection'>
            <Row info={userData.email} label='Email'/>
            <Row info={userData.phone} label='Phone'/>
            <Row info={userData?.dateOfBirth.replace(expresionRegular, "")} label='Birthday'/>
            <Row info={userData.gender} label='Genre'/>
          </div>
          <div className='infoSection'>
            <Row info={userData.location.country} label='Country'/>
            <Row info={userData.location.state} label='State'/>
            <Row info={userData.location.city} label='City'/>
            <Row info={userData.location.street} label='Address'/>
            <Row info={userData.location.timezone} label='TimeZone'/>
          </div>

        </div>
        <div className='userFooterContainer'>
          <span className='footerLabelStyle'> Register date: {userData.registerDate.replace(expresionRegular, "")}</span>
          <span className='footerLabelStyle'>Last post: {userData.updatedDate.replace(expresionRegular, "")}</span>
        </div>

      </div>
    }
    </>
  )
}
