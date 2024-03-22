import classNames from 'classnames/bind';
import styles from './ItemUser.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Avatar from '../Avatar';
import UserTipppy from '../UserTippy/UserTippy';

const cx = classNames.bind(styles);

function ItemUser({
    avatarSrc,
    nickName,
    fullName,
    canDelete,
    newStory,
    oldStory,
    className,
    canFollow,
    canChangeUser,
    showTippy,
    posts
}) {
    const classes = cx('wrapper', {
        [className]: className,
    });

    return (
        <div className={classes}>
            {showTippy ? (
                <UserTipppy posts={posts} className={cx('user-tippy')}>
                    <div className={cx('avatar')}>
                        <Avatar medium src={avatarSrc} newStory={newStory} oldStory={oldStory} />
                    </div>
                </UserTipppy>
            ) : (
                <div className={cx('avatar')}>
                    <Avatar medium src={avatarSrc} newStory={newStory} oldStory={oldStory} />
                </div>
            )}
            <div className={cx('info')}>
                {showTippy ? (
                    <UserTipppy posts={posts} className={cx('user-tippy')}>
                        <h4 className={cx('nick-name')}>{nickName}</h4>
                    </UserTipppy>
                ) : (
                    <h4 className={cx('nick-name')}>{nickName}</h4>
                )}
                <span className={cx('full-name')}>{fullName}</span>
            </div>
            {canDelete && (
                <div className={cx('delete-btn')}>
                    <FontAwesomeIcon icon={faTimes} />
                </div>
            )}
            {canFollow && <div className={cx('follow')}>Theo dõi</div>}
            {canChangeUser && <div className={cx('change')}>Chuyển</div>}
        </div>
    );
}

export default ItemUser;
