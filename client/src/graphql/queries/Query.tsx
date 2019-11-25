import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { CHATS_QUERY } from './queries';
import client from '../client';

export function chatsQuery(id: string, userType: string) {
    return client.query({
        query: CHATS_QUERY(id, userType)
    });
}