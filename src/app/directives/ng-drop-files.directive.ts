import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../Models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {

  @Input() files: FileItem[] = [];
  @Output() mouseIn: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  @HostListener('dragover', ['$event'])
  public onDragEnter( event: any ){
    this.mouseIn.emit( true );
    this._preventKeep( event );
  }
  @HostListener('dragleave', ['$event'])
  public onDragLeave( event: any ){
    this.mouseIn.emit( false );
  }
  @HostListener('drop', ['$event'])
  public onDrop( event: any ){
    const transfer = this._getTransfer( event );
    if ( !transfer ){
      return;
    }
    this._extracFile( transfer.files );
    this._preventKeep( event );
    this.mouseIn.emit( false );
  }
  private _getTransfer( event: any ){
    return event.dataTransfer ? event.dataTransfer
    : event.originalEvent.dataTransfer;
  }
  private _extracFile( filesList: FileList ) {
    // console.log( filesList );

    for ( const property in Object.getOwnPropertyNames( filesList )){
      const fileTemp = filesList[ property ];
      if ( this._fileCanUpload( fileTemp )){
        const newFile = new FileItem( fileTemp );
        this.files.push( newFile );
      }
    }
    console.log( this.files );
  }
  //validations
  private _fileCanUpload( file: File ): boolean {
    if ( !this._fileWasDrop( file.name ) && this._isImage( file.type )){
      return true;
    } else {
      return false;
    }
  }
  private _preventKeep( event: { preventDefault: () => void; stopPropagation: () => void; } ){
    event.preventDefault();
    event.stopPropagation();
  }
  private _fileWasDrop( fileName: any ): boolean {
    for ( const file of this.files ){
      if ( file.fileName === fileName ) {
        console.log('El archivo' + fileName + 'ya esta cargado' );
        return true;
      }
    }
    return false;
  }
  private _isImage( typeFile: string ): boolean {
    return ( typeFile === '' || typeFile === undefined ) ? false
    : typeFile.startsWith('image');
  }
}
