import { useState } from 'react';
import { CreateRequest } from '../../../interfaces/CreateRequest';
import { createGroupRequest } from '../../../utils/api-routes/create';

const useCreateGroup = () => {
    const [classification, setClassification] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [groupName, setGroupName] = useState<string>('');
    const [hierarchy, setHierarchy] = useState<string>('');
    const [displayName, setDisplayName] = useState<string>('');
    const [owner, setOwner] = useState<string>('');
    const [members, setMembers] = useState<string[]>([]);

    const handleSend = () => {
        const newGroup: CreateRequest['group'] = {
            classification,
            type,
            groupName,
            hierarchy,
            displayName,
            owner,
            members,
        };
        createGroupRequest(newGroup);
    };

    return {
        handleSend,
        setters: {
            setClassification,
            setType,
            setGroupName,
            setHierarchy,
            setDisplayName,
            setOwner,
            setMembers,
        },
        values: {
            classification,
            type,
            groupName,
            hierarchy,
            displayName,
            owner,
            members,
        },
    };
};

export default useCreateGroup;
