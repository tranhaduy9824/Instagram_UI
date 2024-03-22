import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './UserTippy.module.scss';

import Avatar from '~/components/Avatar';
import { FollowUserIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function UserTipppy({ children, className, posts, newStory, oldStory }) {
    const classes = cx('wrapper', { [className]: className });

    const renderElement = (attrs) => (
        <div className={classes} {...attrs}>
            <div className={cx('box-tippy')}>
                <div className={cx('box-info')}>
                    <Avatar
                        newStory={newStory}
                        oldStory={oldStory}
                        large
                        src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                    />
                    <div className={cx('info')}>
                        <h4 className={cx('username')}>daudau247</h4>
                        <span>Nguyễn Ngọc Hường</span>
                    </div>
                </div>
                <div className={cx('box-follow')}>
                    <div className={cx('box-item')}>
                        <div className={cx('number')}>
                            <span>0</span>
                        </div>
                        <div className={cx('text')}>
                            <span>bài viết</span>
                        </div>
                    </div>
                    <div className={cx('box-item')}>
                        <div className={cx('number')}>
                            <span>1</span>
                        </div>
                        <div className={cx('text')}>
                            <span>người theo dõi</span>
                        </div>
                    </div>
                    <div className={cx('box-item')}>
                        <div className={cx('number')}>
                            <span>6</span>
                        </div>
                        <div className={cx('text')}>
                            <span>đang theo dõi</span>
                        </div>
                    </div>
                </div>
                <div className={cx('box-post')}>
                    {!posts ? (
                        <div className={cx('no-post')}>
                            <div className={cx('icon')}>
                                <i
                                    data-visualcompletion="css-img"
                                    className=""
                                    style={{
                                        backgroundImage:
                                            'url("https://static.cdninstagram.com/rsrc.php/v3/yw/r/XumwjCKGKPf.png")',
                                        backgroundPosition: '0px -98px',
                                        backgroundSize: '98px 198px',
                                        width: '48px',
                                        height: '48px',
                                        backgroundRepeat: 'no-repeat',
                                        display: 'inline-block',
                                    }}
                                />
                            </div>
                            <div className={cx('text-no-post')}>
                                <span>Chưa có bài viết nào</span>
                            </div>
                            <div className={cx('note')}>
                                <span>Khi daudau247 chia sẻ, bạn sẽ thấy ảnh và thước phim của họ ở đây</span>
                            </div>
                        </div>
                    ) : (
                        <div className={cx('post')}>
                            <div className={cx('item-post')}>
                                <img
                                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                                    alt=""
                                />
                            </div>
                            <div className={cx('item-post')}>
                                <img
                                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                                    alt=""
                                />
                            </div>
                            <div className={cx('item-post')}>
                                <img
                                    src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                                    alt=""
                                />
                            </div>
                        </div>
                    )}
                </div>
                <div className={cx('button-follow')}>
                    <button>
                        <span>
                            <FollowUserIcon />
                        </span>{' '}
                        Theo dõi
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className={cx({ [className]: className })}>
            <HeadlessTippy
                interactive
                delay={[400, 300]}
                offset={[0, 0]}
                placement="bottom-start"
                render={(attrs) => renderElement(attrs)}
            >
                {children}
            </HeadlessTippy>
        </div>
    );
}

export default UserTipppy;
