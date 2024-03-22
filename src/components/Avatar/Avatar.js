import classNames from 'classnames/bind';
import styles from './Avatar.module.scss';

const cx = classNames.bind(styles);

function Avatar({ src, alt = '', small, large, medium, verySmall, newStory, oldStory, className }) {
    const classes = cx('wrapper', {
        small: small,
        verySmall: verySmall,
        large: large,
        medium: medium,
        [className]: className,
    });

    const classesStr = cx('box-border', {
        newStory: newStory,
        oldStory: oldStory,
    });

    return (
        <div className={classes}>
            <img src={src} alt={alt} className={cx('avt-user')} />
            <div className={classesStr}></div>
        </div>
    );
}

export default Avatar;
