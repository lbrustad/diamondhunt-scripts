/// <reference path="_all.d.ts" />

module STORE {
    const KEY = (mod: string, str: string) => `dh3-${mod}-${str}`;
    const SET = (data: any) => JSON.stringify(data);
    const GET = (mod: string, key: string) => JSON.parse(localStorage.getItem(KEY(mod, key)));

    export const NAME = 'store';
    export function init() {
        //
    }
}