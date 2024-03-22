import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './VideoItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import Avatar from '~/components/Avatar';
import UserTippy from '~/components/UserTippy';
import Video from '~/components/Video';
import { ChooseIcon, CommentIcon, HeartActiveIcon, HeartIcon, SaveIcon, ShareIcon } from '~/components/Icons';
import WrapperModel from '~/components/WrapperModel';

const cx = classNames.bind(styles);

function VideoItem({ customKey, srcVideo }) {
    const [inputValue, setInputValue] = useState('');
    const [heartActive, setHeartActive] = useState(false);

    const handleChange = (e) => {
        const lines = e.target.value.split('\n').length;
        e.target.style.height = `${18 * lines}px`;
        setInputValue(e.target.value);
    };

    const handleHeart = () => {
        setHeartActive(!heartActive);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-info')}>
                <div className={cx('info')}>
                    <UserTippy newStory>
                        <div className={cx('avatar')}>
                            <Avatar
                                src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                                small
                                newStory
                            />
                        </div>
                    </UserTippy>
                    <div className={cx('info-user')}>
                        <div>
                            <div className={cx('box-username')}>
                                <UserTippy newStory>
                                    <p className={cx('username')}>uzguystylez</p>
                                </UserTippy>
                                <span>• 19 giờ</span>
                            </div>
                            <p>
                                LE SSERAFIM <span>• Smart</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('btn-more')}>
                    <FontAwesomeIcon icon={faEllipsisH} />
                </div>
            </div>
            <div className={cx('box-video')}>
                <Video customKey={customKey} srcVideo={srcVideo} />
            </div>
            <div className={cx('info-video')}>
                <div className={cx('box-icon')}>
                    <div className={cx('icon-left')}>
                        <div onClick={handleHeart} className={cx('btn-icon')}>
                            {!heartActive ? (
                                <HeartIcon className={cx('heart-icon')} />
                            ) : (
                                <HeartActiveIcon className={cx('heart-active-icon')} />
                            )}
                        </div>
                        <WrapperModel customKey={customKey}>
                            <div className={cx('btn-icon')}>
                                <CommentIcon />
                            </div>
                        </WrapperModel>
                        <div className={cx('btn-icon')}>
                            <ShareIcon />
                        </div>
                    </div>
                    <div className={cx('icon-right')}>
                        <div className={cx('btn-icon')}>
                            <SaveIcon />
                        </div>
                    </div>
                </div>
                <div className={cx('number-likes')}>83 lượt thích</div>
                <div className={cx('box-content')}>
                    <span className={cx('username')}>uzguystylez</span>
                    <span className={cx('content')}>
                        Good night, baby😴✨ Threads/Twitter: @uzguystylez 👉🏻🔗LINK IN BIO❤️ * * * 😘Follow @uzguystylez
                        🧸
                    </span>
                </div>
                <div className={cx('translate')}>Xem bản dịch</div>
                <WrapperModel customKey={customKey}>
                    <div className={cx('show-comments')}>Xem tất cả 3 bình luận</div>
                </WrapperModel>
                <div className={cx('box-input')}>
                    <textarea value={inputValue} onChange={handleChange} placeholder="Thêm bình luận..." />
                    {inputValue.trim() && <div className={cx('post-btn')}>Đăng</div>}
                    <div className={cx('choose-icon')}>
                        <ChooseIcon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;
