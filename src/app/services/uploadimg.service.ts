import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore'
import * as firebase from 'firebase';
import { FileItem } from '../Models/file-item';

@Injectable({
  providedIn: 'root'
})
export class UploadimgService {

  private IMG_FOlDER = 'img';

  constructor( private db: AngularFirestore ) {}

  loadImagesFirebase( images: FileItem[]){
    console.log( images );
  }

  private saveImg( image: { name: string, url: string }) {
    this.db.collection(`/${ this.IMG_FOlDER }`)
    .add( image );
  }
}
