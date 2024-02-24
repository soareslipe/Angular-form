import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputFilesCustomComponent } from '../input-files-custom/input-files-custom.component';

@Component({
  selector: 'app-form-body',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule, InputFilesCustomComponent],
  templateUrl: './form-body.component.html',
  styleUrl: './form-body.component.css'
})
export class FormBodyComponent {
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      street: [''],
      city: [''],
      state: [''],
      zip: [''],
      fileForm: this.formBuilder.array([])
    });
  }

  showConsole() {
    console.log(this.formData.value);
  }

  onFilesChanged(files: File[]) {
    this.formData.setControl('fileForm', this.formBuilder.array(files));
  }
}