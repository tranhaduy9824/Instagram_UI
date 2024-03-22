import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

import Avatar from '~/components/Avatar';
import ItemUser from '~/components/ItemUser';
import Videos from '~/pages/Home/Videos';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('box-video')}>
                <div className={cx('box-stories')}>
                    <div className={cx('item')}>
                        <Avatar
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            large
                            newStory
                            className={cx('avatar')}
                        />
                        <div className={cx('username')}>graycie_babi</div>
                    </div>
                    <div className={cx('item')}>
                        <Avatar
                            src="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            large
                            oldStory
                            className={cx('avatar')}
                        />
                        <div className={cx('username', { oldStory: true })}>graycie_babi</div>
                    </div>
                </div>
                <Videos />
            </div>
            <div className={cx('box-suggest')}>
                <div className={cx('change-user')}>
                    <ItemUser
                        canChangeUser
                        className={cx('item-user')}
                        avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                        nickName="daudau247"
                        fullName="Nguyễn Ngọc Hường"
                    />
                </div>
                <div className={cx('list-suggest')}>
                    <div className={cx('title')}>
                        <span className={cx('label')}>Gợi ý cho bạn</span>
                        <Link to="/explore/">Xem tất cả</Link>
                    </div>
                    <div className={cx('list')}>
                        <ItemUser
                            showTippy
                            canFollow
                            className={cx('item-user')}
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="daudau247"
                            fullName="Nguyễn Ngọc Hường"
                        />
                        <ItemUser
                            posts
                            showTippy
                            canFollow
                            className={cx('item-user')}
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="daudau247"
                            fullName="Nguyễn Ngọc Hường"
                        />
                        <ItemUser
                            showTippy
                            canFollow
                            className={cx('item-user')}
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="daudau247"
                            fullName="Nguyễn Ngọc Hường"
                        />
                        <ItemUser
                            posts
                            showTippy
                            canFollow
                            className={cx('item-user')}
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="daudau247"
                            fullName="Nguyễn Ngọc Hường"
                        />
                        <ItemUser
                            posts
                            showTippy
                            canFollow
                            className={cx('item-user')}
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="daudau247"
                            fullName="Nguyễn Ngọc Hường"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
