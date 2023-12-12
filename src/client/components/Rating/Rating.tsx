import { StarBorderOutlined, StarOutlined } from '@mui/icons-material';
import React from 'react';
import { StarContainer } from './styles';

export interface IRating {
    rating: string;
}

const Rating = ({ rating }: IRating) => {
    if (+rating === 1) {
        return (
            <StarContainer>
                <StarOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
            </StarContainer>
        );
    }
    if (+rating === 2) {
        return (
            <StarContainer>
                <StarOutlined />
                <StarOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
            </StarContainer>
        );
    }
    if (+rating === 3) {
        return (
            <StarContainer>
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
            </StarContainer>
        );
    }
    if (+rating === 4) {
        return (
            <StarContainer>
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarBorderOutlined />
            </StarContainer>
        );
    }
    if (+rating === 5) {
        return (
            <StarContainer>
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
                <StarOutlined />
            </StarContainer>
        );
    } else
        return (
            <StarContainer>
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
                <StarBorderOutlined />
            </StarContainer>
        );
};

export default Rating;