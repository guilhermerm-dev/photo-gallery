import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, Platform } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

import { PhotoGalleryPage } from './photo-gallery.page';

describe('PhotoGalleryPage', () => {
  let component = {} as PhotoGalleryPage;
  let platform = {} as Platform;
  let photoService = {} as PhotoService;
  let fixture = {} as ComponentFixture<PhotoGalleryPage>;

  beforeEach(waitForAsync(() => {
    platform.is = jest.fn();
    photoService = new PhotoService(platform);

    TestBed.configureTestingModule({
      declarations: [PhotoGalleryPage],
      imports: [IonicModule.forRoot()],
      providers: [{ provide: PhotoService, useValue: photoService }]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoGalleryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
