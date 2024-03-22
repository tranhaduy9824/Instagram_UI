import { useRef, useState, useEffect, useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';

import { NoSoundIcon, SoundIcon } from '../Icons';
import { handleSoundVideo } from '~/pages/Home/Videos/Videos';

const cx = classNames.bind(styles);

const playingVideoId = [];

function Video({ customKey, srcVideo, className }) {
    const [playing, setPlaying] = useState(true);
    const refVideo = useRef(null);
    const handle = useContext(handleSoundVideo);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'hidden') {
                document.getElementById(playingVideoId[playingVideoId.length - 1]).pause();
            }

            if (document.visibilityState === 'visible') {
                if (playing) {
                    document.getElementById(playingVideoId[playingVideoId.length - 1]).play();
                } else {
                    document.getElementById(playingVideoId[playingVideoId.length - 1]).pause();
                }
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [playing]);

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.4,
        };

        const handleIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (playing) {
                        if (customKey && typeof customKey === 'string') {
                            const previousVideo = playingVideoId[playingVideoId.length - 1];
                            if (previousVideo !== customKey) {
                                const previousVideoElement = document.getElementById(previousVideo);
                                if (previousVideoElement) {
                                    previousVideoElement.pause();
                                }
                            }
                        }

                        playingVideoId.push(customKey);
                        entry.target.play();
                    }
                } else {
                    if (
                        typeof playingVideoId[playingVideoId.length - 1] === 'string' &&
                        typeof playingVideoId[playingVideoId.length - 2] === 'number'
                    ) {
                        playingVideoId.push(playingVideoId[playingVideoId.length - 2]);
                        const videoElement = document.getElementById(playingVideoId[playingVideoId.length - 1]);
                        if (videoElement) {
                            if (videoElement.autoplay) {
                                videoElement.play();
                            } else {
                                videoElement.pause();
                            }
                        }
                    }
                    entry.target.pause();
                }
                if (
                    typeof playingVideoId[playingVideoId.length - 1] === 'string' &&
                    typeof playingVideoId[playingVideoId.length - 2] === 'string'
                ) {
                    playingVideoId.pop();
                }
                if (playingVideoId.length >= 3) {
                    playingVideoId.shift();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        if (refVideo.current) {
            observer.observe(refVideo.current);
        }

        return () => {
            if (refVideo.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(refVideo.current);
            }
        };
    }, [playing, customKey]);

    useEffect(() => {
        refVideo.current.muted = !handle.sound;
    }, [handle.sound]);

    const handlePlay = () => {
        if (!playing) {
            refVideo.current.play();
            setPlaying(true);
        } else {
            refVideo.current.pause();
            setPlaying(false);
        }
    };

    const classes = cx('wrapper', { [className]: className });

    return (
        <div className={classes}>
            <video autoPlay={playing} onClick={handlePlay} ref={refVideo} loop className={cx('video')} id={customKey}>
                <source src={srcVideo} type="video/mp4" />
            </video>
            <div onClick={handle.handleSound} className={cx('box-sound')}>
                <div className={cx('sound-btn')}>{handle.sound ? <SoundIcon /> : <NoSoundIcon />}</div>
            </div>
        </div>
    );
}

export default Video;
