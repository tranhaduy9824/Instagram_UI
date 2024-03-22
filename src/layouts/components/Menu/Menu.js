import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { useState } from 'react';

import images from '~/assets/images';
import MenuItem from './MenuItem';
import {
    BarsIcon,
    ExploreIcon,
    ExploreIconActive,
    HeartIcon,
    HeartIconActive,
    HomeIcon,
    HomeIconActive,
    LogoIcon,
    MessIcon,
    MessIconActive,
    PlusIcon,
    ReelsIcon,
    ReelsIconActive,
    SearchIcon,
    SearchIconActive,
    ThreadsIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

function Menu() {
    const [zoomOut, setZoomOut] = useState(false);
    const [activeButton, setActiveButton] = useState(null);

    const handleZoomOut = () => {
        setZoomOut(true);
        setActiveButton(null);
    };

    const handleZoomIn = () => {
        setZoomOut(false);
        setActiveButton(null);
    };

    const handleItemClick = (itemId) => {
        if (activeButton === itemId) {
            setActiveButton(null);
            if (!(window.location.pathname.split('/').pop() === 'direct')) {
                setZoomOut(false);
            }
        } else {
            setActiveButton(itemId);
        }
    };

    const onHideTippy = () => {
        setZoomOut(false);
        setActiveButton(null);
    };

    const classes = cx('wrapper', { zoomOut });

    return (
        <header className={classes}>
            <div className={cx('logo-link')}>
                <Link to="/" onClick={handleZoomIn}>
                    {zoomOut ? <LogoIcon /> : <img src={images.logo} alt="Instagram" className={cx('logo')} />}
                </Link>
            </div>

            <div className={cx('control-menu')}>
                <div className={cx('box-menu')}>
                    <MenuItem
                        onClick={handleZoomIn}
                        zoomOut={zoomOut}
                        to="/"
                        icon={<HomeIcon />}
                        activeIcon={<HomeIconActive />}
                    >
                        Trang chủ
                    </MenuItem>
                    <MenuItem
                        tippyBox
                        onHideTippy={onHideTippy}
                        className={activeButton === 'search' ? 'active' : ''}
                        onClick={() => {
                            handleZoomOut();
                            handleItemClick('search');
                        }}
                        zoomOut={zoomOut}
                        icon={<SearchIcon />}
                        activeIcon={<SearchIconActive />}
                    >
                        Tìm kiếm
                    </MenuItem>
                    <MenuItem
                        onClick={handleZoomIn}
                        zoomOut={zoomOut}
                        to="/explore"
                        icon={<ExploreIcon />}
                        activeIcon={<ExploreIconActive />}
                    >
                        Khám phá
                    </MenuItem>
                    <MenuItem
                        onClick={handleZoomIn}
                        zoomOut={zoomOut}
                        to="/reels"
                        icon={<ReelsIcon />}
                        activeIcon={<ReelsIconActive />}
                    >
                        Reels
                    </MenuItem>
                    <MenuItem
                        tippyBox
                        onClick={handleZoomOut}
                        zoomOut={zoomOut}
                        to="/direct"
                        icon={<MessIcon />}
                        activeIcon={<MessIconActive />}
                    >
                        Tin nhắn
                    </MenuItem>
                    <MenuItem
                        tippyBox
                        onHideTippy={onHideTippy}
                        className={activeButton === 'heart' ? 'active' : ''}
                        onClick={() => {
                            handleZoomOut();
                            handleItemClick('heart');
                        }}
                        zoomOut={zoomOut}
                        icon={<HeartIcon />}
                        activeIcon={<HeartIconActive />}
                    >
                        Thông báo
                    </MenuItem>
                    <MenuItem zoomOut={zoomOut} icon={<PlusIcon />}>
                        Tạo
                    </MenuItem>
                    <MenuItem
                        onClick={handleZoomIn}
                        zoomOut={zoomOut}
                        to="/profile"
                        image="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                    >
                        Trang cá nhân
                    </MenuItem>
                </div>

                <div className={cx('box-menu')}>
                    <MenuItem zoomOut={zoomOut} href="https://www.threads.net/login" icon={<ThreadsIcon />}>
                        Threads
                    </MenuItem>
                    <MenuItem zoomOut={zoomOut} icon={<BarsIcon />}>
                        Xem Thêm
                    </MenuItem>
                </div>
            </div>
        </header>
    );
}

export default Menu;
