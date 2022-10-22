import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, IconName } from "react-icons/fa";

const NewsSummeryCard = ({ news }) => {
    const { _id, title, total_view, author, details, image_url, rating } = news;
    // console.log(news)
    return (
        <Card className="mb-5">
            <Card.Header className='d-flex justify-content-between align-item-center'>
                <div className='d-flex'>
                    <Image
                        roundedCircle
                        className='me-2'
                        src={author?.img}
                        style={{ height: '60px' }}
                    ></Image>
                    <div>
                        <> className='mb-0'>{author?.name}</>
                        <>{author?.published_date}</>
                    </div>
                </div>
                <div>
                    <FaRegBookmark className='me-2'></FaRegBookmark>
                    <FaShareAlt></FaShareAlt>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                {
                    details.length > 250 ?
                        <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>
                        :
                        <>{details}</>
                }
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
            </Card.Footer>
        </Card >
    );
};

export default NewsSummeryCard;