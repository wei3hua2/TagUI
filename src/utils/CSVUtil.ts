import fs from 'fs';
import parse from 'csv-parse/lib/sync';
import _ from 'lodash';


export class CSVUtil {

  static readCsvFile(filePath:string) :string[][] {
    let data:string = fs.readFileSync(filePath,'utf8');
    return parse(data);
  }

  static transpose (data:string[][]) :string[][] {
    return _.zip.apply(_, data);
  }
}
