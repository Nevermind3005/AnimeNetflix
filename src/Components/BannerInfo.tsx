import React from 'react';
import '../Styles/BannerInfo.css';

interface Props {
    title: string;
    description: string;
}

const BannerInfo: React.FC<Props> = ({ title, description }) => {
    return (
        <div>
            <div className='title'>{title}</div>
            <div className='description'>
                {description.length > 250
                    ? description.substring(0, 250) + '...'
                    : description}
            </div>
        </div>
    );
};

export default BannerInfo;
