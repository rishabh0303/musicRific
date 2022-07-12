import { startTransition, useEffect, useRef, useState } from 'react';
import { homeIcon, playGreyIcon, userIcon,pauseGreyIcon, closeIcon, prevIcon, playBlackIcon, nextIcon } from '../assets';
import { baseUrl } from '../config';
import AudioPlayer from './AudioPlayer';
import "./footer.css";
const FixFooter=({
    trackIndex,
    audioList
})=>{
    const [slideUp,setSlideUp]=useState(false);
    const [currentTrackIndex,setCurrentTrackIndex]=useState(trackIndex)
    const [isPlaying, setIsPlaying]=useState(false);
    const [trackProgress,setTrackProgress]=useState('');
    const {
        title="",
        artist="",
        avatar="",
        audioFile=""

    }=trackIndex !== -1 ? audioList[trackIndex] : {};
    const audioSrc=`${baseUrl}/${audioFile}`;
    const audioRef=useRef(new Audio(audioSrc));

    const intervalRef=useRef();

    const startTimer = () =>{
        clearInterval(intervalRef.current);
        intervalRef.current=setInterval(()=>{
            setTrackProgress(audioRef.current.currentTime);

        },1000);
    }
    const onChangeTrackProgress =(e) =>{
        setTrackProgress(e.target.value);
        audioRef.current.currentTime=e.target.value;

    }
    const nextTrack=()=>{
        if(currentTrackIndex < audioList.length-1){
        setCurrentTrackIndex((prevIndex)=>prevIndex+1);
        setTrackProgress(0);
        }
        else{
            setCurrentTrackIndex(0);
        }
    };


    const prevTrack=()=>{
        if(currentTrackIndex){
        setCurrentTrackIndex((prevIndex) =>prevIndex-1);
        }
        else{
            setCurrentTrackIndex(audioList.length-1);
        }
    };

    useEffect(()=>{
        clearInterval(intervalRef.current)
        setCurrentTrackIndex(trackIndex)
    },[trackIndex]);


    useEffect(()=>{
        audioRef.current.pause();
        audioRef.current=new Audio(audioSrc);
        audioRef.current.play();
        setIsPlaying(true);
        startTimer();

       // setCurrentTrackIndex(trackIndex);
    },[currentTrackIndex]);
    useEffect(()=>{
        if (isPlaying){
            audioRef.current.play();
            startTimer();
        }
        else{
            audioRef.current.pause();
            clearInterval(intervalRef.current);

        }
    },[isPlaying]);
    
    console.log({currentTrackIndex, audioFile});
    return(
        <div className={`fix-footer ${currentTrackIndex !==-1 ? '_h115' : '_h60'}  ${slideUp ? 'active' : ''}`}>
         <div onClick={()=>{
            if(currentTrackIndex !== -1){
                setSlideUp(!slideUp)
            }
         }}
            
             className="slide-up-btn">
             
             </div>
             <div className="d-visibility"></div>
             {
                slideUp && <AudioPlayer
                title={title}
                artist={artist}
                avatar={avatar}
                duration={audioRef.current.duration}
                trackProgress={trackProgress}
                onChangeTrackProgress={onChangeTrackProgress}
                onPlayPause={()=>setIsPlaying(!isPlaying)}
                isPlaying={isPlaying}
                nextTrack={nextTrack}
                prevTrack={prevTrack}
                /> 
                    
                
             }
             {
                !slideUp && (
                    <>
                    {
                        trackIndex !== -1 && (
                        <div className="mini-player flex justify-sb align-center mtb-10">
                        <div className="flex align-center">
                            <div className="artist-cover-img">
                                <img src={`${baseUrl}/${avatar}`}/>
                            </div>
                            <div className="mini-player-info mlr-20" >
                                <p>{title}</p>
                                <p>{artist}</p>
                            </div>
                        </div>
                        <div className="mini-player-control flex">
                            <button onClick={()=> setIsPlaying(!isPlaying)}>
                                {isPlaying ?  <img src={pauseGreyIcon}/> : <img src={playGreyIcon}/>}
                            </button>
                            <button>
                                <img src={closeIcon}/>
                            </button>
        
                        </div>
        
                     </div>
                        
       )
                    }
                    
   

            
             <div className="navigation-menu flex justify-evenly">
                <a>
                    <div>
                    <img src={homeIcon}/>
                    </div>
                    <div>
                    <span> Home</span>
                    </div>
                </a>
                <a>
                    <div>
                    <img src={userIcon}/>
                    </div>
                    <div>
                    <span>Profile</span>
                    </div>
                </a>
             </div>
             </>
             )
            }


        </div>
    );
};
export default FixFooter;