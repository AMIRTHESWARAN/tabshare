import CryptoJS from 'crypto-js';

export function urlSafeHashEncode(str: string): string {
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}

export function urlSafeHashDecode(str: string): string {
    return Buffer.from(str.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf-8');
}

export function hash(str: string, length: number): string {
    return CryptoJS.MD5(str).toString(CryptoJS.enc.Base64).substring(1, length || str.length);
}

export function encrypt_string(str: string, passPhrase: string): string {
    return CryptoJS.AES.encrypt(str, passPhrase).toString();
}

export function decrypt_string(str: string, passPhrase: string): string {
    return CryptoJS.AES.decrypt(str, passPhrase).toString();
}