import { createContext } from "react";
import { useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;

  if(action.type === "DELETE_POST"){
    newPostList = currPostList.filter((post) => post.id!== action.payload.postId);
  }
  else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId,postTitle,postBody,reactions,tags) => {
    dispatchPostList({
      type:"ADD_POST",
      payload:{
        id: Date.now(),
        title: postTitle,
        body: postBody, 
        reactions: reactions,
        userId: userId,
        tags: tags,        
      }
    })
  
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type:"DELETE_POST",
      payload:{
        postId,
      },
    });
    
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Go to Mumbai",
    body: "Hi Friends, I am going to Mumbai for my vacation. Hope to enjoy a lot. Peace out",
    reactions: 2,
    userId: "user-9",
    tags: ["vacation", "Mumbai", "Enjoying"],
  },
  {
    id: "2",
    title: "Passes Btech",
    body: "Passed my Btech after 4 years of enjoyment",
    reactions: 7,
    userId: "user-12",
    tags: ["passes", "btech", "studies"],
  },
];

export default PostListProvider;
