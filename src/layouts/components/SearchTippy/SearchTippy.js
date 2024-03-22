import classNames from 'classnames/bind';
import styles from './SearchTippy.module.scss';

import ItemUser from '~/components/ItemUser';
import SearchResults from './SearchResults';

const cx = classNames.bind(styles);

function SearchTippy({ isShow, ...attrs }) {
    return (
        <div className={cx('wrapper')} {...attrs}>
            <div className={cx('box-label')}>
                <div className={cx('label')}>Tìm kiếm</div>
            </div>
            <div className={cx('box-search')}>
                <SearchResults isShowSearchTippy={isShow} />
                <hr />
                <div className={cx('box-recently')}>
                    <div className={cx('box-title')}>
                        <span className={cx('title')}>Gần đây</span>
                        <div className={cx('btn-delete-all')}>Xóa tất cả</div>
                    </div>
                    <div className={cx('users-recently')}>
                        <ItemUser
                            newStory
                            canDelete
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="dinlovely_"
                            fullName="Huỳnh Thị Thanh Hằng"
                        />
                        <ItemUser
                            oldStory
                            canDelete
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="dinlovely_"
                            fullName="Huỳnh Thị Thanh Hằng"
                        />
                        <ItemUser
                            canDelete
                            avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                            nickName="dinlovely_"
                            fullName="Huỳnh Thị Thanh Hằng"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchTippy;
