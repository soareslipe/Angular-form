import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-files-custom',
  standalone: true,
  imports: [NgFor],
  templateUrl: './input-files-custom.component.html',
  styleUrl: './input-files-custom.component.css'
})
export class InputFilesCustomComponent {
  @Output() filesChanged = new EventEmitter<File[]>();
  @Input() title: String = "Attachments title"

  files: File[] = [];

  onFileChange($event: any) {
    const selectedFiles = Array.from($event.target.files) as File[];
    this.files.push(...selectedFiles);
    this.filesChanged.emit(this.files);
  }

  onDrop($event: any) {
    $event.preventDefault();
    const selectedFiles = Array.from($event.dataTransfer.files) as File[];
    this.files.push(...selectedFiles);
    this.filesChanged.emit(this.files);
  }

  onDragOver($event: any){
    $event.preventDefault();
  }

  handleRemove(indexNum: number){
    this.files.splice(indexNum, 1);
    this.filesChanged.emit(this.files);
  }
}