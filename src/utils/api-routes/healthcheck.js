import { baseURL } from "@/config";

export async function isAlive() {
    try {
        const res = await fetch(`${baseURL}/api/healthcheck`);
        if (res.status === 200) return true;
        return false;
    } catch (err) {
        return false;
    }
}