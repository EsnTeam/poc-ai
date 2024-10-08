import { Injectable } from '@angular/core';
import { deleteDB, IDBPDatabase, openDB } from 'idb';
import {
  DATABASE_VERSION,
  DB_NAME,
} from 'src/app/modules/shared/model/constants';
import {
  EsnUtils,
  UserInfo,
} from 'src/assets/external-libs/arom-domain-ipnn-c90-design-lib';

const mockAuthent = false;

export const storeArray = [
  'session-data',
  'currentUser',
  'signals',
  'highestSyncVersion',
  'config',
  'mock',
  'blobs',
  'thumbnails',
] as const;
export type storeType = (typeof storeArray)[number];

@Injectable({
  providedIn: 'root',
})
export class IdbService {
  public idbConnection: IDBPDatabase | null = null;

  constructor() {} // public encryptionService: EncryptionService

  /************/

  /* CREATE DB
  /************/
  public async createIdb(version?: number): Promise<IDBPDatabase> {
    let _self = this;

    return await openDB(DB_NAME, version, {
      async upgrade(db, oldVersion, newVersion, transaction) {
        console.log({ db, oldVersion, newVersion, transaction, version });
        if (!oldVersion || oldVersion < version!) {
          storeArray.forEach((storeName: storeType) => {
            db.createObjectStore(storeName);
          });
        }
        _self.idbConnection = db;
      },
    });
  }

  public async databaseExists(): Promise<Boolean> {
    const dbExists = (await (indexedDB as any).databases())
      .map((db: { name: string; version: number }) => db.name)
      .includes(DB_NAME);

    if (dbExists && (await this.getUserInfo()) === null) {
      await this.deleteDatabase();
      return false;
    } else {
      return dbExists;
    }
  }

  /**********************/
  /* GET/SET/DELETE DATA
  /**********************/
  public upgradeOpt = {
    async upgrade(db: any, oldVersion: any, newVersion: any, transaction: any) {
      if (!oldVersion || oldVersion < newVersion) {
        storeArray.forEach((storeName: storeType) => {
          try {
            db.createObjectStore(storeName);
            console.log('Created store ' + storeName);
          } catch (e) {}
        });
      }
    },
  };

  public async getIdbConnection(): Promise<IDBPDatabase> {
    return (
      this.idbConnection ||
      openDB(DB_NAME, DATABASE_VERSION, this.upgradeOpt).then((db) => {
        this.idbConnection = db;
        return db;
      })
    );
  }

  public async reopenIdbConnection() {
    return new Promise((resolve) => {
      openDB(DB_NAME, DATABASE_VERSION, this.upgradeOpt).then((db) => {
        this.idbConnection = db;
        resolve(db);
      });
    });
  }

  public async upgradeDb() {
    this.idbConnection && (await this.idbConnection.close());
    await this.createIdb(DATABASE_VERSION).then((db) => {
      this.idbConnection = db;
      return db;
    });
  }

  public async getValueByKey(
    store: storeType,
    key: any,
    decrypt: boolean = true
  ): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    let value: any = await db.get(store, key);

