import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import client from '../client';
import { CHATS_MUTATION, GROUP_MUTATION } from './mutations';

export function chatsMutation(nome: string, grupo: string, turma: string) {
    return client.mutate({
        mutation: CHATS_MUTATION(nome, grupo, turma)
    });
}

export function groupMutation(idUser: string, idGroup: string, userType: string) {
    return client.mutate({
        mutation: GROUP_MUTATION(idUser, idGroup, userType)
    });
}