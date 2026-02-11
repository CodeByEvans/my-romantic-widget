// storeService.ts
import { load, Store } from "@tauri-apps/plugin-store";

let store: Store | null = null;

export async function getStore() {
  if (!store) store = await load("store.json");
  return store;
}

export async function setValue(key: string, value: any) {
  const storeInstance = await getStore();
  await storeInstance.set(key, value);
  await storeInstance.save();
}

export async function getValue(key: string) {
  const storeInstance = await getStore();
  return storeInstance.get(key);
}
