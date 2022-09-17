
export class FileItem {
  public file: File;
  public fileName: string;
  public url: string;
  public estateOfCharge: boolean;
  public progress: number;

  constructor( file: File ){
    this.file = file;
    this.fileName = file.name;
    this.estateOfCharge = false;
    this.progress = 0;
  }
}
