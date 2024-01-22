import { VideoCard } from "./VideoCard"

const VIDEOS=[{
    title:"Let begin our new Adventure.",
    image:"skyrim.jpg",
    author:"Sandeep", 
    view:"52M",  
    timestamps:"125 day ago"},
    {
        title:"Let begin our new Adventure.",
        image:"skyrim.jpg",
        author:"Sandeep", 
        view:"22M",  
        timestamps:"102 day ago"},
    {
        title:"Let begin our new Adventure.",
        image:"skyrim.jpg",
        author:"Sandeep", 
        view:"27M",  
        timestamps:"71 day ago"},
]

export const  VideoGrid=()=>{
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video=><div>
            <VideoCard title={video.title} image={video.image} author={video.author} view={video.view} timestamps={video.timestamps}></VideoCard>
        </div>)}
    </div>
}