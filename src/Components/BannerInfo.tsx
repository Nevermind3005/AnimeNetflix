import React from 'react';
import '../Styles/BannerInfo.css';

interface Props {
    title: string;
    description: string;
}

const BannerInfo: React.FC<Props> = ({ title, description }) => {
    return (
        <div>
            <div className='title textOverflow'>{title}</div>
            <div className='description textOverflow'>{description}</div>
        </div>
    );
};

export default BannerInfo;
