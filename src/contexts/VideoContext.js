import { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
    const [playingVideo, setPlayingVideo] = useState(null);

    const setPlayingVideoId = (videoId) => {
        setPlayingVideo(videoId);
    };

    return <VideoContext.Provider value={{ playingVideo, setPlayingVideoId }}>{children}</VideoContext.Provider>;
};

export const useVideoContext = () => useContext(VideoContext);
