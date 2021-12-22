import { PaletteType } from '@material-ui/core';
import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from 'react';

export function createCtx<A>(defaultValue: A) {
    type UpdateType = Dispatch<SetStateAction<typeof defaultValue>>;
    const defaultUpdate: UpdateType = () => defaultValue;

    const ctx = createContext({
        state: defaultValue,
        update: defaultUpdate,
    });

    const Provider = (props: PropsWithChildren<{}>) => {
        const [state, update] = useState(defaultValue);
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <ctx.Provider value={{ state, update }} {...props} />;
    };

    return [ctx, Provider] as const;
}

export interface IPreferencesContext {
    paletteType: PaletteType;
}

export interface IUserContext {
    id: string;
    adfsId: string;
    name: string;
    displayName: string;
    unit: string;
    rank: string;
}

export interface IConfigContext {
    contactByMailLink?: string;
    contactByChatLink?: string;
}
