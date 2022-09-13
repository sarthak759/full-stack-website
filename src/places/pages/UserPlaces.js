import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
        title: 'Empire State Building',
        desciption: 'One of the most famous sky scrapers in the world!',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u1'
    },
    {
        id: 'p2',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/375px-Empire_State_Building_%28aerial_view%29.jpg',
        title: 'Empire State Building',
        desciption: 'One of the most famous sky scrapers in the world!',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484405,
            lng: -73.9878584,
        },
        creator: 'u2'
    }
]

const UserPlaces = () => {
    const userId= useParams().userId;
    const loadedPlaces= DUMMY_PLACES.filter(place=> place.creator===userId)
    return <PlaceList items={loadedPlaces} />
};

export default UserPlaces;