import { MMKV } from 'react-native-mmkv'

export const tokenStorage = new MMKV({
    id: 'token-storage',
    encryptionKey: "some_secret_key"
});

export const storgae = new MMKV({
    id: 'storgae',
    encryptionKey: "some_storage_secret_key",

});

export const mMKVStorage = {
    setItem: (key: string, value: string) => {
        storgae.set(key, value);
    },

    getItem: (key: string) => {
        const value = storgae.getString(key)
        return value ?? null;
    },
    removeItem: (key: string) => {
        storgae.delete(key);
    },

}
