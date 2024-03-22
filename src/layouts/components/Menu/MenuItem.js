import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { NavLink } from 'react-router-dom';

import Avatar from '~/components/Avatar/Avatar';
import SearchTippy from '../SearchTippy';

const cx = classNames.bind(styles);

function MenuItem({
    to,
    onClick,
    href,
    icon,
    title,
    image,
    activeIcon,
    children,
    zoomOut,
    className,
    tippyBox,
    onHideTippy,
    ...passProps
}) {
    const [isShowTippy, setIsShowTippy] = useState(false);

    let MenuItem = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        MenuItem = NavLink;
    } else if (href) {
        props.href = href;
        MenuItem = 'a';
    }

    const showTippy = MenuItem === 'button' && tippyBox && className === 'active';

    return (
        <div>
            <HeadlessTippy
                interactive
                offset={[0, 13]}
                onShow={() => setIsShowTippy(true)}
                onHide={() => setIsShowTippy(false)}
                visible={showTippy}
                placement="right-end"
                render={(attrs) => {
                    if (children === 'Tìm kiếm') {
                        return <SearchTippy isShow={isShowTippy} {...attrs} />;
                    } else {
                        return <></>;
                    }
                }}
                onClickOutside={onHideTippy}
            >
                <MenuItem
                    className={
                        MenuItem === NavLink
                            ? (nav) => cx('menu-item', { active: nav.isActive })
                            : cx('menu-item', { [className]: className })
                    }
                    {...props}
                >
                    {icon ? (
                        <span className={cx('icon')}>{icon}</span>
                    ) : (
                        <Avatar verySmall src={image} alt="Avatar" className={cx('avatar')} />
                    )}

                    {activeIcon && <span className={cx('active-icon')}>{activeIcon}</span>}

                    {zoomOut || <span className={cx('title')}>{children}</span>}
                </MenuItem>
            </HeadlessTippy>
        </div>
    );
}

export default MenuItem;
