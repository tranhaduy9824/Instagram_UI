import { createContext, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Videos.module.scss';

import VideoTest1 from '~/assets/videos/VideoTest1.mp4';
import VideoTest2 from '~/assets/videos/VideoTest2.mp4';
import VideoTest3 from '~/assets/videos/VideoTest3.mp4';
import VideoItem from './VideoItem';

const cx = classNames.bind(styles);

export const handleSoundVideo = createContext();

function Videos() {
    const [sound, setSound] = useState(false);

    const handleSound = () => {
        setSound(!sound);
    };

    return (
        <handleSoundVideo.Provider value={{ sound, handleSound }}>
            <div className={cx('wrapper')}>
                <VideoItem customKey={1} srcVideo={VideoTest1} />
                <VideoItem customKey={2} srcVideo={VideoTest2} />
                <VideoItem customKey={3} srcVideo={VideoTest3} />
            </div>
        </handleSoundVideo.Provider>
    );
}

export default Videos;
