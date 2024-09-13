import { Attribute, Injectable } from '@angular/core';
import { KeyService } from './key.service';

// import * as fs from 'fs';

// Import chatgpt-api module
import OpenAI from 'openai';
import { CookieService } from 'ngx-cookie-service';
import {
  CONFIG_COOKIE_NAME,
  THREADS_COOKIE_NAME,
} from 'src/app/modules/shared/model/constants';
import { threadId } from 'worker_threads';
import { EsnOpenaiService } from './opeanai.service';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { ObjectSchema } from 'src/app/modules/shared/model/object-schema';
import { PocUtils } from 'src/app/modules/shared/utils/utils';
import { epic55ObjectSchema } from 'src/assets/data/epic-55';
const { XMLParser, XMLBuilder, XMLValidator } = require('fast-xml-parser');

const NAME_ATT = '@_name';
const ID_ATT = '@_xmi:id';

@Injectable({
  providedIn: 'root',
})
export class UmlProcessingService {
  public loadedObjects: ObjectSchema[] = [];
  constructor(
    public oaiService: EsnOpenaiService,
    public httpClient: HttpClient
  ) {}

  public async processUML(objectName: string) {
    const schema = this.loadedObjects.find((o) => o.name == objectName);
    if (schema) {
      return schema;
    } else {
      const object = await this.getElementFromUML(objectName);
      this.loadedObjects.push(object);
      return object;
    }
  }

  public resetLoadedObjects() {
    this.loadedObjects = [];
  }

  public unloadIfNeeded(name: string) {
    if (
      this.loadedObjects.every((o) =>
        o.attributes.every(
          (att) => att.name != name || !att.isSubObjectIncluded
        )
      )
    ) {
      this.loadedObjects = this.loadedObjects.filter((o) => o.name != name);
    }
    console.log(this.loadedObjects);
  }

  public async getElementFromUML(objectName?: string) {
    const umlText = await this.getUMLText();
    const parsedJson = this.umlTextToJson(umlText);

    const packageElements = parsedJson['xmi:XMI']['uml:Model'].packagedElement;
    console.log(packageElements);

    const elm = this.findElementNameInParsedJson(
      packageElements,
      (o: any) => o?.[NAME_ATT] == objectName,
      'packagedElement'
    );
    console.log({ elm });

    const formatedObj = this.objectFormatFromUmlJson(elm, parsedJson);
    console.log(formatedObj);
    return formatedObj;
  }

  public async getUMLText() {
    return lastValueFrom(
      this.httpClient.get('assets/orig_lisible_ids.txt', {
        responseType: 'text',
      })
    );
  }

  public umlTextToJson(txt: string) {
    const options = {
      ignoreAttributes: false,
    };

    const parser = new XMLParser(options);
    return parser.parse(txt);
  }

  public objectFormatFromUmlJson(umlJson: any, baseUmlJson: any) {
    const o = {
      name: umlJson[NAME_ATT],
      attributes: [] as any[],
    };

    umlJson.ownedAttribute.forEach((att: any) => {
      const [type, isPrimitiveType] = this.getType(
        att.type || att['@_type'],
        baseUmlJson
      );
      const lowerVal = att.lowerValue ? +att.lowerValue.value : 1;
      const upperVal = att.upperValue ? att.upperValue.value : 1;

      const isMultivalued = upperVal != 1;
      const isMandatory = lowerVal > 0;

      const uuid = PocUtils.generateRandomUuid();

      if (att[NAME_ATT]) {
        o.attributes.push({
          name: att[NAME_ATT],
          type: type,
          isPrimitiveType,
          isMultivalued,
          isMandatory,
          isIncluded: true,
          uuid,
        });
      } else if (att['@_association']) {
        const objType = this.findElementNameInParsedJson(
          baseUmlJson,
          (o: any) => o?.[ID_ATT] == att?.['@_type']
        );
        const association = this.findElementNameInParsedJson(
          baseUmlJson,
          (o: any) => o?.[ID_ATT] == att?.['@_association']
        );

        o.attributes.push({
          name: (association?.[NAME_ATT] || '') + ' ' + objType?.[NAME_ATT],
          type: objType?.[NAME_ATT],
          isPrimitiveType: false,
          isMultivalued,
          isMandatory,
          isIncluded: true,
          uuid,
        });
      }
    });

    return o;
  }

  public getType(type: any, baseUmlJson: any): any[] {
    if (!type) {
      return [undefined, true];
    }
    if (type['@_href']) {
      return [
        type?.['@_href']
          ?.replace(
            'pathmap://UML_LIBRARIES/UMLPrimitiveTypes.library.uml#',
            ''
          )
          .replace(
            'pathmap://UML_LIBRARIES/EcorePrimitiveTypes.library.uml#E',
            ''
          ),
        true,
      ];
    }
    console.log(typeof type);
    if (typeof type == 'string') {
      const relevantObj = this.findElementNameInParsedJson(
        baseUmlJson,
        (o: any) => o?.[ID_ATT] == type
      );

      if (relevantObj?.['@_xmi:type'] == 'uml:Enumeration') {
        return [
          'Enum ["' +
            relevantObj.ownedLiteral
              .map((x: any) => x?.[NAME_ATT])
              .join('" | "') +
            '"]',
          true,
        ];
      }
      if (relevantObj?.['@_xmi:type'] == 'uml:Class') {
        return [relevantObj?.[NAME_ATT], false];
      }
    }
    return ['[unknown]', true];
  }

  findElementNameInParsedJson(
    jsonO: any,
    condition: Function,
    tagName?: string
  ): any {
    if (condition(jsonO)) {
      return jsonO;
    }
    if (!jsonO || typeof jsonO !== 'object') {
      return null;
    }
    if (Array.isArray(jsonO)) {
      return jsonO.reduce(
        (acc, curr) =>
          acc || this.findElementNameInParsedJson(curr, condition, tagName),
        null
      );
    }
    return !!tagName
      ? this.findElementNameInParsedJson(jsonO[tagName], condition, tagName)
      : Object.values(jsonO).reduce(
          (acc, curr) =>
            acc || this.findElementNameInParsedJson(curr, condition, tagName),
          null
        );
  }
}
