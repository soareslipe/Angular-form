import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputFilesCustomComponent } from '../input-files-custom/input-files-custom.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-form-body',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, ReactiveFormsModule,
     InputFilesCustomComponent, MatCheckboxModule],
  templateUrl: './form-body.component.html',
  styleUrl: './form-body.component.css'
})
export class FormBodyComponent {
  formData: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formData = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zip: ['', Validators.required],
      toppings: [''],
      fileForm: this.formBuilder.array([])
    });
  }

  showConsole() {
    console.log(this.formData.value);
  }

  onFilesChanged(files: File[]) {
    this.formData.setControl('fileForm', this.formBuilder.array(files));
  }

  addValue($event: any) {
    const value = $event.source.value;
    const checked = $event.checked;
    const checkValues: string[] = this.formData.get('toppings')?.value || []

    if (checked) {
      checkValues.push(value);
    } else {
      const index = checkValues.indexOf(value)
      checkValues.splice(index, 1)
    }
    this.formData.get('toppings')?.setValue(checkValues)
    console.log(this.formData.get('toppings')?.value)
  }
}