import { createSlice } from "@reduxjs/toolkit";

const videoSlice=createSlice({
    name:"video",
    initialState:{
        videos:[],
    },
    reducers:{
        uploadVideo:(state,action)=>{
            state.videos.push(action.payload);
        },
        updateVideo:(state,action)=>{
            const index=state.videos.findIndex(video=>video._id===action.payload._id);
            if(index!==-1){
                state.videos[index]=action.payload;
            }
        },
        deleteVideo:(state,action)=>{
            state.videos=state.videos.filter(video=>video._id !==action.payload);
        },
        setVideos:(state,action)=>{
            state.videos=action.payload;
        },
    },
});

export const{
    uploadVideo,
    updateVideo,
    deleteVideo,
    setVideos
}=videoSlice.actions;

export default videoSlice.reducer;