/**
 *  Imports 
 */

/** Initial State  */
const INITIAL_STATE: any = { status : '' }

declare type AppAction = {
    type: string,
    payload: any
}

export default function(state: any = INITIAL_STATE, action: AppAction): any
{
    return state;
}



