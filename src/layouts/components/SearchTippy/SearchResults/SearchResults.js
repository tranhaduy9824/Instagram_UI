import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
import styles from './SearchResults.module.scss';

import { LoadingIcon } from '~/components/Icons';
import ItemUser from '~/components/ItemUser';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function SearchResult({ isShowSearchTippy }) {
    const [inputValue, setInputValue] = useState('');
    const [inputing, setInputing] = useState(true);
    const [results, setResults] = useState([]);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef(null);

    const debouceValue = useDebounce(inputValue, 500);

    const handleInputing = () => {
        setInputing(true);
        inputRef.current.focus();
    };

    const handleBlur = () => {
        setTimeout(() => {
            setInputing(false);
        }, 200);
    };

    useEffect(() => {
        if (isShowSearchTippy) {
            setInputing(true);
            inputRef.current.focus();
            setInputValue('');
            setResults([]);
        }
    }, [isShowSearchTippy]);

    useEffect(() => {
        if (debouceValue.trim('')) {
            setShowLoading(true);
            fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${debouceValue}&type=less`)
                .then((res) => res.json())
                .then((data) => {
                    setResults([1, 2, 3]);
                    setShowLoading(false);
                })
                .catch(() => {
                    setShowLoading(false);
                });
        }
    }, [debouceValue]);

    const renderResults = (attrs) => {
        return (
            <div {...attrs} className={cx('wrapper')}>
                <ItemUser
                    avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                    nickName="dinlovely_"
                    fullName="Huỳnh Thị Thanh Hằng"
                />
                <ItemUser
                    avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                    nickName="dinlovely_"
                    fullName="Huỳnh Thị Thanh Hằng"
                />
                <ItemUser
                    avatarSrc="https://scontent.fdad3-4.fna.fbcdn.net/v/t1.15752-9/429003350_375906795201940_8123447757669347528_n.jpg?stp=dst-jpg_p320x320&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEKG1rya_0nZNksdr452F1_Sh5nPcvyqjJKHmc9y_KqMnkiGW1u_OjJRLDtqpnl7C4NTOI83hcVHdxmBQqEdCea&_nc_ohc=6vJRuf5RjQgAX_qX3A2&_nc_ht=scontent.fdad3-4.fna&oh=03_AdS25nBNbTTBCMzlRn1rAqufeIE-j4vnDkLDgje3TDIAwA&oe=661295A4"
                    nickName="dinlovely_"
                    fullName="Huỳnh Thị Thanh Hằng"
                />
            </div>
        );
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                placement="bottom"
                offset={[0, 0]}
                visible={results.length > 0 && inputValue.length > 0}
                render={(attrs) => renderResults(attrs)}
            >
                <div className={cx('box-input')}>
                    {!inputing && (
                        <span className={cx('icon-search')}>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    )}
                    <input
                        value={inputValue}
                        ref={inputRef}
                        onChange={(e) => setInputValue(e.target.value)}
                        onFocus={handleInputing}
                        onBlur={handleBlur}
                        className={cx('input')}
                        placeholder={inputValue === '' ? 'Tìm kiếm' : inputValue}
                    />
                    {inputing && !showLoading && (
                        <span
                            onClick={() => {
                                setInputValue('');
                                setResults([]);
                            }}
                            className={cx('icon-delete')}
                        >
                            <FontAwesomeIcon icon={faTimesCircle} />
                        </span>
                    )}
                    {inputing && showLoading && (
                        <span className={cx('icon-loading')}>
                            <LoadingIcon />
                        </span>
                    )}
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default SearchResult;