    // if (value && decrypt) {
    //   value = await this.encryptionService.decrypt(value);
    // }
    return value;
  }

  public async getUserInfo(): Promise<UserInfo | null> {
    try {
      return await this.getValueByKey('currentUser', 'userInfo', false);
    } catch (error) {
      return this.reopenDbAndGetUserInfo();
    }
  }

  public async reopenDbAndGetUserInfo() {
    try {
      await this.reopenIdbConnection();
      return await this.getValueByKey('currentUser', 'userInfo', false);
    } catch (error) {
      return null;
    }
  }

  public async setValueByKey(
    store: storeType,
    key: any,
    value: any,
    encrypt: boolean = true
  ): Promise<any> {
    console.log('setValueByKey ', store, key, value);
    try {
      // if (encrypt) {
      //   value = await this.encryptionService.encrypt(value);
      // }
      const db: IDBPDatabase = await this.getIdbConnection();

      const data = db.put(store, value, key);
      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      // console.error('setValueByKey', error);
      return undefined;
    }
  }

  public async deleteValueByKey(store: storeType, key: any): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    const data = db.delete(store, key);
    return data;
  }

  public async setValue(
    store: storeType,
    value: any,
    encrypt: boolean = true
  ): Promise<any> {
    // if (encrypt) {
    //   value = await this.encryptionService.encrypt(value);
    // }
    const db: IDBPDatabase = await this.getIdbConnection();
    const data = await db.put(store, value);

    return data;
  }

  public async putDataInStores(
    stores: storeType[],
    data: any,
    encrypt: boolean = true
  ): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    const promises: Promise<any>[] = [];

    for (let i = 0; i < stores.length; i++) {
      const store: storeType = stores[i];
      const storeData: any = data[store];

      if (Array.isArray(storeData)) {
        for (let j = 0; j < storeData.length; j++) {
          const elem = storeData[j];
          promises.push(
            this.setValueByKey(
              store,
              elem.id || elem.networkProviderId || elem.inspectionIdentifier,
              elem
            )
          );
        }
      } else {
        promises.push(this.setValueByKey(store, store, storeData));
      }
    }

    return Promise.all(promises);
  }

  public async getAllValuesFromStore(
    store: storeType,
    decrypt: boolean = true
  ): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    const value = await db.getAll(store);

    // if (decrypt) {
    //   const data = await Promise.all(
    //     value.map(async (elem: any) => {
    //       return await this.encryptionService.decrypt(elem);
    //     })
    //   );

    //   return data;
    // } else {
    return value;
    // }
  }

  public async deleteDatabase(): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    db.close();
    return deleteDB(DB_NAME);
  }

  public async closeDatabase(): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    db.close();
  }

  public async clearStore(store: storeType): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    return db.clear(store);
  }

  public async clearAllStore(): Promise<any> {
    const db: IDBPDatabase = await this.getIdbConnection();
    const promises: Promise<any>[] = [];

    storeArray.forEach((storeName: storeType) => {
      // le store "config" permet de valider le codepin
      // currentUSer contient les info utilisateurs et token gardian/arom
      if (
        db.objectStoreNames.contains(storeName) &&
        storeName !== 'config' &&
        storeName !== 'currentUser'
      ) {
        promises.push(db.clear(storeName));
      }
    });

    return Promise.all(promises);
  }

  /*******************/

  /* SET/GET CODEPIN
  /*******************/
  public async setCodepin(codePin: string): Promise<any> {
    await this.setValueByKey('config', 'key', false);
    return await this.setValueByKey('config', 'codePin', codePin);
  }

  /*******************/

  /* SET/GET WORKSPACEID
  /*******************/
  public async createWorkspaceId(): Promise<any> {
    console.log('createWorkspaceId');
    const workspaceId = EsnUtils.generateRandomUuid();
    return await this.setValueByKey(
      'config',
      'workspaceId',
      workspaceId,
      false
    );
  }

  public async getWorkspaceId(): Promise<any> {
    return await this.getValueByKey('config', 'workspaceId', false);
  }

  /*******************/

  /* SET/GET CURRENTLY UPLOADING FILES
  /*******************/
  public async setCurrentlyUploading(ids: string[]): Promise<any> {
    return await this.setValueByKey('config', 'currentlyUploading', ids, false);
  }

  public async getCurrentlyUploading(): Promise<string[]> {
    return await this.getValueByKey('config', 'currentlyUploading', false);
  }

  public async keyExists(store: string, key: string): Promise<boolean> {
    const db: IDBPDatabase = await this.getIdbConnection();
    return !!(await db.count(store, key));
  }

  /*******************/
  /* MIGRATION
  /*******************/
}
