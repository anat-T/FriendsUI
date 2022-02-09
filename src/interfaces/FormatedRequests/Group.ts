export interface Group {
    id: string;
    friends: number;
    hierarchy: string;
    classification: string;
    displayName: string;
    sAMAccountName: string;
    name: string;
    type: string;
    owner: {
        displayName: string;
        sAMAccountName: string;
    };
    members: { displayName: string; sAMAccountName: string }[];
}
