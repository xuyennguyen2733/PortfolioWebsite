import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface ArtPreview {
  imagePath: string;
  title?: string;
  description?: string;
  downloadPath?: string;
}

@Component({
  selector: 'app-artwork',
  templateUrl: './artwork.component.html',
  styleUrl: './artwork.component.scss',
})
export class ArtworkComponent {
  readonly dialog = inject(MatDialog);
  safeUrl: SafeResourceUrl;

  artPreviews2D: ArtPreview[] = [
    {
      imagePath: 'images/2d-arts/20190510_213117.webp',
      title: 'Reindeer Chocolate Container',
    },
    {
      imagePath: 'images/2d-arts/20191011_031313.webp',
      title: 'Dad',
    },
    {
      imagePath: 'images/2d-arts/20191011_031604.webp',
      title: 'Mom',
    },
    {
      imagePath: 'images/2d-arts/20210714_022552.webp',
      title: 'Angry Sprite',
    },
    {
      imagePath: 'images/2d-arts/20230108_140402.webp',
      title: 'Fox on the Ceiling',
    },
    {
      imagePath: 'images/2d-arts/balance-2.webp',
    },
    {
      imagePath: 'images/2d-arts/complete-design.webp',
    },
    {
      imagePath: 'images/2d-arts/penup_1706318368879502.webp',
      title: 'Shirt Biter',
    },
    {
      imagePath: 'images/2d-arts/penup_1706318415146002.webp',
      title: 'Ninja Lead',
    },
  ];

  artPreviews3D: ArtPreview[] = [
    {
      imagePath: 'images/3d-arts/scooter.webp',
      downloadPath:
        'https://drive.google.com/file/d/1o2LlOj4GUUE7DuFeem90_OkkUrpfMFBt/view?usp=sharing',
      title: 'A Pink Scooter',
    },
    {
      imagePath: 'images/3d-arts/ninja-lead.webp',
      downloadPath:
        'https://drive.google.com/file/d/1LtFjYHlNEpXZfkPJgxYq1rFx2RN0GJWh/view?usp=sharing',
      title: 'Ninja Lead - Who Rides the Scooter!',
    },
    {
      imagePath: 'images/3d-arts/pagoda.webp',
      downloadPath:
        'https://drive.google.com/file/d/1q6ysS2Gwie9guYgZFU4-dPXsT_-q06lE/view?usp=sharing',
      title: 'A Pagoda',
    },
    {
      imagePath: 'images/3d-arts/carriage.webp',
      downloadPath:
        'https://drive.google.com/file/d/1YTdC36d23OsAIWAkJ193vso5rnlXHPvN/view?usp=sharing',
      title: 'A Carriage',
    },
  ];

  constructor(private _sanitizer: DomSanitizer) {
    this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/uGNTjFFQe0Q',
    );
  }

  openDialog(imagePath: string, title?: string, downloadPath?: string): void {
    const dialogRef = this.dialog.open(PopUpImage, {
      data: { imagePath: imagePath, title: title, downloadPath: downloadPath },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('dialog closed');
    });
  }
}

@Component({
  selector: 'pop-up-image',
  templateUrl: './pop-up-image.html',
})
export class PopUpImage {
  readonly dialogRef = inject(MatDialogRef<ArtworkComponent>);
  readonly data = inject<ArtPreview>(MAT_DIALOG_DATA);
  readonly imagePath: string = this.data.imagePath;
  readonly title?: string = this.data.title;
  readonly downloadPath?: string = this.data.downloadPath;
  downloadName: number | string = Date.now();

  onInit() {
    if (!this.downloadPath) {
      const extension = this.imagePath.substring(
        this.imagePath.indexOf('.') + 1,
      );
      this.downloadName = `${this.downloadName}.${extension}`;
    } else {
      this.downloadName = `${this.downloadName}.fbx`;
    }
  }
}
