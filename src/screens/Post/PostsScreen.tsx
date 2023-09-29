import {useState, useEffect, useRef} from 'react'
import { dummyapi } from '../../api/api'
import { Post } from '../../interfaces/PostInterfaces'
import './postscreen.css'
import { PostComponent } from '../../components/PostComponent/PostComponent'
import Loading from '../../components/Loading/Loading'
import { SearchBar } from '../../components/SearchBar/SearchBar'
import { NotFound } from '../../components/NotFound/NotFound'

export const PostsScreen = () => {
  const [postList, setPostlist]= useState<Post[]>([])
  const [postListFiltered, setPostlistFiltered]= useState<Post[]>([])
  const [isLoading, setIsLoading]= useState<boolean>(false)
  const [isEndOfList, setIsEndOfList] = useState(false);
  const [page, setPage] = useState(1);

  const containerRef = useRef(null);

  useEffect(()=> {
    getPostList()
  },[])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollTop, clientHeight, scrollHeight } = containerRef.current;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        setIsEndOfList(true);
      } else {
        setIsEndOfList(false);
      }
    }
  };


  const getPostList = async () => {
    setIsLoading(true)
    try {
      const {data}  = await dummyapi.get(`/post?page=${page}&limit=15`)
      setPostlist([...postList, ...data.data])
      setPostlistFiltered([...postList, ...data.data])
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
      setPage(page + 1)
    }
  }

  const onSearch = (input: string) => {
    if(input.length <= 0){
      setPostlistFiltered(postList)
    } else {
      const postFiltered = postList.filter(e => e.tags.find(t => t.toLowerCase().includes(input.toLowerCase())))
      setPostlistFiltered(postFiltered)
    }
  }

  return (
    <div className='postListContainer' ref={containerRef}>
      <div style={{width: 200, position: 'absolute', right: 600, top: 20}}>
        <SearchBar onSearch={onSearch}/>
      </div>
      {
        isLoading 
        ? 
        <Loading/> 
        :
        <>
        {
          postListFiltered.length === 0 
          ? 
          <NotFound/>
          :
          postListFiltered.map((post: Post) =>(
            <PostComponent
              image={post.image}
              likes={post.likes}
              owner={post.owner}
              publishDate={post.publishDate}
              tags={post.tags}
              text={post.text}
              id={post.id}
              key={post.id}
            />
          ))}
          {isEndOfList && (
              <div className="load-more" style={{position: 'absolute', top: 120 }}>
                <button onClick={()=>getPostList()}>Load more posts...</button>
              </div>
            )}
        </>
      }
    </div>
  )
}

