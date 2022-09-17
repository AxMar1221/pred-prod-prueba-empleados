import { Component, OnInit } from '@angular/core';
import { FileItem } from 'src/app/Models/file-item';
import { UploadimgService } from 'src/app/services/uploadimg.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {
  inTheDrop: boolean = false;
  files: FileItem[] = [];

  constructor( public _loadImages: UploadimgService) { }

  ngOnInit() {
  }
  loadImages(){
    this._loadImages.loadImagesFirebase( this.files );
  }
  clearFiles(){
    this.files = [];
  }
}
