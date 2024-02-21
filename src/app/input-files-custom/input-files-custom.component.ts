import { NgFor } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-files-custom',
  standalone: true,
  imports: [NgFor],
  templateUrl: './input-files-custom.component.html',
  styleUrl: './input-files-custom.component.css'
})
export class InputFilesCustomComponent {
  @Output() filesChanged = new EventEmitter<File[]>();

  files: File[] = [];

  constructor(private formBuilder: FormBuilder) {}

  onFileChange($event: any) {
    const selectedFiles = Array.from($event.target.files) as File[];
    this.files.push(...selectedFiles);
    this.filesChanged.emit(this.files);
  }
}