import { useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './ModelComment.module.scss';
import { CloseIcon } from '~/components/Icons';

import Video from '~/components/Video';
import VideoTest1 from '~/assets/videos/VideoTest1.mp4';

const cx = classNames.bind(styles);

function ModelComment({ handleCloseModel, customKey }) {
    const containerRef = useRef();

    const handleClick = (event) => {
        if (!containerRef.current.contains(event.target)) {
            handleCloseModel();
        }
    };

    return (
        <div onClick={handleClick} className={cx('wrapper')}>
            <div ref={containerRef} className={cx('container')}>
                <div className={cx('video-comment')}>
                    <div className={cx('box-video')}>
                        <Video
                            customKey={`${customKey}.1`}
                            className={cx('video')}
                            srcVideo={VideoTest1}
                        />
                    </div>
                    <div className={cx('box-comment')}></div>
                </div>
            </div>
            <div onClick={handleCloseModel} className={cx('btn-close')}>
                <CloseIcon />
            </div>
        </div>
    );
}

export default ModelComment;
